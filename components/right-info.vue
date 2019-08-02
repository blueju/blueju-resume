<template>
  <div class="right-info">
    <Row>
      <Col span="23">
        <!-- 教育背景 -->
        <Education />

        <!-- 工作经历 -->
        <Career />

        <!-- 项目实践 -->
        <Project />
      </Col>
    </Row>
  </div>
</template>

<script>
import Education from "~/components/right-info/education"; //教育背景
import Career from "~/components/right-info/career"; //工作经历
import Project from "~/components/right-info/project"; //项目实践

export default {
  name: "right-info",
  components: {
    Education,
    Career,
    Project
  }
};
</script>

<style>
/* #education-card,
#career-card,
#project-card {
  margin-bottom: 15px;
} */
</style>


