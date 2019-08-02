<template>
  <div class="container">
    <Row>
      <!-- 左侧信息 -->
      <Col span="6">
        <LeftInfo />
      </Col>

      <!-- 右侧信息 -->
      <Col span="18">
        <RightInfo />
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
    return {};
  }
  // asyncData(context) {
  //   axios.get('')
  // }
};
</script>

<style>
html {
  height: 100%;
}

.container {
  background-color: #f3f6f8;
  height: 100vh;
}
</style>
