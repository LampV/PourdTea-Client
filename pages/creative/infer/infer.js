// pages/creative/infer/infer.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },
  /**
   * 组件的初始数据
   */
  data: {
    page: 0,
  },
  options: {
    addGlobalClass: true,
  },
  lifetimes: {
    attached: function() {
      wx.showShareMenu({
        showShareItems: ['wx', 'qzone', 'wechatFriends', 'wechatMoment']
      })
      let remoteUrl = app.globalData.remoteIp + '/poem/infer/list'
      wx.request({
        url: remoteUrl,
        method: 'POST',
        data: {
          page: this.data.page
        },
        success: res => {
          this.setData({
            page: this.data.page + 1,
            poem_list: res.data
          })
          console.log('infer data:', res.data)
        }
      })
      this.setData({
        remoteUrl: remoteUrl
      })
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})