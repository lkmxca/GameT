//app.js
//1:复制服务器端模块
//2:引入第三方模块
const mysql = require("mysql");
const express = require("express");
const session = require("express-session");
const multer=require("multer");//微信小程序上传头像
const fs=require("fs");
//2.1:引入跨域模块
const cors = require("cors");
//2.2:配置允许列表

//3:创建连接池
const pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"qqtu"//引入库
})
//配置模块对象

//4:创建express对象
var server = express();
//4.1:配置允许列表3000允许
server.use(session({
  secret:"128位密钥",//添加密钥
  resave:true,//添加路有修改值为true
  saveUninitialized:true,//保存初始化数据
}));
// 跨域
server.use(cors({
  //origin允许访问列表
  origin:'*',
  credentials:true//提高安全级别每次访问验证
}))

//5:绑定监听端口 3600
server.listen(3600);
//项目中所有图片放在服务器
server.use(express.static("public"));
server.use(express.static("upload"));

// 6:home精选页内容
server.get("/Hoe",(req,res)=>{
  var sql = "SELECT qt_wwid,qt_bimgurl,qt_simgurl,qt_text FROM qqtu_homen";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:result});
  })
})

// 7:home安利墙内容
server.get("/Hoa",(req,res)=>{
  var sql = "SELECT qt_eeid,qt_vurl,qt_ourl,qt_turl FROM qqtu_homea";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:result});
  })
})

// 8:发现页头轮播
server.get("/Ft",(req,res)=>{
  var sql = "SELECT qt_rrid,qt_url FROM qqtu_ftop";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:result});
  })
})

// 9:发现内容二次轮播表1
server.get("/Fto",(req,res)=>{
  var sql = "SELECT qt_ttid,qt_ourl,qt_turl,qt_btext,qt_jtext FROM qqtu_ttwo";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:result});
  })
})

// 10:发现内容二次轮播表2
server.get("/Ftot",(req,res)=>{
  var sql = "SELECT qt_yyid,qt_ourl,qt_turl,qt_btext,qt_jtext FROM qqtu_ttwot";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:result});
  })
})

// 11:发现内容底部1
server.get("/Ftboo",(req,res)=>{
  var sql = "SELECT qt_uuid,qt_btext,qt_tyiurl,qt_tyitext,qt_terurl,qt_tertext,qt_tsanurl,qt_tsantext,qt_tsiurl,qt_tsitext FROM qqtu_tbomo";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:result});
  })
})

// 12:发现内容底部2
server.get("/Ftbot",(req,res)=>{
  var sql = "SELECT qt_ooid,qt_btext,qt_tyiurl,qt_tyitext,qt_terurl,qt_tertext,qt_tsanurl,qt_tsantext FROM qqtu_tbomt";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:result});
  })
})

// 13:我的游戏
server.get("/MMYY",(req,res)=>{
  var xt = req.query.xt;
  var txt = req.query.txt;
  var times = req.query.times;
  console.log(times);
  var sql = "INSERT INTO qqtu_mygame VALUES(NULL,?,?,?)";
  pool.query(sql,[xt,txt,times],(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:result});
  })
})

// 14:查询我的游戏
server.get("/Mu",(req,res)=>{
  var sql = "SELECT qt_ppid,qt_url,qt_text,qt_time FROM qqtu_mygame ORDER BY qt_ppid DESC";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:result});
  })
})

// 15:清空我的游戏记录
server.get("/Cmy",(req,res)=>{
  var sql = "TRUNCATE TABLE qqtu_mygame";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"清空成功"});
  })
})

// 16:上传图片
var upload=multer({dest:"upload/"});
// 接收post请求/uploadFile
server.post("/uploadFile",upload.single("mypic"),(req,res)=>{
  //判断文件大小不能超过2MB
  var size=req.file.size/1000/1000;
  // console.log(size)
  if(size>2){
    res.send({code:-1,msg:"上传文件过大,请重新选择"});
    return;
  }
  //判断文件必须为图片
  var type=req.file.mimetype;
  var idx=type.indexOf("image");
  if(idx==-1){
  res.send({code:-2,msg:"上传文件类型不正确"});
    return;
  }
  //获取原文件
  var src=req.file.originalname;
  //创建新文件名[?]
  //时间戳+随机数+.后缀
  var ft=new Date().getTime();
  var fr=parseInt(Math.random()*9999);
  var i3=src.lastIndexOf(".");
  var suff=src.substring(i3);
  var des=__dirname+"/upload/"+ft+fr+suff;
  //将临时文件移动 upload目录下
  fs.renameSync(req.file.path,des);
  res.send(des);
  // console.log(des);
})

// 17:投稿添加
server.get("/addMoods",(req,res)=>{
  var imgs = "http://127.0.0.1:3600/"+req.query.imgs;
  console.log(imgs);
  var texts = req.query.texts;
  console.log(texts);
  var sql = "INSERT INTO qqtu_mytou VALUES(NULL,?,?)";
  pool.query(sql,[imgs,texts],(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:result});
  })
})

// 18:意见
server.get("/Tyi",(req,res)=>{
  var ye = req.query.ye;
  var yp = req.query.yp;
  var yid = req.query.yid;
  var time = req.query.time;
  var sql = "INSERT INTO qqtu_myfyi VALUES(NULL,?,?,?,?)";
  pool.query(sql,[ye,yp,yid,time],(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:result});
  })
})

// 19:意见记录查询
server.get("/Yilo",(req,res)=>{
  var sql = "SELECT qt_ssid,qt_yij,qt_ytime FROM qqtu_myfyi ORDER BY qt_ssid DESC";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    if(result.length == 0){
      res.send({code:-1,msg:"查询失败"});
    }else{
      res.send({code:1,data:result});
    }
  })
})

// 20：意见记录清除
server.get("/ClearY",(req,res)=>{
  var sql = "TRUNCATE TABLE qqtu_myfyi";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"删除成功"});
  })
})