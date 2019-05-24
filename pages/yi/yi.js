// pages/yi/yi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 意见记录跳转
  dtiao(e) {
    wx.navigateTo({
      url: '../yijlu/yijlu',
      fail: function () {//失败后的回调
        wx.showToast({
          title: '网络错误，请重新输入',
        })
      }
    })
  },
  // 表单提交
  formSubmit(e) {
    // console.log('form发生了submit事件，携带数据为：', e.detail.value)
    // 获取时间
    var time = new Date();
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var min = time.getMinutes();
    var s = time.getSeconds();
    // console.log(min);
    if (y < 10) {
      y = '0' + y;
    }
    if (m < 10) {
      m = '0' + m;
    }
    if (d < 10) {
      d = '0' + d;
    }
    if (h < 10) {
      h = '0' + h;
    }
    if (min < 10) {
      // console.log(1);
      min = '0' + min;
    }
    if (s < 10) {
      s = '0' + s;
    }
    // console.log(min);
    // console.log(y,m,d,h,min,s);
    var times = y + '/' + m + '/' + d + '  ' + h + ':' + min + ':' + s;
    // console.log(times);
    // 获取邮箱、手机号、意见
    var yemail = e.detail.value.yemail;
    var yphone = e.detail.value.yphone;
    var yider = e.detail.value.yider;
    // console.log(yemail,yphone,yider);
    // 规则
    var guiyx = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    var guisj = /^1[34578]\d{9}$/;
    var guiyj = /^[\u4e00-\u9fa5]|[\（\）\《\》\——\；\，\。\“\”\<\>\！]{2,200}$/;
    // 判断
    if(!guiyx.test(yemail)){
      wx.showToast({
        title: '邮箱格式不正确,请重新输入',
        icon:'none'
      })
      return;
    }
    if(!guisj.test(yphone)){
      wx.showToast({
        title: '手机号格式不正确,请重新输入',
        icon:'none'
      })
      return;
    }
    if(!guiyj.test(yider)){
      wx.showToast({
        title: '请输入2到200字中文汉字',
        icon:'none'
      })
      return;
    }
    // 请求
    wx.request({
      url: 'http://127.0.0.1:3600/Tyi?ye='+yemail+'&yp='+yphone+'&yid='+yider+'&time='+times,
      method:'GET',
      data:[],
      success: function (res) {
        wx.showToast({
          title: '提交成功,感谢您的反馈',
          icon:'none'
        })
      }
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