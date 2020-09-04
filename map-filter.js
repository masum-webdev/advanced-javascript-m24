const numbers=[1,2,3,4,5,6,7];
const objects={name:"setu",phone:019,address:'narsingdi'};
// numbers.map(function(element){
//   console.log(element*element);
// })

// numbers.map(function(element,index,array){
//   console.log(element,index,array);
// })

// const result=numbers.map(function(element){
//   return element*element;
// })

// numbers.map((x,y,z)=>console.log(x,y,z));

// const result=numbers.map(x=>x*x);

// const result=numbers.filter(x=> x%2!=0);

// const result=numbers.filter(function(x){
//    return x%2==0;
// })
const result=numbers.find(x=>x>2);
console.log(result);