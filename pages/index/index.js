//获取应用实例
const app = getApp()

Page({
  data: {
    iconArray: ["creative", "form", "my"],
    curIcon: "",
  },

  onLoad: function (options) {
    this.setData({
      curIcon: this.data.iconArray[0],
    })
    console.log('index page receive:', options)
  },
  onReachBottom: function () {
    if (this.data.curIcon == "form") {
      this.selectComponent("#form").GetPoemArray();
    }
  },
  barIconTap: function (e) {
    this.setData({
      curIcon: e.target.dataset.icon,
    })
  }
})
