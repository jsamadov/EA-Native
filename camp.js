function boolToWord(bool) {
  if (bool === true) {
    return "yes";
  }
  return "no";
}
boolToWord(true);

function makeNegative(num) {
  // Code?
  if (num >= 0) {
    return -num;
  } else return num;
}


const arr = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]
  
  function countSheeps(sheep) {
       let numSheep = 0
    for (let i = 0; i < sheep.length; i++) {
      if(sheep[i]===true){
          numSheep++
      }
    }
    return numSheep
  }

  function positiveSum(arr) {
    sum=0
  for(let i=0;i<=arr.length-1;i++){
    if(arr[i]>0){
      sum+=arr[i]
    }
  }
  return sum
}