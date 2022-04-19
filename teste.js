mes = 2;

isValidMonth = true;

if(mes < 1){
  console.log('mes tem que ser maior que 1');
  isValidMonth = false;
}

if(mes > 12){
  console.log('mes tem que ser menor que 12');
  isValidMonth = false;
}

if(isValidMonth == true){
  mesesCom31Dias = [1, 3, 5, 7, 8]
  mesesComMenosDias = [2, 4, 6, 9, 11]

  if(mesesCom31Dias.includes(mes)){
    console.log('sim');
  }

  if(mesesComMenosDias.includes(mes)){
    console.log('nao');
  }
}
