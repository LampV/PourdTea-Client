//获取应用实例
const app = getApp()

Component({
    data: {
        page: 0
    },
    properties: {
        poem: Object,
    },
    options: {
        addGlobalClass: true,
    },
    methods: {
        componentNavToPoem(e) {
            console.log('nav to poem ', e.currentTarget.dataset.poemid)
            wx.navigateTo({
                url: "/pages/poem/poem?id=" + e.currentTarget.dataset.poemid
            })
        },
        poemLike(e) {
            console.log('like poem ', e.currentTarget.dataset.poemid)
            this.setData({
                like: !this.data.like,
            })
        }
    }
})
