<template>
  <div>
    <el-row class="tag">
      <el-tag type="danger" @click="allClear">清空所有</el-tag>
      <el-tag type="warning" @click="allClearTodo" v-show="sum > 0"
        >清空已完成</el-tag
      >
      <el-tag type="success" v-show="sum > 0">已完成 {{ sum }} 条</el-tag>
      <el-tag>
        <span v-show="contList.length !== 0">
          已添加{{ contList.length }}条
        </span>
        <span v-show="contList.length == 0"> 您还没有添加条目！ </span>
      </el-tag>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "VueTodoTodoClear",

  data() {
    return {
      value: "",
    };
  },
  mounted() {},
  // 监听列表 发生改变就操作
  watch: {
    contList: {
      //监听对象
      deep: true, //深度监听
      handler(val) {
        this.$store.commit("contList", val);
      },
    },
  },
  computed: {
    ...mapState(["contList"]),
    // 遍历已完成的数据
    sum() {
      let i = 0;
      this.contList.forEach((element) => {
        if (element.done == true) {
          i++;
        }
      });
      return i;
    },
  },
  methods: {
    ...mapMutations(["allClear", "allClearTodo"]),
  },
};
</script>

<style scoped>
.el-tag {
  float: right;
  margin-left: 10px;
  cursor: pointer;
}
</style>
