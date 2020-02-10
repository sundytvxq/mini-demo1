// pages/demo3/demo3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"sundy",
    arr:[{name:"xiaoming"},{name:"xiaoli"},{name:"xiaoqiang"}],
    count:0
  },
  handelClick(){
    console.log(111);
    ++this.data.count
    // 这种方法count也变化了，但是界面不变，小程序和vue不一样 ，界面没办法监听 vue有defineprototype
    // 也就是必须要经过setData方法才能驱动视图
    // this.setData({
    //   count:++this.data.count
    //   // ？为什么不能是++
    // })
    console.log(this.data.count)
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