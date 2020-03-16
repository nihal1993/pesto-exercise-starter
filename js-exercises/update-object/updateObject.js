
function updateObject(...args) {
  if(args[0] === -1){
    args[2][args[2].lenght-1] = args[1];
  }else{
    args[2][args[0]] = args[1];
  }
  
  return args;
}


export {
  updateObject,
};
