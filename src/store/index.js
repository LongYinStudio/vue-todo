import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contList: JSON.parse(localStorage.getItem("contList")) || [
      { id: 1, val: '吃饭', done: false },
      { id: 2, val: '睡觉', done: false },
      { id: 3, val: '写代码', done: false },
    ],

  },
  mutations: {
    add(state, val) {
      state.contList.push(val)
    },
    remove(state, val) {
      state.contList.splice(val, 1)
    },
    allClear(state, val) {
      state.contList = []
    },
    // 勾选切换
    changeTodo(state, val) {
      state.contList.forEach(item => {
        if (item.id === val) { item.done = !item.done }
      })
    },
    // 过滤未完成 并赋值给数组 完成替换
    allClearTodo(state) {
      state.contList = state.contList.filter(item => item.done === false)
    },
    // 操作本地存储
    contList(state, val) {
      localStorage.setItem("contList", JSON.stringify(val));
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {

  }
})
