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
      let remoteUrl = app.globalData.remoteIp + '/poem/list/scan'
      this.setData({
        remoteUrl: remoteUrl
      })
      this.GetPoemArray()
    }
  },
  pageLifetimes: {
    pullDownReflash(){
      this.GetPoemArray()
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
    Search() {
      let searchStr = this.data.searchStr
      console.log(searchStr)
    }
  }
})