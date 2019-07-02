// pages/detail/detail.js\
var resultDetail=require('../../utils/moviesDetail.js');
var utils=require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "winW":0,
    "winH":0,
    "viewW":0,
    "id":'',
    "result":{},
    "title":'',
    "currentTab":0,
    "introW":0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
      this.setData({
        id:e.id
      })
      var page=this;
    wx.getSystemInfo({
      success: function(res) {
        var viewW=res.windowWidth/4;
        var introW=res.windowWidth-20-90;
        page.setData({
          "winW":res.windowWidth,
          "winH":res.windowHeight,
          "viewW": viewW,
          "introW": introW
        })
      },
    })
    this.loadDetail(this.data.id);
  },
  loadDetail:function(id){
    var page=this;
    var key = utils.getDataKey();
    var movieid=id;
    page.setData({
      "result": resultDetail.result,
      "title": resultDetail.result.title
    })
   /* wx.request({
      url: 'http://v.juhe.cn/movie/query?movieid=' +movieid+'&key='+key,
      method:'GET',
      header:{
        'Content-Type':"json"
      },
      success:function(resultDetail){
        console.log(resultDetail);
        page.setData({
          "result":resultDetail.data.result,
          "title": resultDetail.data.result
        })
      }
    })*/
    wx.setNavigationBarTitle({
      title:this.data.title
    })
  },
  switchTab:function(e){
    var id=e.target.id;
    this.setData({
      "currentTab":id
    })
    
  },
  swiperChange:function(event){
    this.setData({
      "currentTab": event.detail.current
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