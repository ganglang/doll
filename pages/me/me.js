// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "userInfo":{},
    "disabled":true,
    "btnState":"default",
    "name":'',
    "password":'',
    "login":false,
    "message":''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   wx.setNavigationBarTitle({
     title: '登录',
   })
   var page=this;
    wx.getStorage({
      key: 'login',
      success: function(res) {
        page.setData({
          "login":res.data
        })
      },
      fail:function(){
        console.log("没调用成功")
      }
    })
  },
  formSubmit:function(){
    var page=this;
     if(this.data.name=="admin"&&this.data.password=="1234"){
       this.setData({
         "login":true
       })
       wx.setStorage({
         key: 'login',
         data: true,
       })
     }else{
       wx.showModal({
         title: '登录错误',
         content: '登录账号或密码错误',
         success: function () {
           page.setData({
             "name": '',
             "password": ''
           })
         }
       })
       
     }
  },
  nameInput:function(event){
    var content=event.detail.value;
    if (content.length>0){
      this.setData({
        "disabled":false,
        "name":content,
        "btnState":"primary"
      })
    }else{
      this.setData({
        "disabled": false,
        "name": content,
        "btnState": "default"
      })
    }
  },
  pwdBlur:function(event){
    var password=event.detail.value;
    if(password!=''){
      this.setData({
        "password":password
      })
    }
  },
  loginOut:function(){
    this.setData({
      "login":false
    });
    wx.setStorage({
      key: 'login',
      data:false,
    })
  },
  wechatLogin:function(){
    var wechatName=this.data.userInfo.nickName;
    if(wechatName){
      this.setData({
        "login": true
      })
      wx.setStorage({
        key: 'login',
        data: 'true',
      })
    }else{
      this.setData({
        "message":"请登录微信"
      })
    }
   
  },
  register:function(){
    wx.navigateTo({
      url: '../register/register',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var app = getApp();
    this.setData({
      "userInfo": app.globalData.userInfo
    })
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