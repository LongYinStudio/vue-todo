<template>
  <div>
    <el-row v-for="(item, index) in contList" :key="index">
      <!-- <el-alert  type="success"></el-alert> -->
      <p>
        <input
          type="checkbox"
          name=""
          id=""
          :checked="item.done"
          @change="changeTodo(item.id)"
        />
        {{ index + 1 }}.{{ item.val }}
        <i class="el-icon-delete" @click="remove(index)"></i>
      </p>
    </el-row>
    <el-row v-show="contList.length == 0">
      <p>请输入您准备要做的事！</p>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "VueTodoTodoItem",

  data() {
    return {};
  },
  computed: {
    ...mapState(["contList"]),
  },
  mounted() {},

  methods: {
    ...mapMutations(["remove"]),
    changeTodo(id) {
      this.$store.commit("changeTodo", id);
    },
  },
};
</script>

<style scoped>
input {
  vertical-align: middle;
}
p {
  margin: 0;
  height: 20px;
  border-radius: 5px;
  text-align: left;
  line-height: 20px;
  padding: 8px 16px;
  font-size: 14px;
  color: #67c23a;
  background-color: #f0f9eb;
}
p:hover .el-icon-delete {
  display: block;
}
.el-icon-delete {
  cursor: pointer;
  display: none;
  float: right;
  color: #ea4335;
  line-height: 20px;
}
</style>
