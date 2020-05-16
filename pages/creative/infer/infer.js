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
    poemArray: []
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
            poemArray: res.data
          })
          console.log('infer data:', res.data)
        }
      })
      this.setData({
        remoteUrl: remoteUrl
      })
    },
  },
  pageLifetimes: {
    show() {
      let msg = app.globalData.msg
      if (msg && msg.length) {
        this.ProcessMsg(msg)
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    ProcessMsg(msg) {
      for (let i in msg) {
        let m = msg[i]
        this.StatusChange(m)
      }

    },
    StatusChange(e){
      if(e.detail){
        e=e.detail
      }
      let poemArray = this.data.poemArray
      for(let i in poemArray){
        let poem = poemArray[i]
        if (poem.pid==e.pid){
          console.log(e.pid, e.status)
          if(e.status){
            poem.like_flag=app.globalData.accountInfo.uid
          }else{
            poem.like_flag=null
          }
        }
      }
      this.setData({
        poemArray: poemArray
      })
    },
  }
})