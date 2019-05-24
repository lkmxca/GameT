// pages/home/home.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 内容页码
    // pno: 0,
    // 页大小
    // pageSize: 4,
    // home内容是否还有下一页数据
    // hasMore: true,
    // home精选内容数据
    row: [],
    // 判断
    has:false,
    mas:'马上玩'
  },
  // 日期
  // OpenV: function () {
  //   var d = new Date();
  //   console.log(d.getMonth() + 1, d.getDate());
  // },
  // home内容数据
  LoadMore: function () {
    // 弹出提示框
    wx.showToast({
      title: '正在加载',//提示内容
      icon: 'loading',//提示图标，只支持success和loading
      duration: 1000,//提示框存在时间，单位毫秒
      mask: true//是否显示透明蒙层，默认false
    });
    // 如果数据不够提示信息
    // if (this.hasMore == false) {
    //   wx.showToast({
    //     title: '没有更多的数据了',
    //     duration: 1000,
    //     mask: true
    //   });
    //   return;
    // }
    // 1:获取页码 +1
    // var pno = this.data.pno + 1;//pno此时原页码并未发生改变
    // console.log(pno);
    // 2:获取页内数量
    // var pageSize = this.data.pageSize;
    // console.log(pageSize);
    wx.showLoading({
      title: '正在加载中',
    });
    var that = this;//必须有，重置data{}里数据时候setData方法的this应为以及函数的this, 如果在下方的sucess直接写this就变成了wx.request()的this了
    // 精选ajax请求
    // wx.request({
    //   url: 'http://127.0.0.1:3600/Hoe?pno=' + pno,
    //   method: 'GET',
    //   data: [],
    //   success: function (res) {
    //     // 数据追加效果
    //     var rows = that.data.row.concat(res.data.data);
    //     // 小程序中必须这样写才能传给初始值
    //     that.setData({
    //       row: rows,//当前页内容
    //       pno: pno,//修改当前页码
    //     })
    //     // 数据加载成功并且显示结束
    //     // 隐藏加载动画
    //     wx.hideLoading();
    //     // 判断是否还存在数据
    //     if (that.data.pno >= res.data.pageCount) {
    //       that.setData({
    //         hasMore: false
    //       })
    //     }
    //   }
    // });
    wx.request({
      url: 'http://127.0.0.1:3600/Hoe',
      method: 'GET',
      data: [],
      success: function (res) {
        // 数据追加效果
        var rows = res.data.data;
        // 小程序中必须这样写才能传给初始值
        that.setData({
          row: rows,//当前页内容
        })
        // 数据加载成功并且显示结束
        // 隐藏加载动画
        wx.hideLoading();
        // 判断是否还存在数据
        // if (that.data.pno >= res.data.pageCount) {
        //   that.setData({
        //     hasMore: false
        //   })
        // }
      }
    });
  },
  // 搜索切换
  // SuoClick: function () {
  //   wx.navigateTo({
  //     url: '../sous/sous',
  //   })
  // },
  // 马上玩
  dianji: function (e) {
    // 弹出提示框
    wx.showToast({
      title: '正在加载',//提示内容
      icon: 'loading',//提示图标，只支持success和loading
      duration: 1000,//提示框存在时间，单位毫秒
      mask: true//是否显示透明蒙层，默认false
    });
  },
  // 点击获取元素
  navget: function (e) {
    // console.log(this.data.row);
    // 下标
    var ids = parseInt(e.currentTarget.dataset.id);
    // console.log(ids);
    // var tt = [];
    // for(var item of this.data.row){
    //   tt.push(item.qt_wwid)
    // }console.log(tt);
    // console.log(this.data.row[ids-1]);
    // 小图
    var xtu = this.data.row[ids-1].qt_simgurl;
    // 文字标题
    var ttext = this.data.row[ids-1].qt_text;
    // console.log(xtu,ttext);
    // 时间
    var time = new Date();
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    var h = time.getHours();
    var min = time.getMinutes();
    var s = time.getSeconds();
    // console.log(min);
    if(y < 10){
      y = '0' + y;
    }
    if(m < 10){
      m = '0' + m;
    }
    if(d < 10){
      d = '0' + d;
    }
    if(h < 10){
      h = '0' + h;
    }
    if(min < 10){
      // console.log(1);
      min = '0' + min;
    }
    if(s < 10){
      s = '0' + s;
    }
    // console.log(min);
    // console.log(y,m,d,h,min,s);
    var times = y+'/'+m+'/'+d+'  '+h+':'+min+':'+s;
    // console.log(times);
    // 判断
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:3600/Mu',
      method: 'GET',
      data: [],
      success: function (res) {
        // console.log(res.data.data);
        var tt = [];
        for (var item of res.data.data) {
          tt.push(item.qt_url);
        }
        // console.log(tt);
        // console.log(tt[ids-1]);
        if (tt[ids - 1] == xtu){
          that.setData({
            has:true
          });
          // console.log(that.data.has);
          // console.log(111);
        }else{
          that.setData({
            has: false
          });
          // 发送请求添加数据
          wx.request({
            url: 'http://127.0.0.1:3600/MMyy?xt=' + xtu + '&txt=' + ttext + '&times=' + times,
            method: 'GET',
            data: [],
            success: function (res) {
              // console.log(res.data.data);
            }
          })
        }
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    // this.OpenV();// 日期
    this.LoadMore();// home精选内容数据
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showToast({
      title: 'Loading',
      icon:'loading'
    })
    wx.showNavigationBarLoading();//在标题栏中显示加载
    setTimeout(()=>{
      wx.hideNavigationBarLoading();//完成后停止加载
      wx.stopPullDownRefresh();//停止下拉刷新
    },1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 页面内容追加
    // this.LoadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})