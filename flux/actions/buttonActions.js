import AppDispatcher from './../dispatcher/AppDispatcher.js';

export default {
  addNewItem(addContent){
    console.log(addContent)
    AppDispatcher.dispatch({
      actionType: "ADD_ITEM",
      data: addContent
    })
  },
  deleteNewItem(delIndex){
    AppDispatcher.dispatch({
      actionType: "DEL_ITEM",
      data: delIndex
    })
  }
}
