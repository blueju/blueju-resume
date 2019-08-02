<template>
  <div class="left-info">
    <Row>
      <Col span="20" offset="2">
        <Card>
          <!-- 头像 -->
          <section style="text-align:center">
            <img
              class="head-img"
              src="https://admin.heyui.top/static/images/src/images/avatar.8a80923.png"
            />
            <h1>{{ personInfo.name }}</h1>
            <h3 class="job">{{ personInfo.job }}</h3>
          </section>

          <!-- 个人信息 -->
          <section class="other-info">
            <p v-for="(item,index) in personInfo.otherInfo" :key="index" class="each-item">
              <Icon :type="item.icon" />
              <span>{{ item.value }}</span>
            </p>
          </section>
        </Card>
      </Col>
    </Row>
  </div>
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
  methods: {}
};
</script>

<style>
.left-info .ivu-card-head {
  display: none;
}

.left-info {
  margin-top: 40px;
}

.other-info {
  margin-top: 25px;
  margin-left: 30px;
}

.head-img {
  width: 100px;
  height: 100px;
}

.job {
  margin-top: 10px;
}

.each-item {
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
}

.each-item span {
  margin-left: 5px;
}

.each-item .ivu-icon {
  font-size: 20px;
}
</style>


