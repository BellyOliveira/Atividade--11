// Criando um novo elemento h1
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

// Função para criar uma bolinha colorida
function criarBola() {
    // Criando um novo elemento div
    let novaBola = document.createElement('div');

    // Definindo estilos para a bolinha
    novaBola.style.width = '50px'; // Largura da bolinha
    novaBola.style.height = '50px'; // Altura da bolinha
    novaBola.style.borderRadius = '50%'; // Para fazer um círculo
    novaBola.style.position = 'absolute'; // Para posicionar a bolinha
    novaBola.style.top = Math.random() * window.innerHeight + 'px'; // Posição aleatória na altura
    novaBola.style.left = Math.random() * window.innerWidth + 'px'; // Posição aleatória na largura
    novaBola.style.backgroundColor = gerarCorAleatoria(); // Cor aleatória

    // Adicionando a bolinha ao body
    document.body.appendChild(novaBola);
}

// Função para gerar uma cor aleatória
function gerarCorAleatoria() {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

// Criar múltiplas bolinhas ao carregar a página
window.onload = function() {
    for (let i = 0; i < 20; i++) { // Cria 20 bolinhas
        criarBola();
    }
};
