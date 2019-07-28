//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    current: 'index',
    // 个人信息
    name: '蓝钜',
    intentionalJob: '前端开发岗',
    phone: '180-2744-9937',
    email: 'blueju@foxmail.com',
    // 教育背景
    duration: '2015-2019',
    school: '广东财经大学',
    subject: '信息管理与信息系统',
    // 其他
    blog: 'http://blog.blueju.cn',
    github: 'https://github.com/blueju'
  },

  /**
   * 自己的方法
   */
  // 点击导航栏
  clickTabBar: function(e) {
    app.clickTabBar(this.data.current, e)
  },

  onLoad: function() {

  }
})