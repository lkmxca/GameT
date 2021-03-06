// pages/yijlu/yijlu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    low:[],//绑定意见记录数据
  },
  // 清除记录
  clearboth() {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:3600/ClearY',
      method:'GET',
      data:[],
      success: function (res) {
        wx.showToast({
          title: '清除成功',
          icon:'none'
        })
      }
    })
  },
  // 意见记录数据
  YiLu() {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:3600/Yilo',
      method:'GET',
      data:[],
      success: function (res) {
        // console.log(res.data.data);
        if(res.data.code == 1){
          that.setData({
            low: res.data.data
          })
        }else{
          wx.showToast({
            title: '记录已经为空',
            icon:'none'
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.YiLu();//意见记录数据
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