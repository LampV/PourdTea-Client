// pages/my/likes/likes.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    changedPids: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let remoteUrl = app.globalData.remoteIp + '/poem/like/list'
    wx.request({
      url: remoteUrl,
      method: 'POST',
      data: {
        uid: app.globalData.accountInfo.uid
      },
      success: res => {
        this.setData({
          likePoemArray: res.data
        })
        console.log(res)
      },
      fail: res => {
        console.log('request faild')
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    this.SendMsg()
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    this.SendMsg()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  StatusChange(e) {
    let changedPids = this.data.changedPids
    console.log(e)
    if (e.detail.statusType == "like") {
      if (e.detail.pid in this.data.changedPids) {
        changedPids[e.detail.pid] = null
      } else {
        changedPids[e.detail.pid] = e.detail.status
      }
    }
    this.setData({
      changedPids: changedPids
    })
  },
  SendMsg(){
    let msg = []
    for (let key in this.data.changedPids) {
      let value = this.data.changedPids[key]
      if (value != null) {
        msg.push({
          'pid': key,
          'status': value
        })
      }
    }
    app.globalData.msg = msg
    console.log('send msg:', msg)
  }
})