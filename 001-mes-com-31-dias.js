// mes1 = 1;
// mes2 = 2;
// mes3 = 3;
// mes4 = 4;
// mes5 = 5;
// mes6 = 6;
// mes7 = 7;
// mes8 = 8;
// mes9 = 9;
// mes10 = 10;
// mes11 = 11;
// mes12 = 12;

// meses = [1,2,3,4,5,6,7,8,9,10,11,12];
meses = [0, 4, 12, 14];
// meses = [ 'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez' ];
// meses[0]

// function bascara(b, a, c){
//   x = (b * b) - 4 * a * c
//   console.log(x)
// }
// bascara(1, 10, 2)

function has31days(mes){
  if(mes < 1){
    console.log('mes tem que ser maior que 1');
    return;
  }

  if(mes > 12){
    console.log('mes tem que ser menor que 12');
    return;
  }

  mesesCom31Dias = [1, 3, 5, 7, 8, 12]
  mesesComMenosDias = [2, 4, 6, 9, 11]

  if(mesesCom31Dias.includes(mes)){
    console.log('sim');
  }

  if(mesesComMenosDias.includes(mes)){
    console.log('nao');
  }
}

// has31days(mes1);
// has31days(mes2);
// has31days(mes3);

for(contador = 0; contador < meses.length ; contador = contador + 1){
  console.log('contador: ' + contador);

  mesQueFoiPego = meses[contador];
  console.log('  mes: ' + mesQueFoiPego)
  // chamar / executar uma funcao
  has31days(mesQueFoiPego);

  // has31days(meses[contador]);
}


// function teste(lala){
//   console.log('o valor de lala eh: ' + lala);
// }
