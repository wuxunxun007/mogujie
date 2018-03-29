import { Dispatcher } from 'flux';
//var Dispatcher = require('flux').Dispatcher;

import ListStore from './../store/ListStore';

var AppDispatcher = new Dispatcher();

//AppDispatcher.register()方法用来登记各种Action的回调函数。
AppDispatcher.register((action) => {
  const { actionType, data } = action;
  switch (actionType){
  	case "ADD_ITEM":
  	 console.log("33333");
  	 //连接store
  	 ListStore.banner.addItemHandler(data);
  	 //广播告诉所有组件，状态已经更新
  	 ListStore.emitChange()
  		break;
  	case "DEL_ITEM":
     //连接store
     ListStore.banner.deleteItemHandler(data);
     //广播告诉所有组件，状态已经更新
     ListStore.emitChange()
      break;
  	default:
  		break;
  }
})

export default AppDispatcher;
