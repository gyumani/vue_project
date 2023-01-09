const storage = {
  fetch() {
    const arr = [];

    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }

    return arr;
  }
};
const state = {
  todoItems: storage.fetch()
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  }
};

const mutations = {
  addOneItem(state, todoItem) {
    const obj = { completed: false, item: todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  removeOneItem(state, map) {
    localStorage.removeItem(map.todoItem.item);
    state.todoItems.splice(map.index, 1);
  },
  toggleOneItem(state, map) {
    state.todoItems[map.index].completed = !state.todoItems[map.index]
      .completed;

    localStorage.removeItem(map.todoItem.item);
    localStorage.setItem(map.todoItem.item, JSON.stringify(map.todoItem));
  },
  clearAllItem(state) {
    localStorage.clear();
    state.todoItems = [];
  }
};

export default {
  state,
  getters,
  mutations
};
