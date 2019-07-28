//app.js
App({
  onLaunch: function() {

  },
  globalData: {
    userInfo: null
  },
  clickTabBar: function(current, e) {
    let targetUrl = e.detail.key
    if (current != targetUrl) {
      wx.redirectTo({
        url: `/pages/${targetUrl}/${targetUrl}`
      })
    }
  }
})