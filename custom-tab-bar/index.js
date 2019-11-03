//index.js
//获取应用实例
const app = getApp()

Component({
    data: {
        iconArray: ["creative", "form", "my"],
        curIcon: "",
    },
    options: {
        addGlobalClass: true,
    },
    attached: function () {
        this.setData({
            curIcon: app.globalData.curIcon || iconArray[0]
        })
    },
    methods: {
        barIconTap(e) {
            app.globalData.curIcon = e.target.dataset.icon
            qq.switchTab({
                url: '/pages/' + e.target.dataset.icon + '/home/home'
            })
        }
    }
})
