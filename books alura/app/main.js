let livros=[];
const endpointDaAPI="https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivrosDaAPI();
const elementoInserirLivros=document.getElementById('livros');

async function getBuscarLivrosDaAPI(){
    const res=await fetch(endpointDaAPI);
    livros=await res.json();
    const livrosComDesconto=aplicarDesconto(livros);
    exibirLivrosNaTela(livrosComDesconto);
}

