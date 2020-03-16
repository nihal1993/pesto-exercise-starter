
function leastCommonMultiple(...args) {
  let store = [], result = [];
  let sortedArray =  args.sort(function(a,b) { 
    return a - b; 
  });

  let i =2;
  while(i<=sortedArray[1]){ 
    if(sortedArray[0] % i == 0 && sortedArray[1] % i == 0 ){
      sortedArray[0] = sortedArray[0] /i;
      sortedArray[1] = sortedArray[1] / i;
      store.push(i);
    }else if(sortedArray[0] % i == 0 && sortedArray[1] % i !==0){
      sortedArray[0] = sortedArray[0] /i;
      store.push(i);
    }else if(sortedArray[0] % i !== 0 && sortedArray[1] % i == 0){
      sortedArray[1] = sortedArray[1] / i;
      store.push(i);
    }else{
      if(sortedArray[0] == 1 && sortedArray[1] ==1 ){
        break ;
      }
      i++;
    }   
  }
     
    return store.reduce((a,b)=> a*b);
}

export {
  leastCommonMultiple,
};
