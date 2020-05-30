//获取应用实例
const app = getApp()

Page({
  data: {
    iconArray: [''],
    showBottomModal: true,
    infoType: 'author',
    fullAuthor:false,
  },

  onLoad: function(options) {
    let remoteUrl = app.globalData.remoteIp + '/poem/text'
    wx.request({
      url: remoteUrl,
      method: 'POST',
      data: {
        poem_id: options.id
      },
      success: res => {
        this.setData({
          poem: {
            title: res.data.title,
            author_name: res.data.author_name,
            author_dynasty: res.data.dynasty,
            sentences: res.data.text.split('\n'),
            author_abstract_parags: res.data.author_abstract.split('\n'),
            author_abstract: res.data.author_abstract,
          }
        })
        console.log(res.data)
      }
    })
    this.setData({
      id: options.id,
      currentItemId: "poem_content",
    })
  },
  swipeToAuthor: function() {
    this.setData({
      currentItemId: 'poem_author'
    })
  },
  ChangeBottomModal() {
    this.setData({
      showBottomModal: ! this.data.showBottomModal
    })
  },
  InfoTypeChange(e){
    console.log(e)
    let type = e.target.dataset.type
    this.setData({
      infoType: type
    })
  },
  showFullAuthor(){
    this.setData({
      fullAuthor: true
    })
  },
  learnPoem(){
    wx.showToast({
      title: '学习，施工中',
    })
  },
  likePoem(){
    wx.showToast({
      title: '收藏，施工中',
    })
  },
  forwardPoem(){
    wx.showToast({
      title: '转发，施工中',
    })
  }
})