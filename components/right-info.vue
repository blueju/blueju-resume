<template>
  <div class="right-info">
    <Row>
      <Col span="23">
        <!-- 教育背景 -->
        <Card id="education-card">
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>教育背景
          </p>
          <Education/>
        </Card>

        <!-- 工作经历 -->
        <Card id="career-card">
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>工作经历
          </p>
          <Career/>
        </Card>

        <!-- 项目实践 -->
        <Card id="project-card">
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>项目实践
          </p>
          <Project/>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import Education from "~/components/education"; //教育背景
import Career from "~/components/career"; //工作经历
import Project from "~/components/project"; //项目实践

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
#education-card,
#career-card,
#project-card {
  margin-bottom: 15px;
}
</style>


