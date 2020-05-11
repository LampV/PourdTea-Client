//获取应用实例
const app = getApp()

Page({
  data: {
    page: 0,
    dynasty: '',
    author: '',
  },
  onLoad: function () {
    wx.showShareMenu({
      showShareItems: ['wx', 'qzone', 'wechatFriends', 'wechatMoment']
    })
    let remoteUrl = app.globalData.remoteIp + '/poem/list/scan'
    wx.request({
      url: remoteUrl,
      method: 'POST',
      data: {
        page: this.data.page,
        dynasty: this.data.dynasty,
        author: this.data.author
      },
      success: res => {
        this.setData({
          page: this.data.page + 1,
          poem_list: res.data
        })
        console.log(res.data)
      }
    })
    this.setData({
      remoteUrl: remoteUrl
    })
  },
})
