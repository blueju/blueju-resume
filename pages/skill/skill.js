// pages/skill/skill.js
let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'skill',
    skillInfo: null
  },

  /**
   * 自己的方法
   */
  getSkillInfo: function() {
    wx.request({
      url: 'http://rest.apizza.net/mock/8332457d2e1b86818f997fbb565a3009/skill',
      method: 'GET',
      success: (res) => {
        console.log(res)
        this.setData({
          skillInfo: res.data
        })
      },
      fail: (err) => {
        console.log('获取专业技能内容失败')
      }
    })
  },

  // 点击导航栏
  clickTabBar: function(e) {
    app.clickTabBar(this.data.current, e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getSkillInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})