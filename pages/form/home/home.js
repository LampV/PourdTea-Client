//获取应用实例
const app = getApp()

Component({
  data: {
    page: 0,
    dynasty: '',
    author: '',
    searchInput: '',
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
      let remoteUrl = app.globalData.remoteIp + '/poem/scan/list'
      this.setData({
        remoteUrl: remoteUrl
      })
      this.GetPoemArray()
    }
  },
  pageLifetimes: {
    show() {
      let msg = app.globalData.msg
      if (msg && msg.length) {
        this.ProcessMsg(msg)
      }
    }
  },
  methods: {
    GetPoemArray() {
      let remoteUrl = this.data.remoteUrl
      console.log(remoteUrl)
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
            poemArray: this.data.poemArray.concat(res.data)
          })
          console.log('GetPoemArray success')
        }
      })
    },
    SearchInput(e) {
      let reStr = /[\u4e00-\u9fa5]/
      let reNoneStr = /[^\u4e00-\u9fa5]/g
      let reOther = /[,，;；、 ]/g
      let searchInput = e.detail.value
      this.setData({
        completeSearchInput: searchInput
      })
      // 获取input中的汉字部分
      searchInput = searchInput.replace(reNoneStr, '')
      // 无变化，跳过
      if (searchInput == this.data.searchInput) {

      } else {
        this.setData({
          searchInput: searchInput
        })
        console.log("get list of poems of", searchInput)
      }
    },
    ClearInput() {
      this.setData({
        completeSearchInput: '',
        searchInput: ''
      })
    },
    ProcessMsg(msg) {
      for (let i in msg) {
        let m = msg[i]
        this.StatusChange(m)
      }

    },
    StatusChange(e) {
      if (e.detail) {
        e = e.detail
      }
      let poemArray = this.data.poemArray
      for (let i in poemArray) {
        let poem = poemArray[i]
        if (poem.pid == e.pid) {
          console.log(e.pid, e.status)
          if (e.status) {
            poem.like_flag = app.globalData.accountInfo.uid
          } else {
            poem.like_flag = null
          }
        }
      }
      this.setData({
        poemArray: poemArray
      })
    },
  }
})