//获取应用实例
const app = getApp()

Component({
  data: {
    page: 0
  },
  properties: {
    poem: Object,
  },
  options: {
    addGlobalClass: true,
  },
  methods: {
    componentNavToPoem(e) {
      console.log('nav to poem ', e.currentTarget.dataset.poemid)
      wx.navigateTo({
        url: "/pages/poem/poem?id=" + e.currentTarget.dataset.poemid
      })
    },
    poemLike(e) {
      let poem = this.data.poem
      poem.like_flag = !poem.like_flag
      this.setData({
        poem: poem
      })
      let remoteUrl = app.globalData.remoteIp + '/account/like'
      wx.request({
        url: remoteUrl,
        data: {
          action: poem.like_flag,
          pid: this.data.poem.pid,
          uid: app.globalData.accountInfo.uid
        },
        method: 'POST',
        dataType: 'json',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
      // 提醒上级目录
      let eventDetail = {
        pid: this.data.poem.pid,
        curStatus: poem.like_flag,
        statusTyep: 'like'
      }
      this.triggleEvent('statusChange', eventDetail, {})
    }
  }
})