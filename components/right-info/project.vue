<template>
  <Card id="project-card">
    <p slot="title" class="card-title">项目实践</p>
    <article v-for="(item,index) in projectInfo" :key="index">
      <!-- 项目名称 -->
      <h2 class="projectName">{{ item.projectName }}</h2>

      <!-- 使用技术 和 展示链接 -->
      <section class="tech-and-url">
        <span class="used-technology">
          <b>使用技术：</b>
          {{ item.usedTechnology }}
        </span>
        <span class="demo-url" v-if="item.demoUrl">
          <b>展示链接：</b>
          <a :href="item.demoUrl" target="_blank">{{ item.demoUrl }}</a>
        </span>
      </section>

      <!-- 项目简述 -->
      <section class="simpleDesc">
        <b>项目简述：</b>
        {{ item.simpleDesc }}
      </section>

      <!-- 项目内容 -->
      <section class="projectContent">
        <span class="title">项目内容：</span>
        <section class="content" v-for="(child,index) in item.projectContent" :key="index">
          <span class="index">{{ index + 1 }}.</span>
          <span class="item">{{ child }}</span>
        </section>
      </section>
      <!-- 项目内容 -->
    </article>
  </Card>
</template>

<script>
import { projectInfo } from "../../resume-config";

export default {
  name: "project",
  data() {
    return {
      projectInfo
    };
  }
};
</script>

<style lang="less" scoped>
#project-card {
  font-size: 1rem;

  .card-title {
    font-size: 1.1rem;
  }

  article {
    margin-bottom: 20px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }

  h2,
  .tech-and-url,
  .simpleDesc {
    margin-bottom: 5px;
  }

  // 使用技术 和 展示链接
  .tech-and-url {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    .used-technology,
    .demo-url {
      // flex-grow: 1;
      // flex-shrink: 0;
      // flex-basis: 1;
      flex: 1;
    }
  }

  // 项目内容
  .projectContent {
    .title {
      font-weight: 700;
    }
    .content {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      .index {
        margin-right: 5px;
      }
    }
  }
}
</style>


