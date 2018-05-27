<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Ecosystem</h2>
        <ul>
            <li>
                <a href="https://router.vuejs.org/zh/" target="_blank">
                    vue-router 文档
                </a>
            </li>
            <li>
                <a href="http://vuex.vuejs.org/zh/" target="_blank">
                    vuex 文档
                </a>
            </li>
            <li>
                <a href="http://vue-loader.vuejs.org/zh/" target="_blank">
                    vue-loader 文档
                </a>
            </li>
            <li>
                <a href="https://github.com/vuejs/awesome-vue" target="_blank">
                    awesome-vue
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '供应链金融 项目脚手架'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
