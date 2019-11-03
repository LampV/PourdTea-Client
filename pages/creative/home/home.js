//获取应用实例
const app = getApp()

Component({
  data: {
    page: 0
  },
  options: {
    addGlobalClass: true,
  },
  attached: function () {
    let remoteUrl = app.globalData.remoteIp + '/poem/list/sample'
    qq.request({
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
        console.log(res.data)
      }
    })
    this.setData({
      remoteUrl: remoteUrl
    })
  },
})
