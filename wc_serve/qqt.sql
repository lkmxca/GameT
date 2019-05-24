SET NAMES UTF8;
DROP DATABASE IF EXISTS qqtu;
CREATE DATABASE qqtu CHARSET=UTF8;
USE qqtu;

/*底部导航栏图片*/
CREATE TABLE qqtu_footernv(
  qt_qqid INT PRIMARY KEY AUTO_INCREMENT,   /*qqid*/ 
  qt_imgurl VARCHAR(255)                    /*图片路径*/
);
INSERT INTO qqtu_footernv VALUES(NULL,"http://127.0.0.1:3600/fu.png"),
(NULL,"http://127.0.0.1:3600/fu-active.png"),
(NULL,"http://127.0.0.1:3600/game.png"),
(NULL,"http://127.0.0.1:3600/game-active.png"),
(NULL,"http://127.0.0.1:3600/myd.png"),
(NULL,"http://127.0.0.1:3600/myd-active.png");

/*home精选内容表*/
CREATE TABLE qqtu_homen(
  qt_wwid INT PRIMARY KEY AUTO_INCREMENT,     /*wwid*/
  qt_bimgurl VARCHAR(255),                    /*大图*/
  qt_simgurl VARCHAR(255),                    /*小图*/
  qt_text VARCHAR(255)                        /*文字介绍*/
);
INSERT INTO qqtu_homen VALUES(NULL,"http://127.0.0.1:3600/home/tu1.JPG","http://127.0.0.1:3600/home/tu1-in.JPG","热血修仙"),
(NULL,"http://127.0.0.1:3600/home/tu2.JPG","http://127.0.0.1:3600/home/tu2-in.JPG","热血合击"),
(NULL,"http://127.0.0.1:3600/home/tu3.JPG","http://127.0.0.1:3600/home/tu3-in.JPG","冒险与挖矿"),
(NULL,"http://127.0.0.1:3600/home/tu4.JPG","http://127.0.0.1:3600/home/tu4-in.JPG","跳舞的线"),
(NULL,"http://127.0.0.1:3600/home/tu5.JPG","http://127.0.0.1:3600/home/tu5-in.JPG","心动练习生"),
(NULL,"http://127.0.0.1:3600/home/tu6.JPG","http://127.0.0.1:3600/home/tu6-in.JPG","勇者斗恶狼"),
(NULL,"http://127.0.0.1:3600/home/tu7.JPG","http://127.0.0.1:3600/home/tu7-in.JPG","传奇来了"),
(NULL,"http://127.0.0.1:3600/home/tu8.JPG","http://127.0.0.1:3600/home/tu8-in.JPG","小田田"),
(NULL,"http://127.0.0.1:3600/home/tu9.JPG","http://127.0.0.1:3600/home/tu9-in.JPG","王朝霸域"),
(NULL,"http://127.0.0.1:3600/home/tu4.JPG","http://127.0.0.1:3600/home/tu4-in.JPG","跳舞的线"),
(NULL,"http://127.0.0.1:3600/home/tu10.JPG","http://127.0.0.1:3600/home/tu10-in.JPG","蛇它虫"),
(NULL,"http://127.0.0.1:3600/home/tu11.JPG","http://127.0.0.1:3600/home/tu11-in.JPG","全民大富翁OL"),
(NULL,"http://127.0.0.1:3600/home/tu12.JPG","http://127.0.0.1:3600/home/tu12-in.JPG","萌犬消消消"),
(NULL,"http://127.0.0.1:3600/home/tu13.JPG","http://127.0.0.1:3600/home/tu13-in.JPG","大家来找茬腾讯版");

