// pages/she/she.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isd:false,
    wait:'该功能正在开发中，请敬请期待',
    xshuo:'详细说明',
    shuo:'说明',
    text1:'Game推为玩家提供游戏最新动态通知服务。',
    text2:'如果您无需该项服务，可手动将推送关闭。',
    good:'好的'
  },
  // 详细说明
  tans: function () {
    this.setData({
      isd:true
    })
  },
  // 关闭
  guan: function () {
    this.setData({
      isd:false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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