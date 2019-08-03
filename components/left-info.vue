<template>
  <Row id="left-info">
    <Col span="20">
      <Card class="left-info-card">
        <!-- 头像 -->
        <section class="head-img">
          <img src="https://admin.heyui.top/static/images/src/images/avatar.8a80923.png">
          <h1>{{ personInfo.name }}</h1>
          <h2>{{ personInfo.job }}</h2>
        </section>

        <!-- 博客、Github、邮箱、手机 -->
        <section class="other-info">
          <p v-for="(item,index) in personInfo.otherInfo" :key="index">
            <Icon :type="item.icon"/>
            <span>{{ item.value }}</span>
          </p>
        </section>
      </Card>
    </Col>
  </Row>
</template>

<script>
import { personInfo } from "../resume-config";

export default {
  name: "left-info",
  data() {
    return {
      personInfo
    };
  },
  methods: {
    // 监听滚动事件，以调整Card
    listenLeftInfoCard() {
      window.addEventListener("scroll", () => {
        // 获取Card的距顶距离
        let leftInfoCardOffsetTop = document.getElementsByClassName(
          "left-info-card"
        )[0].offsetTop;
        // 获取页面的滚动距离
        let pageScrollTop = document.documentElement.scrollTop;
        // 页面的滚动距离 > Card的距顶距离，改变Card定位方式
        if (leftInfoCardOffsetTop < pageScrollTop) {
          document.getElementsByClassName("left-info-card")[0].style.position = "fixed";
          document.getElementsByClassName("left-info-card")[0].style.width =
            document.documentElement.clientWidth / 4.8 + "px";
        } else {
          document.getElementsByClassName("left-info-card")[0].style.position = "relative";
        }
      });
    }
  },
  mounted() {
    this.listenLeftInfoCard();
  }
};
</script>

<style lang="less" scoped>
#left-info {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .left-info-card {
    display: flex;
    flex-direction: column;
    align-items: center;

    // 头像、姓名、岗位
    .head-img {
      text-align: center;
      img {
        width: 100px;
        height: 100px;
      }
      h2 {
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }

    // 博客、Github、邮箱、手机
    .other-info {
      p {
        font-size: 1rem;
        padding: 5px 0;
        span {
          margin-left: 5px;
        }
      }
    }
  }
}

// #left-info {
//   margin-top: 40px;

//   & .ivu-card-head {
//     display: none;
//   }
// }

// .other-info {
//   margin-top: 25px;
//   margin-left: 30px;
// }

// .head-img {
//   width: 100px;
//   height: 100px;
// }

// .job {
//   margin-top: 10px;
// }

// .each-item {
//   padding-top: 5px;
//   padding-bottom: 5px;
//   font-size: 16px;
// }

// .each-item span {
//   margin-left: 5px;
// }

// .each-item .ivu-icon {
//   font-size: 20px;
// }
</style>


