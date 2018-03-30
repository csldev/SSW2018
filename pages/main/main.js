
// pages/main/main.js
Page({
  data: {
    
  },

  // onShareAppMessage: function (res) {
  //   wx.showShareMenu({
  //     withShareTicket: true
  //   })
  //   if (res.from === 'button') {
  //     // 来自页面内转发按钮
  //     console.log(res.target)
  //   }
  //   return {
  //     title: '自定义转发标题',
  //     path: '/page/user?id=123',
  //     imageUrl: '',
  //     desc:"自定义描述",
  //     success: function (res) {
  //       // 转发成功
  //       console.log('success')
  //     },
  //     fail: function (res) {
  //       // 转发失败
  //       console.log('fail')
  //     }
  //   }
  // },

  click:function(e){
    console.log('click');
    wx.showToast({
      title: 'title',
    })
  },



  test:function(e){
    console.log('here')
    //将原画布上的图形记录
    wx.canvasGetImageData({
      canvasId: 'myCanvas',
      x: 0,
      y: 0,
      width: 200,
      height: 300,
      success:function(res){
        console.log(res.data);
        const data1 = new Uint8ClampedArray(res.data);
        //放入新的画布
        wx.canvasPutImageData({
          canvasId: 'mc2',
          data: data1,
          x: 0,
          y: 0,
          width: 200,
          success:function(){
            console.log("put ok")
            //将该画布上的图案暂时存入tempFile
            setTimeout(function(e){
              wx.canvasToTempFilePath({
                x:20,
                y:20,
                width:100,
                width:200,
                destWidth:200,
                destHeight:300,
                canvasId: 'mc2',
                success:function(res){
                  console.log(res.tempFilePath);
                }
              })
            },300)
          },
          fail: function (res) {
            console.log("fail")
          }
        })


      }
    })
  },


  /**
    * 生命周期函数--监听页面加载
    */
  onLoad: function (options) {

    const ctx = wx.createCanvasContext("myCanvas");
    ctx.setFillStyle('red');
    ctx.fillRect(0,0,300,400);
    ctx.draw();
    // var path = "/images/s01.jpg";
    // const ctx = wx.createCanvasContext('myCanvas');
    // var that = this;
    // ctx.drawImage(path,80,0,150,150);
    // ctx.draw();
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

