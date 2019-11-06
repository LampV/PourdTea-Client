//获取应用实例
const app = getApp()

Page({
    data: {
        iconArray: ['']
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
                    poem: {
                        title: res.data.title,
                        author_name: res.data.author_name,
                        author_dynasty: res.data.dynasty,
                        sentences: res.data.text.split('\n'),
                        author_abstract_parags: res.data.author_abstract.split('\n'),
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
    swipeToAuthor: function(){
        this.setData({
            currentItemId: 'poem_author'
        })
    }
})
