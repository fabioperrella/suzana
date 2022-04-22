console.log('inicio')

function imprimeTudo(argumento1, argumento2){
  console.log('x1: ' + argumento1)
  console.log('x2: ' + argumento2)
}

function fazNada(nome){
  console.log("ola, nao faco nada tambem, nome: " + nome);
}

// imprimeTudo(444, 5555);
// imprimeTudo(6666, 7777);
fazNada('fabio');
fazNada('suzana');
fazNada();
fazNada();

console.log('fim')
