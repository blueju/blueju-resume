// 个人信息
const personInfo = {
    name: "蓝钜",
    job: "前端开发岗",
    otherInfo: {
        school: {
            value: "http://blog.blueju.cn",
            icon: "logo-wordpress"
        },
        major: {
            value: "https://github.com/blueju",
            icon: "logo-github"
        },
        email: {
            value: "blueju@foxmail.com",
            icon: "md-mail"
        },
        phone: {
            value: "180-2744-9937",
            icon: "ios-call"
        }
    }
}

// 教育背景
const educationInfo = {
    duration: "2015.9-2019.7",
    school: "广东财经大学",
    major: "信息管理与信息系统（本科）"
}

// 工作经历
const careerInfo = [
    {
        duration: "2019.7-至今",
        companyName: "深圳维恩贝特科技股份有限公司",
        department: "数据智能应用实验室",
        job: "前端开发工程师",
        simpleDesc:
            "参与了什么什么，干了什么什么事，学到了什么什么，为什么离职"
    },
    {
        duration: "2018.12-2019.3",
        companyName: "广州道一信息科技股份有限公司",
        department: "企微研发部",
        job: "前端开发工程师",
        simpleDesc:
            "参与了什么什么，干了什么什么事，学到了什么什么，为什么离职"
    }
]

// 项目实践
const projectInfo = [
    {
        projectName: "表单应用 Vue 改造",
        usedTechnology: "Vue、ES6+、ESLint、NPM/Yarn、Webpack",
        demoUrl: "http://github.com/blueju",
        simpleDesc: "表单应用 Vue 改造",
        projectContent: [
            "完成（移动端）表单筛选优化需求。主使用 ES6+数组/对象操作方法，对选择页中表单/应用/标签三种不同类型的数据进行遍历/筛选/映射等处理，并配合 Vue 方法$set 实现选择页与已选页的数据同步完成需求；",
            "完成（移动端）表单底部导航对 iPhoneX 的适配需求。分析表单在微信与企业微信端中底部导航的表现差异，使用JS 判断客户端类型及 iPhone 机型、切换 class 样式控制底部 margin 的方式解决；",
            "参与完成（PC 端）表单后台 Excel 导入新建表单弹窗模块。合理使用 v-if 和 v-show 控制各步骤组件的显示隐藏状态，减少了无效渲染，优化性能，并使用 transform 添加弹窗效果，提升用户体验；",
            "参与完成（PC 端）后台表单模板中心 Vue 改造。分析 DOM 结构划分，封装组件提高可维护性；单独抽离 API 方便管理；前端绑定数据与接口参数做 map 映射，方便接口参数变更时调整；Postman 工具在线 Mock 数据，方便接口调试。"
        ]
    },
    {
        projectName: "作业系统（毕业设计）",
        usedTechnology: "Vue、ElementUI、Sass、NodeJS、MySQL",
        demoUrl: "http://github.com/blueju",
        simpleDesc: "实现功能有作业版本控制、在线预览、SMTP 邮件服务、短信验证、上传重命名规则、提交统计等功能。",
        projectContent: [
            "基于 Vue 框架，使用 Vuex 管理学号姓名等公用数据、Router 路由守卫拦截跨权限的非法访问、prop/bus 组件传值等；",
            "前端使用 setTimeout 定时器限制验证码发送，配合后端 Redis 缓存过期时间和验证码，做验证码防刷处理；",
            "使用 Promise 对 node-mysql 进行二次封装，使其支持 async/await，简化代码，方便数据库操作；",
            "图表统计并展示未提交人员、提交率等数据，并配合 Ajax 轮询方式实施数据更新；"
        ]
    },
    {
        projectName: "作业系统（毕业设计）",
        usedTechnology: "Vue、ElementUI、Sass、NodeJS、MySQL",
        demoUrl: "http://github.com/blueju",
        simpleDesc: "实现功能有作业版本控制、在线预览、SMTP 邮件服务、短信验证、上传重命名规则、提交统计等功能。",
        projectContent: [
            "基于 Vue 框架，使用 Vuex 管理学号姓名等公用数据、Router 路由守卫拦截跨权限的非法访问、prop/bus 组件传值等；",
            "前端使用 setTimeout 定时器限制验证码发送，配合后端 Redis 缓存过期时间和验证码，做验证码防刷处理；",
            "使用 Promise 对 node-mysql 进行二次封装，使其支持 async/await，简化代码，方便数据库操作；",
            "图表统计并展示未提交人员、提交率等数据，并配合 Ajax 轮询方式实施数据更新；"
        ]
    }
]

export {
    personInfo,
    educationInfo,
    careerInfo,
    projectInfo
}