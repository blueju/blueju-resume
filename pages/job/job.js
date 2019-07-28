// pages/job/job.js
let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'job',
    projectInfo: [{
      companyName: '广州道一信息技术股份有限公司',
      duration: '2018.12.15-2019.03.27',
      department: '企微研发部',
      job: '前端开发工程师',
      description: '参与企微云OA表单应用Vue改造项目，主要负责完成导师安排的需求开发工作及一轮测试工作，实习期间共参与完成约4个需求单及近10个BUG单，较好地完成了任务，得到导师的认可。'
    }, {
      companyName: '深圳维恩贝特科技股份有限公司',
      duration: '2019.07.01-至今',
      department: '大数据实验室',
      job: '前端开发工程师',
      description: '对实时决策探索平台进行接口联调；代码回归银行外包项目。'
    }]
  },

  /**
   * 自己的方法
   */
  // 点击导航栏
  clickTabBar: function(e) {
    app.clickTabBar(this.data.current,e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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