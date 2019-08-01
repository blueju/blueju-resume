<template>
  <div class="container">
    <Row>
      <!-- 左侧信息 -->
      <Col span="8">
        <LeftInfo />
      </Col>

      <!-- 右侧信息 -->
      <Col span="16">
        <RightInfo />
      </Col>
    </Row>
  </div>
</template>

<script>
// 左侧信息
import LeftInfo from "~/components/left-info.vue";
// 右侧信息
import RightInfo from "~/components/right-info.vue";

export default {
  components: {
    LeftInfo,
    RightInfo
  }
};
</script>

<style>
</style>
