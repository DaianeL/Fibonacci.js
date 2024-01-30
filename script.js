// Critério de aceite 1: A funcionalidade deve exibir na tela a Sequência de Fibonacci;
// Critério de aceite 2: A funcionalidade deve ter dois botões: Adicionar e Remover números;
// Critério de aceite 3: A adição de números deve ser feita de forma recursiva.

// Array para armazenamento dos números.
let fibonacciArray = [];

// Função para gerar a sequência.
function gerarSequenciaDeFibonacci(numero) {
  // se o número for menor ou igual a 1, a função retorna 1.
  if (numero <= 1) {
    return numero;
    // se o número for maior que 1 a função segue os comandos do bloco 2.
  } else {
    // a partir daqui, iniciaremos a sequência de Fibonacci.
    // a sequência inicia em 0 e 1.
    // número -1 chama a função para calcular o nº anterior na sequência.
    // número -2, soma o resultado a duas posições anteriores.
    return (
      gerarSequenciaDeFibonacci(numero - 1) +
      gerarSequenciaDeFibonacci(numero - 2)
      // Ex: nº anterior = 2 - 1 = 1 + (2-2=0) = 1;
      // Ex: nº anterior = 1 - 1 = 0 + (3-2=2) = 2;
      // Ex: nº anterior = 2 - 1 = 1 + (4-2=2) = 3;
      // Ex: nº anterior = 3 - 1 = 2 + (5-2=3) = 5;
      // Ex: nº anterior = 5 - 1 = 4 + (6-2=4) = 8;
      // Ex: nº anterior = 8 - 1 = 7 + (7-1=6) = 13;
    );
  }
}
criarLista();

// Função criarLista: Atualiza o conteúdo da lista na tela com a sequência de Fibonacci atual.
function criarLista() {
  let listaFibonacci = document.getElementById("listaFibonacci");
  listaFibonacci.innerText = `${fibonacciArray.join(",")}`;
}

// Adiciona o próximo número da sequência de Fibonacci ao array e atualiza a lista na tela.
let botaoAdicionar = document.getElementById("btn_Add");
botaoAdicionar.addEventListener("click", function () {
  // Adiciona o próximo número da sequência de Fibonacci ao array.
  let novoNumero = gerarSequenciaDeFibonacci(fibonacciArray.length);
  fibonacciArray.push(novoNumero);
  criarLista();
});

// Remove o último número da sequência de Fibonacci do array e atualiza a lista na tela.
let botaoRemover = document.getElementById("btn_Remove");
// Remove o último número da sequência de Fibonacci do array.
botaoRemover.addEventListener("click", function () {
  fibonacciArray.pop();
  criarLista();
});
