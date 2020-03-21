const bizarreStringIncrementer = str => {
  let number = [], bizarreStr = [], words = str.split(''), flag = false;
  for (let i = 0; i < words.length; i++) {
    if (!isNaN(parseInt(words[i]))) {
      flag = false;
      for (let j = i; j < words.length; j++) {
        if (isNaN(parseInt(words[j])))
          flag = true;
      }
    }

    if (!isNaN(parseInt(words[i])) && flag === false) {
      if (number.length > 0 && parseInt(number.join('')) === 0)
        bizarreStr.push('0');
      
      number.push(words[i]);
    } else {
      bizarreStr.push(words[i]);
    }
  }

  if ((parseInt(number.join('')) + 1).toString().split('').length > (parseInt(number.join(''))).toString().split('').length && bizarreStr[bizarreStr.length - 1] == '0')
    bizarreStr.pop();

  return bizarreStr.join('') + ( number.length < 1  ? 1 : parseInt(number.join('')) + 1);
};

export{bizarreStringIncrementer} 

