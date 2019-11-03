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
        navToPoem(e) {
            console.log('nav to poem ', e.currentTarget.dataset.poemid)
        },
        poemLike(e) {
            console.log('like poem ', e.currentTarget.dataset.poemid)
            this.setData({
                like: !this.data.like,
            })
        }
    }
})
