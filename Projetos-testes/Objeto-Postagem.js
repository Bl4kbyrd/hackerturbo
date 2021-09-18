// Eu quero que você crie neste exercício um objeto de postagem de blog que vai conter as seguinter propriedade 

//postagem
/* 
titulo
mensagem
autor
vizualizacoes
comentarios
    (autor, mensagem)
estaAoVivo
*/

function postagem(titulo, mensagem, autor, vizualizacoes, comentarios, estaAoVivo){
    this.titulo = titulo
    this.mensagem = mensagem
    this.autor = autor
    this.vizualizacoes = vizualizacoes
    this.comentarios = [autor, mensagem]
    this.estaAoVivo = true
}



const Postagem2 = new postagem('a', 'b', 'c', 500)


console.log(Postagem2)