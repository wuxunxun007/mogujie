import { EventEmitter } from 'events';
import assign from 'object-assign';

export default assign({}, EventEmitter.prototype, {
  list:{
    items:[],
    getAll(){
        return this.items;
    },
    addItemHandler(data){
      console.log("Data",data)
      this.items.push(data);
    },
    deleteItemHandler(data){
      this.items.splice(data,1);
    }
  },
  banner:{
    items:[],
    getAll() {
        return this.items;
    },
    addItemHandler(data){
      console.log("Data",data)
      this.items.push(data);
    },
    deleteItemHandler(data)  {
      this.items.splice(data,1);
    }
  },
  emitChange(){
    this.emit("change");
  },
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
}
 )  