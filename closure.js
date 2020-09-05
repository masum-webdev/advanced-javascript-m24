// function stopWatch(){
//   let count=0;
//   return function(){
//     count++;
//     return count;
//   }
// }

// const clock1=stopWatch();
// console.log(clock1())
// console.log(clock1())
// console.log(clock1())

// const clock2=stopWatch();
// console.log(clock2())
// console.log(clock2())
// console.log(clock2())


function stepIncrease(){
  let step=0;
  // return function(){
  //   step++;
  //   return step;
  // };
  // function a(){
  //   step++;
  //   return step;
  // }
  // return a();
  const a=function(){
    step++;
    return step;
  };
  return a;
  
}

// stepIncrease();
const step1=stepIncrease();
console.log(step1())
console.log(step1())