/*home安利墙内容表*/
CREATE TABLE qqtu_homea(
  qt_eeid INT PRIMARY KEY AUTO_INCREMENT,  /*eeid*/
  qt_vurl VARCHAR(255),                    /*视频地址*/
  qt_ourl VARCHAR(255),                    /*广告地址*/
  qt_turl VARCHAR(255)                     /*图片地址*/
);
INSERT INTO qqtu_homea VALUES(NULL,"http://127.0.0.1:3600/home-anli/x.mp4","http://127.0.0.1:3600/home/tu1.JPG","http://127.0.0.1:3600/home-anli/play.png"),
(NULL,"http://127.0.0.1:3600/home-anli/x.mp4","http://127.0.0.1:3600/home/tu2.JPG","http://127.0.0.1:3600/home-anli/play.png"),
(NULL,"http://127.0.0.1:3600/home-anli/x.mp4","http://127.0.0.1:3600/home/tu3.JPG","http://127.0.0.1:3600/home-anli/play.png"),
(NULL,"http://127.0.0.1:3600/home-anli/x.mp4","http://127.0.0.1:3600/home/tu4.JPG","http://127.0.0.1:3600/home-anli/play.png"),
(NULL,"http://127.0.0.1:3600/home-anli/x.mp4","http://127.0.0.1:3600/home/tu5.JPG","http://127.0.0.1:3600/home-anli/play.png"),
(NULL,"http://127.0.0.1:3600/home-anli/x.mp4","http://127.0.0.1:3600/home/tu6.JPG","http://127.0.0.1:3600/home-anli/play.png"),
(NULL,"http://127.0.0.1:3600/home-anli/x.mp4","http://127.0.0.1:3600/home/tu7.JPG","http://127.0.0.1:3600/home-anli/play.png"),
(NULL,"http://127.0.0.1:3600/home-anli/x.mp4","http://127.0.0.1:3600/home/tu8.JPG","http://127.0.0.1:3600/home-anli/play.png");

/*发现内容头轮播表*/
CREATE TABLE qqtu_ftop(
  qt_rrid INT PRIMARY KEY AUTO_INCREMENT,        /*rrid*/
  qt_url VARCHAR(255)                        /*图片url*/
);
INSERT INTO qqtu_ftop VALUES(NULL,"http://127.0.0.1:3600/fa/top1.JPG"),
(NULL,"http://127.0.0.1:3600/fa/top2.JPG");

/*发现内容二次轮播表1*/
CREATE TABLE qqtu_ttwo(
  qt_ttid INT PRIMARY KEY AUTO_INCREMENT,   /*ttid*/
  qt_ourl VARCHAR(255),                     /*标号图*/
  qt_turl VARCHAR(255),                     /*主图*/
  qt_btext VARCHAR(255),                    /*标题*/
  qt_jtext VARCHAR(255)                     /*介绍*/
);
INSERT INTO qqtu_ttwo VALUES(NULL,"http://127.0.0.1:3600/fa/fone.JPG","http://127.0.0.1:3600/fa/t1.JPG","冒险与挖矿","放置 | 休闲 | RPG"),
(NULL,"http://127.0.0.1:3600/fa/ftwo.JPG","http://127.0.0.1:3600/fa/t2.JPG","心动练习生","换装 | 休闲 | 消除"),
(NULL,"http://127.0.0.1:3600/fa/fthree.JPG","http://127.0.0.1:3600/fa/t3.JPG","勇者斗饿狼","童话 | 打铁 | 挂机养成");

/*发现内容二次轮播表2*/
CREATE TABLE qqtu_ttwot(
  qt_yyid INT PRIMARY KEY AUTO_INCREMENT,   /*ttid*/
  qt_ourl VARCHAR(255),                     /*标号图*/
  qt_turl VARCHAR(255),                     /*主图*/
  qt_btext VARCHAR(255),                    /*标题*/
  qt_jtext VARCHAR(255)                     /*介绍*/
);
INSERT INTO qqtu_ttwot VALUES(NULL,"http://127.0.0.1:3600/fa/fone.JPG","http://127.0.0.1:3600/fa/t4.JPG","全民头铁","全民 | 休闲 | 敏捷"),
(NULL,"http://127.0.0.1:3600/fa/ftwo.JPG","http://127.0.0.1:3600/fa/t5.JPG","星星快跑","跳跃 | 休闲 | 画面唯美"),
(NULL,"http://127.0.0.1:3600/fa/fthree.JPG","http://127.0.0.1:3600/fa/t6.JPG","跳跃吧，MT","我叫MT | Q萌形象 | 8大职业");

