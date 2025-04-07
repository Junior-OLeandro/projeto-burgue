// Seleciona todos os botões e as seções com as opções
const botoes = document.querySelectorAll('.botao');
const opcoes = document.querySelectorAll('.opcoes');

// Percorre cada botão
botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        // Remove a classe 'selecionado' de todos os botões e opções
        removerSelecao();

        // Adiciona a classe 'selecionado' ao botão clicado
        botao.classList.add('selecionado');

        // Exibe a seção correspondente (imagem + conteúdo)
        opcoes[index].classList.add('selecionado');
    });
});

// Função que remove a seleção atual
function removerSelecao() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    const opcaoSelecionada = document.querySelector('.opcoes.selecionado');

    if (botaoSelecionado) {
        botaoSelecionado.classList.remove('selecionado');
    }

    if (opcaoSelecionada) {
        opcaoSelecionada.classList.remove('selecionado');
    }
}
