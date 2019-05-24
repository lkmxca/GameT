// pages/myd/myd.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yname:'获取头像昵称',
    mygame:'我的游戏记录',
    myshe:'游戏通知设置',
    myyi:"意见",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 意见跳转
  myyi: function () {
    wx.navigateTo({
      url: '../yi/yi',
      fail: function () {//失败后的回调
        wx.showToast({
          title: '网络错误，请重新输入',
        })
      }
    })
  },
  // 游戏通知设置跳转
  mytong: function () {
    wx.navigateTo({
      url: '../she/she',
      fail: function () {//失败后的回调
        wx.showToast({
          title: '网络错误，请重新输入',
        })
      }
    })
  },
  // 我的游戏跳转
  mygame: function () {
    wx.navigateTo({
      url: '../mygame/mygame',
      fail: function () { //失败后的回调；
        wx.showToast({
          title: '网络错误，请重新进入',
        })
      }         
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
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