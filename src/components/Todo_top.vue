<template>
  <div>
    <el-row>
      <h3>今天总得做点事吧！</h3>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <div style="margin-top: 15px">
            <el-input
              placeholder="请输入内容"
              v-model="val"
              @keyup.native.enter="add(val)"
            >
              <el-button slot="append" @click="add(val)">添加事件</el-button>
            </el-input>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "VueTodoTodoTop",
  data() {
    return {
      val: "",
    };
  },

  mounted() {},

  methods: {
    add(val) {
      console.log(val);
      if (val === "") {
        return alert("请输入内容再添加！");
      }
      const vals = {
        id: nanoid(),
        val: this.val,
        done: false,
      };
      this.val = "";
      this.$store.commit("add", vals);
    },
  },
};
</script>

<style scoped>
h3 {
  font-family: serif;
  color: #fff;
}
.el-input {
  cursor: pointer;
}
</style>
