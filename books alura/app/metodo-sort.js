let btnOrdenarPorPreco=document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener("click", ordenarLivrosPorPreco)

function ordenarLivrosPorPreco(){
    var livrosOrdenados=livros.sort((a,b)=>b .preco - a.preco);
    exibirLivrosNaTela(livrosOrdenados);
}