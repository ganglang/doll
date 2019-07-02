// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "winW":0,
    "winH":0,
    "inputW":0,
    "btnState":"default",
    "bthType":"default",
    "disabled": false,
    "radio":false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page=this;
    wx.setNavigationBarTitle({
      title: '用户注册',
    })
    wx.getSystemInfo({
      success: function(res) {
        var inputW=res.windowWidth-28-90;
        page.setData({
          "winW":res.windowWidth,
          "winH":res.windowHeight,
          "inputW":inputW
        })
      },
    })
  },
  formSubmit:function(event){
    var page=this;
    var user = new Object();
    user.name=event.detail.value.name;
    user.password=event.detail.value.password;
    user.contactor = event.detail.value.contactor;
    user.phone = event.detail.value.phone;
    user.code = event.detail.value.code;
    if (user.name != '' && user.password != '' && user.contactor != '' && user.phone != '' && user.code != '' && page.data.radio){
      this.setData({
        "bthType":"primary"
      });
     wx.showToast({
       title: '注册成功',
       duration:3000,
       success: function () {
         wx.navigateBack({
           
         })
       }
     })
    }
  },
  changeDate:function(event){
    console.log("picker:" + e.detail.value);
  },
  toggleRadio:function(){
    this.setData({
      radio:!this.data.radio
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