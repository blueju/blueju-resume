<template>
  <!-- 教育背景 -->
  <Card id="education-card">
    <p slot="title">
      <Icon type="ios-film-outline"></Icon>教育背景
    </p>
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

<style scoped>
.education-info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>


