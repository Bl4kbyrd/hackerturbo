//Pascal Case umDoisTresQuatro

function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log("Relizando ligação...")
    }
}

const Celular1 = new Celular('Samsung', 5.5, 5000)

console.log(Celular1.marcaCelular)