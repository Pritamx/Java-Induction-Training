var arr=[{name:"Product 1",
          price:100,
          quantity:10,
          display:function(){
             console.log("Product name :- "+this.product+" Total Amount :- "+(this.price*this.quantity))
             return (this.price*this.quantity)
          }},
         {name:"Product 2",
          price:200,
          quantity:20,
          display:function(){
             console.log("Product name :- "+this.product+" Total Amount :- "+(this.price*this.quantity))
             return (this.price*this.quantity)
          }},
         {name:"Product 3",
          price:300,
          quantity:30,
          display:function(){
             console.log("Product name :- "+this.product+" Total Amount :- "+(this.price*this.quantity))
             return (this.price*this.quantity)
          }}]

var total_cost=0
for(var i=0;i<arr.length;i++){
  total_cost += arr[i].display()
}
console.log("Total Cost For Three Items :- "+total_cost)