<template>
  <!-- 教育背景 -->
  <Card id="education-card">
    <p slot="title" class="card-title">教育背景</p>
    <article class="education-info">
      <span v-for="(item,index) in educationInfo" :key="index">{{ item }}</span>
    </article>
  </Card>
</template>

<script>
import { educationInfo } from "../../resume-config";

export default {
  data() {
    return {
      educationInfo: educationInfo
    };
  }
};
</script>

<style lang="less" scoped>
#education-card {
  font-size: 1rem;

  .card-title {
    font-size: 1.1rem;
  }

  .education-info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>


