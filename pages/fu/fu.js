// pages/fu/fu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    next:'新游榜',
    months:'查看更多',
    tlist:[],//头轮播数据
    indicatorDots: true,//轮播指示圆点是否显示
    autoplay: true,//轮播是否自动播放
    interval: 10000,//轮播变换时间
    tlist1:[],//二次轮播1
    tlist2:[],//二次轮播2
    tbom1:[],//底部内容1
    tbom2:[],//底部内容2
  },
  // 点击进入
  jinru: function (e) {
    wx.showToast({
      title: '正在进入',
      icon: 'loading',//提示图标，只支持success和loading
      duration: 1000,//提示框存在时间，单位毫秒
      mask: true//是否显示透明蒙层，默认false
    })
  },
  // 底部内容2
  Fbom2: function () {
    wx.showLoading({
      title: '正在加载',
    });
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:3600/Ftbot',
      method: "GET",
      data: [],
      success: function (res) {
        that.setData({
          tbom2: res.data.data
        })
        // 隐藏加载动画
        wx.hideLoading();
      }
    })
  },
  // 底部内容1
  Fbom1: function () {
    wx.showLoading({
      title: '正在加载',
    });
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:3600/Ftboo',
      method: "GET",
      data: [],
      success: function (res) {
        that.setData({
          tbom1: res.data.data
        })
        // 隐藏加载动画
        wx.hideLoading();
      }
    })
  },
  // 查看更多
  qdai: function (e) {
    wx.showToast({
      title: '敬请期待',
      icon: 'loading',//提示图标，只支持success和loading
      duration: 1000,//提示框存在时间，单位毫秒
      mask: true//是否显示透明蒙层，默认false
    })
  },
  // 二次轮播2
  Flun2: function () {
    wx.showLoading({
      title: '正在加载',
    });
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:3600/Ftot',
      method: "GET",
      data: [],
      success: function (res) {
        that.setData({
          tlist2: res.data.data
        })
        // 隐藏加载动画
        wx.hideLoading();
      }
    })
  },
  // 二次轮播1
  Flun1: function () {
    wx.showLoading({
      title: '正在加载',
    });
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:3600/Fto',
      method: "GET",
      data: [],
      success: function (res) {
        that.setData({
          tlist1: res.data.data
        })
        // 隐藏加载动画
        wx.hideLoading();
      }
    })
  },
  // 头轮播
  Flun: function () {
    wx.showLoading({
      title: '正在加载',
    });
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:3600/Ft',
      method:"GET",
      data:[],
      success: function (res) {
        that.setData({
          tlist : res.data.data
        })
        // 隐藏加载动画
        wx.hideLoading();
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Flun();//头轮播
    this.Flun1();//二次轮播1
    this.Flun2();//二次轮播2
    this.Fbom1();//底部内容1
    this.Fbom2();//底部内容2
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