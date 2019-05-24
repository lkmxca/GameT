// pages/an/an.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clear:'一键去除广告',
    fuy:'复原',
    welcome:'欢迎您的畅游',
    maj:'马上进入',
    // 安利墙内容数据
    aow: [],
    // 按钮图片初始效果
    bl:true,
  },
  // 安利墙数据
  Anl: function () {
    // 弹出提示框
    wx.showToast({
      title: '正在加载',//提示内容
      icon: 'loading',//提示图标，只支持success和loading
      duration: 1000,//提示框存在时间，单位毫秒
      mask: true//是否显示透明蒙层，默认false
    });
    // 安利墙ajax请求
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:3600/Hoa',
      method: 'GET',
      data: [],
      success: function (res) {
        // console.log(res.data.data);
        // 数据追加效果
        var aows = res.data.data;
        // console.log(aows.length);
        // 小程序中必须这样写才能传给初始值
        that.setData({
          aow: aows,//当前页内容
        })
        // 数据加载成功并且显示结束
        // 隐藏加载动画
        wx.hideLoading();
      }
    });
  },
  // 去除广告点击
  change: function (e){
    this.setData({
      bl:false
    })
  },
  // 复原点击
  change2: function (e) {
    this.setData({
      bl: true,
      time:0
    });
  },
  // 视频播放时
  zhan : function () {
    wx.showToast({
      title: '感谢您的观看',
      icon:'none'
    })
  },
  // 马上进入
  jinru: function (e) {
    wx.showLoading({
      title: '正在进入',
    });
    setInterval(()=>{
      // 隐藏加载动画
      wx.hideLoading();
    },1000);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Anl();//安利墙数据
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
      icon: 'loading'
    })
    wx.showNavigationBarLoading();//在标题栏中显示加载
    setTimeout(() => {
      wx.hideNavigationBarLoading();//完成后停止加载
      wx.stopPullDownRefresh();//停止下拉刷新
    }, 1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})