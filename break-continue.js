// const nums=[1,2,3,4,5,6,7,8,9];
// for (let i = 0; i < nums.length; i++) {
//   const element = nums[i];
//   if(nums[i]>2){
//     continue;
//   }
//   console.log(element);
  
// }

const number=[1,2,-3,4,5,-6,7,-8,9];
for (let i = 0; i < number.length; i++) {
  const element = number[i];
  if(number[i]<0){
    continue;
  }
  console.log(element);
  
}