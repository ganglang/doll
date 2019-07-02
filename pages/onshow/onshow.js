// pages/onshow/onshow.js
var result=require('../../utils/movies.js');
var util=require('../../utils/util.js');
Page({
  data: {
    "winWidth":0,
    "winHeight":0,
    "indicator-dots":false,
    "autoplay":true,
    "interval":3000,
    "duration":1000,
    "circular":true,
    "imagesMode":"aspectFill",
    "swipers":[
      "../../images/onshow/swipers/swiper1.jpg",
      "../../images/onshow/swipers/swiper2.jpg",
      "../../images/onshow/swipers/swiper3.jpg"
    ],
    "moviesList": result.result,
    "movieImgW":0,
    "movieImgH":0,
    "movieConH":0,
    "movieConW":0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page=this;
    wx.getSystemInfo({
      success: function(res) {
        var swiperH = res.windowWidth*360/640;
        page.setData({
          "winWidth":res.windowWidth,
          "winHeight":res.windowHeight,
        })
      },
    })
    var conW = (page.data.winWidth - 16) / 3;
    var imgW = conW - 16;
    var imgH = imgW * 128 / 96;
    var conH = imgH + 48;
    page.setData({
      "movieConW": conW,
      "movieConH": conH,
      "movieImgW": imgW,
      "movieImgH": imgH
    })
    this.loadMovies();
  },
   loadMovies:function(){
     var page=this;
     var key=util.getDataKey();
     var cityid =3;
    /*wx.request({
       url: 'http://v.juhe.cn/movie/movies.today?cityid='+cityid+'&key='+key,
       method:'GET',
       header:{
         "Content-Type":"json"
       },
       success:function(res){
         page.setData({
           "moviesList": res.data.result
         })
       }
     })*/
   },
  gotoDetail:function(e){
    var id=e.currentTarget.id;
    console.log("id:"+id);
    wx.navigateTo({
      url: '../detail/detail?id='+id
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