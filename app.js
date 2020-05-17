//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 设置remote url
    wx.getSystemInfo({
      success: res => {
        let useDev = true;
        if (res.brand == 'devtools' && useDev) {
          this.globalData.remoteIp = 'http://127.0.0.1:5000'
        } else {
          this.globalData.remoteIp = 'https://hyunee.top:5000'
        }
      }
    })
    let accountInfo = wx.getStorageSync('accountInfo')
    if (accountInfo && accountInfo.uid) {
      console.log('get accountInfo from storage')
      this.globalData.accountInfo = accountInfo
    } else {
      this.userLogin().then(res => {
        console.log('app get account info')
      })
    }
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

  },
  globalData: {
    userInfo: null,
    curIcon: 'creative'
  },
  userLogin: function() {
    // 登录
    console.log('invoke user login')
    let promise = new Promise((resolve, reject) => {
      let openid = wx.getStorageSync('openid')
      if (!openid) {
        wx.login({
          success: res => {
            console.log('no openid')
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            if (res.code) {
              // 发起网络请求
              wx.request({
                url: this.globalData.remoteIp + '/account/login',
                method: 'POST',
                data: {
                  code: res.code
                },
                success: res => {
                  console.log('login return msg:', res.data)
                  // 将信息存储到globalData以及storage
                  this.globalData.openid = res.data.openid
                  this.globalData.accountInfo = res.data.account_info
                  wx.setStorage({
                    key: "openid",
                    data: res.data.openid
                  })
                  wx.setStorage({
                    key: "accountInfo",
                    data: res.data.account_info
                  })
                  resolve()
                },
                fail: err => {
                  reject(err)
                }
              })
            } else {
              reject('登录失败！' + res.errMsg)
            }
          }
        })
      } else {
        this.globalData.openid = openid
        console.log(this.globalData.remoteIp)
        wx.request({
          // TODO 这里this.globalData.remoteIp是undified
          url: this.globalData.remoteIp + '/account/get_info',
          method: 'POST',
          data: {
            openid: openid
          },
          success: res => {
            // 将信息存储到globalData
            wx.setStorage({
              key: "accountInfo",
              data: res.data.account_info
            })
            this.globalData.accountInfo = res.data.account_info
            resolve(res)
          },
          fail: err => {
            reject(err)
          }
        })
      }
    })
    return promise
  }

})