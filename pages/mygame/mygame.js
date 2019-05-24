// pages/mygame/mygame.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clear:'清除记录',
    maj:'马上进入',
    mmu:[],//记录数据
  },
  // 清空记录
  clear: function () {
    // 弹出选择框
    var that = this;
    wx.showModal({
      title: '温馨提示', //提示信息的标题
      content: '是否确认删除记录',//提示信息的内容
      // confirmColor:'#0af',//确认按钮颜色
      cancelColor:'#0af',//取消按钮颜色
      success: function (res) {
        wx.request({
          url: 'http://127.0.0.1:3600/Cmy',
          method: 'GET',
          data: [],
          success: function (res) { 
            // 删除成功刷新
            // this.MMu();//记录数据
            that.setData({
              mmu:''
            })
          }
        })
      }
    })
  },
  // 记录数据
  MMu: function () {
    wx.showLoading({
      title: '正在加载',
    });
    // console.log(this.data.mmu.length);
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:3600/Mu',
      method:'GET',
      data:[],
      success:function (res) {
        // console.log(res.data.data);
        var mmus = res.data.data;
        that.setData({
          mmu : mmus
        })
        wx.hideLoading();
        if (that.data.mmu.length == 0) {
          wx.showToast({
            title: '请先查看游戏',
            icon: "loading"
          })
          // return;
        }
      }
    })
  },
  // 马上进入
  jjnn: function () {
    wx.showToast({
      title: '正在进入',//提示内容
      icon: 'loading',//提示图标，只支持success和loading
      duration: 1000,//提示框存在时间，单位毫秒
      mask: true//是否显示透明蒙层，默认false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.MMu();//记录数据
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