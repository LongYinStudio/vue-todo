<template>
  <div>
     <VueTodoTodoTop />
    <VueTodoTodoItem />
    <VueTodoTodoClear />
  </div>
</template>

<script>
import VueTodoTodoTop from "../components/Todo_top.vue";
import VueTodoTodoItem from "../components/Todo_item.vue";
import VueTodoTodoClear from "../components/Todo_clear.vue";
export default {
  name: "VueTodoHome",
  components: { VueTodoTodoTop, VueTodoTodoItem, VueTodoTodoClear },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" >
.el-row {
  width: 600px;
  margin: 5px auto;
}
</style>