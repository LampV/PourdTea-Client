//获取应用实例
const app = getApp()

Page({
  data: {
    iconArray: ["creative", "form", "my"],
    curIcon: "",
  },

  onLoad: function (options) {

    console.log('index page receive:', options)
  },
  barIconTap: function (e) {
    this.setData({
      curIcon: e.target.dataset.icon,
    })
  }
})
