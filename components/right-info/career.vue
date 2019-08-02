<template>
  <Card id="career-card">
    <p slot="title">
      <Icon type="ios-film-outline"></Icon>工作经历
    </p>
    <article>
      <span v-for="(item,index) in careerInfo" :key="index">
        
      </span>
    </article>
  </Card>
</template>

<script>
import { careerInfo } from "../../resume-config";

export default {
  data() {
    return {
      careerInfo
    };
  },
  mounted() {
    console.log(this.careerInfo);
  }
};
</script>

