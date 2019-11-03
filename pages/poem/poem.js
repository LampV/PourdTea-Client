//获取应用实例
const app = getApp()

Page({
    data: {
    },

    onLoad: function (options) {
        let remoteUrl = app.globalData.remoteIp + '/poem/text'
        qq.request({
            url: remoteUrl,
            method: 'POST',
            data: {
                poem_id: options.id
            },
            success: res=>{
                this.setData({
                    poem: res.data
                })
            }
        })
        this.setData({
            id: options.id
        })
    },
})
