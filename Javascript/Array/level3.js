//given the array, calculate sum of odd numbers using reduce method
const array1 = [4, 2, 3, 5];
array1.reduce((sum, item)=>{
    sum = sum + item
    return sum 
  },0)
  