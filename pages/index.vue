<template>
  <div class="container">
    <Row>
      <!-- 左侧信息 -->
      <Col span="6">
        <LeftInfo :personInfo="personInfo"/>
      </Col>

      <!-- 右侧信息 -->
      <Col span="18">
        <RightInfo/>
      </Col>
    </Row>
  </div>
</template>

<script>
import axios from "axios";

// 左侧信息
import LeftInfo from "~/components/left-info.vue";
// 右侧信息
import RightInfo from "~/components/right-info.vue";

export default {
  components: {
    LeftInfo,
    RightInfo
  },
  data() {
    return {
      personInfo: {
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
    };
  }
  // asyncData(context) {
  //   axios.get('')
  // }
};
</script>

<style>
html{
  height: 100%;
}

.container {
  background-color: #f3f6f8;
  height: 100vh;
}
</style>