/*发现内容底部1*/
CREATE TABLE qqtu_tbomo(
  qt_uuid INT PRIMARY KEY AUTO_INCREMENT,   /*uuid*/
  qt_btext VARCHAR(255),                    /*标题*/
  qt_tyiurl VARCHAR(255),                   /*图1*/
  qt_tyitext VARCHAR(255),                  /*图1名*/  
  qt_terurl VARCHAR(255),                   /*图2*/
  qt_tertext VARCHAR(255),                  /*图2名*/ 
  qt_tsanurl VARCHAR(255),                  /*图3*/
  qt_tsantext VARCHAR(255),                 /*图3名*/ 
  qt_tsiurl VARCHAR(255),                   /*图4*/
  qt_tsitext VARCHAR(255)                   /*图4名*/    
);
INSERT INTO qqtu_tbomo VALUES(NULL,"双旦节强势推荐","http://127.0.0.1:3600/fa/ftx1.JPG","QQ游戏","http://127.0.0.1:3600/fa/ftx2.JPG","英雄杀","http://127.0.0.1:3600/fa/ftx3.JPG","跳舞的线","http://127.0.0.1:3600/fa/ftx4.JPG","猎鱼达人H5"),
(NULL,"精英射手集结地","http://127.0.0.1:3600/fa/ftx5.JPG","西部射杀","http://127.0.0.1:3600/fa/ftx6.JPG","神经射手","http://127.0.0.1:3600/fa/ftx7.JPG","疯狂杀手","http://127.0.0.1:3600/fa/ftx8.JPG","双枪打僵尸"),
(NULL,"打怪升级制霸全服","http://127.0.0.1:3600/fa/ftx9.JPG","王朝霸域","http://127.0.0.1:3600/fa/ftx10.JPG","烽火战国","http://127.0.0.1:3600/fa/ftx11.JPG","西游后传","http://127.0.0.1:3600/fa/ftx12.JPG","热血合击"),
(NULL,"亿万富翁养成攻略","http://127.0.0.1:3600/fa/ftx13.JPG","小田田","http://127.0.0.1:3600/fa/ftx14.JPG","点击暴富","http://127.0.0.1:3600/fa/ftx15.JPG","鲜花小镇","http://127.0.0.1:3600/fa/ftx16.JPG","全民当首富"),
(NULL,"一个失误都不能有","http://127.0.0.1:3600/fa/ftx17.JPG","勇者斗饿狼","http://127.0.0.1:3600/fa/ftx18.JPG","妖精快躲","http://127.0.0.1:3600/fa/ftx19.JPG","闪电球球","http://127.0.0.1:3600/fa/ftx20.JPG","疯狂闪避鸡");

/*发现内容底部2*/
CREATE TABLE qqtu_tbomt(
  qt_ooid INT PRIMARY KEY AUTO_INCREMENT,   /*uuid*/
  qt_btext VARCHAR(255),                    /*标题*/
  qt_tyiurl VARCHAR(255),                   /*图1*/
  qt_tyitext VARCHAR(255),                  /*图1名*/  
  qt_terurl VARCHAR(255),                   /*图2*/
  qt_tertext VARCHAR(255),                  /*图2名*/ 
  qt_tsanurl VARCHAR(255),                  /*图3*/
  qt_tsantext VARCHAR(255)                 /*图3名*/     
);
INSERT INTO qqtu_tbomt VALUES(NULL,"高智商充电必备","http://127.0.0.1:3600/fa/ftq1.JPG","一笔人生O","http://127.0.0.1:3600/fa/ftq2.JPG","脑力达人","http://127.0.0.1:3600/fa/ftq3.JPG","疯狂女神探"),
(NULL,"超易上瘾的养成游戏","http://127.0.0.1:3600/fa/ftq4.JPG","王朝霸域","http://127.0.0.1:3600/fa/ftq5.JPG","暖暖小镇","http://127.0.0.1:3600/fa/ftq6.JPG","夜店之王");

/*我的游戏*/
CREATE TABLE qqtu_mygame(
  qt_ppid INT PRIMARY KEY AUTO_INCREMENT,   /*ppid*/
  qt_url VARCHAR(255),                      /*图片url*/
  qt_text VARCHAR(255),                     /*文字标题*/
  qt_time VARCHAR(255)                      /*时间*/
);

/*投稿*/
CREATE TABLE qqtu_mytou(
  qt_aaid INT PRIMARY KEY AUTO_INCREMENT,   /*ppid*/
  qt_url VARCHAR(255),                      /*图片url*/
  qt_text VARCHAR(255)                      /*文字标题*/
);

/*意见*/
CREATE TABLE qqtu_myfyi(
  qt_ssid INT PRIMARY KEY AUTO_INCREMENT,    /*ssid*/
  qt_youx VARCHAR(255),                      /*邮箱*/
  qt_shouj VARCHAR(255),                     /*手机号*/
  qt_yij VARCHAR(255),                       /*意见*/
  qt_ytime VARCHAR(255)                      /*时间*/
);