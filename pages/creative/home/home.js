//获取应用实例
const app = getApp()

Component({
  data: {
    curTypeIndex: 0,
    typeArray: ['infer', 'selected', 'answer'],
    typeCompMap: {
      'infer': '每日推荐',
      'selected': '精选诗句',
      'answer': '答案诗'
    }
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
      console.log('switch to', this.data.typeArray[this.data.curTypeIndex])
      let timer = setTimeout(()=>{this.hideModal()}, 360);
    }
  }
})