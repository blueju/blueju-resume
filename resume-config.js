// 个人信息
const personInfo = {
    name: "蓝钜",
    job: "前端开发岗",
    otherInfo: {
        school: {
            value: "广东财经大学",
            icon: "ios-school"
        },
        major: {
            value: "信息管理与信息系统",
            icon: "ios-navigate"
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
    major: "信息管理与信息系统"
}

// 工作经历

const careerInfo = [
    {
        workInfo: [{
            name: "工作时间",
            value: "2019.7-至今"
        }, {
            name: "公司名称",
            value: "深圳维恩贝特科技股份有限公司"
        }, {
            name: "就职部门",
            value: "数据智能应用实验室"
        }, {
            name: "担任岗位",
            value: "前端开发工程师"
        }]
        workDuration: {
            name: "工作时间",
            value: "2019.7-至今"
        },
        companyName: {
            name: "公司名称",
            value: "深圳维恩贝特科技股份有限公司"
        },
        workDepartment: {
            name: "就职部门",
            value: "数据智能应用实验室"
        },
        job: {
            name: "担任岗位",
            value: "前端开发工程师"
        },
        workContent: {
            name: "工作简述",
            value: "参与了什么什么，干了什么什么事，学到了什么什么，为什么离职"
        }
    },
    {
        workDuration: {
            name: "实习时间",
            value: "2018.12-2019.3"
        },
        companyName: {
            name: "公司名称",
            value: "广州道一信息科技股份有限公司"
        },
        workDepartment: {
            name: "就职部门",
            value: "企微研发部"
        },
        job: {
            name: "担任岗位",
            value: "前端开发工程师（实习）"
        },
        workContent: {
            name: "工作简述",
            value: "参与了什么什么，干了什么什么事，学到了什么什么，为什么离职"
        }
    }
]

export {
    personInfo,
    educationInfo,
    careerInfo
}