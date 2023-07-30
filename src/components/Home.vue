<script>
import TodoAdd from '@/components/TodoAdd.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  components: {
    TodoAdd,
    TodoList,
  },
  data() {
    return {
      todos: [
        //{ isDone: false, text: 'ToDoの文字列' }
      ],
    }
  },
  methods: {
    addTodo(newTodoText) {
      if (!newTodoText) return alert('文字を入力してください')
      this.todos.push({
        isDone: false,
        text: newTodoText,
      })
    },
    clearDoneTodos() {
      this.todos = this.todos.filter((todo) => !todo.isDone)
    },
  },
}
</script>

<template>
  <TodoAdd @delete-done="clearDoneTodos" @add-todo="addTodo" /> <!--ここで$emitを受け取る-->
  <p v-if="todos.length === 0">ToDoがまだありません！</p>
  <TodoList v-else :todos="todos" />
</template>

<style>
.todo-done {
  text-decoration: line-through;
}
</style>
