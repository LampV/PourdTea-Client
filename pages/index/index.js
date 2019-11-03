//获取应用实例
const app = getApp()

Page({
  data: {
    iconArray: ["creative", "form", "my"],
    curIcon: "",
  },

  onLoad: function () {
    // 页面加载时将当前页面设置为第0个
    this.setData({
      curIcon: this.data.iconArray[0],
    })
  },
  barIconTap: function (e) {
    this.setData({
      curIcon: e.target.dataset.icon,
    })
  }
})
