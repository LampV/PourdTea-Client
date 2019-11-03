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
        // 页面加载时将当前页面设置为第0个
        this.setData({
            curIcon: this.data.iconArray[0],
        })

    },
    methods: {
        barIconTap(e) {
            this.setData({
                curIcon: e.target.dataset.icon,
            })
            qq.switchTab({
                url: '/pages/' + e.target.dataset.icon + '/home/home'
            })
        }
    }
})
