//获取应用实例
const app = getApp()

Component({
  data: {
    curTypeIndex: 0,
    typeArray:['每日推荐', '精选诗句', '答案诗']
  },
  options: {
    addGlobalClass: true,
  },
  attached: function() {
    wx.showShareMenu({
      showShareItems: ['wx', 'qzone', 'wechatFriends', 'wechatMoment']
    })
    let remoteUrl = app.globalData.remoteIp + '/poem/infer/list'
    this.setData({
      remoteUrl: remoteUrl
    })
  },
  methods: {
    hideModal(e) {
      this.setData({
        modalName: null
      })
    },
    showModal(e) {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    },
    typeTap(e){
      this.setData({
        curTypeIndex: e.currentTarget.dataset.target
      })
      let timer = setTimeout(()=>{this.hideModal()}, 360);
    }
  }
})