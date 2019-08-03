<template>
  <Card id="career-card">
    <p slot="title" class="card-title">工作经历</p>
    <article v-for="(item,index) in careerInfo" :key="index">
      <section>
        <span>
          <b>任职时间</b>
          ：{{ item.duration }}
        </span>
        <span>
          <b>公司名称</b>
          ：{{ item.companyName }}
        </span>
        <span>
          <b>所在部门</b>
          ：{{ item.department }}
        </span>
        <span>
          <b>担任岗位</b>
          ：{{ item.job }}
        </span>
      </section>
      <p>
        <span class="title">工作简述 ：</span>
        {{ item.simpleDesc }}
      </p>
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
  }
};
</script>

<style lang="less" scoped>
#career-card {
  font-size: 1rem;

  .card-title {
    font-size: 1.1rem;
  }
  article {
    margin-bottom: 20px;
    &:last-of-type {
      margin-bottom: 0;
    }

    // 时间岗位公司名称等信息
    section {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }

    // 工作简述
    p {
      .title {
        display: block;
        font-weight: bold;
      }
    }
  }
}
</style>