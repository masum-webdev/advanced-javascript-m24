const students=[
  {id:20,name:"Masum"},
  {id:30,name:"Tafrin"},
  {id:40,name:"Selim"},
  {id:50,name:"Mahin"}
]
const name=students.map(element=>element.name);
console.log(name);
const id=students.filter(s=>s.id>20);
console.log(id[0].name)
// const name=[];
// for(let i=0;i<students.length;i++){
//   name.push(students[i].name);  
// }
// console.log(name);