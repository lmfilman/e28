let app = new Vue({
  el: '#app',
  data: {
      itemName: '',
      itemQuantity: '',
      list: {},
      listCount: 0
  },
  methods: {
    addItem: function(event) {
      let oldQuantity = 0;
      if(this.list[this.itemName]) {
        oldQuantity = this.list[this.itemName];
      }

      this.listCount -= oldQuantity;
      this.list[this.itemName] = this.itemQuantity;
      this.listCount += parseInt(this.itemQuantity);

      this.itemQuantity = '';
      this.itemName = '';
    }
  }
})