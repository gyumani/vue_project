const addOneItem = (state, todoItem) => {
  const obj = { completed: false, item: todoItem };
  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
};

const removeOneItem = (state, map) => {
  localStorage.removeItem(map.todoItem.item);
  state.todoItems.splice(map.index, 1);
};

const toggleOneItem = (state, map) => {
  state.todoItems[map.index].completed = !state.todoItems[map.index].completed;

  localStorage.removeItem(map.todoItem.item);
  localStorage.setItem(map.todoItem.item, JSON.stringify(map.todoItem));
};

const clearAllItem = state => {
  localStorage.clear();
  state.todoItems = [];
};

export { addOneItem, removeOneItem, toggleOneItem, clearAllItem };
