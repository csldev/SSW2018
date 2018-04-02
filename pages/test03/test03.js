/*
1.小程序生成二维码在小程序发布以后获得
2.使用接口和tokens获得小程序码的二进制流
3.使用api将二进制绘制到canvas
4.生成最终图片，并调用自定义控件进行显示
*/

var scene;
// pages/test03/test03.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  click:function(e){
    var that = this;
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=	wxe6b1d4202c2d41a2&secret=07d09dc8020d582b3104f542d552994c',
      method:"GET",
      success:function(res){
        console.log(res.data.access_token+" "+res.data.expires_in)
        wx.request({
          url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token='+res.data.access_token,
          method:"POST",
          data:{
            scene:scene,
            page:"pages/test03/test03",
            width:430,
          },
          success:function(res){
            console.log(res)
            that.loadQRCode(res);
          }
        })
      }
    })
  },


  loadQRCode: function (res) {
    var data = new Uint8ClampedArray(res);
    wx.canvasPutImageData({
      canvasId: 'can_qrcode',
      data: data,
      x: 0,
      y: 0,
      width: 430,
      success:function(res){
        console.log("ok")
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    scene = decodeURIComponent(options.scene);
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