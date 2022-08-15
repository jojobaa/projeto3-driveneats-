
let comida;
let bebida;
let sobremesa;

let comidaNome;
let bebidaNome;
let sobremesaNome;

let precoDaComida;
let precoDaBebida;
let precoDaSobremesa;

function pratoSelecionado(classPedido){

    const pedidoSelecionado = document.querySelector('.selecionarPrato');
    comida = classPedido;
    comidaNome = comida.querySelector('.nomePedido').innerText
    precoDaComida = comida.querySelector('.precoPrato').innerHTML

    if(pedidoSelecionado !== null){
        pedidoSelecionado.classList.remove('selecionarPrato');
    }

      classPedido.classList.add('selecionarPrato');
      finalizarPedido() 
   
}

function bebidaSelecionada(classPedido){

    const pedidoSelecionado = document.querySelector('.selecionarBebida');
    bebida = classPedido;
    bebidaNome = bebida.querySelector('.nomeBebida').innerText
    precoDaBebida = bebida.querySelector('.precoBebida').innerHTML

    if(pedidoSelecionado !== null){
        pedidoSelecionado.classList.remove('selecionarBebida');
    }

      classPedido.classList.add('selecionarBebida');
      finalizarPedido() 
   
}

function sobremesaSelecionada(classPedido){

    const pedidoSelecionado = document.querySelector('.selecionarSobremesa');
    sobremesa = classPedido;
    sobremesaNome = sobremesa.querySelector('.nomeSobremesa').innerText
    precoDaSobremesa = sobremesa.querySelector('.precoSobremesa').innerHTML

    if(pedidoSelecionado !== null){
        pedidoSelecionado.classList.remove('selecionarSobremesa');
    }

      classPedido.classList.add('selecionarSobremesa');
      finalizarPedido() 
}

function finalizarPedido() {
    const prato = document.querySelector(".selecionarPrato");
    const bebida = document.querySelector(".selecionarBebida");
    const sobremesa = document.querySelector(".selecionarSobremesa");

    if ((prato !== null) && (bebida !== null) && (sobremesa !== null)) {

        const habilita = document.querySelector(".barraDeBaixo");
        const desabilita = document.querySelector(".barraDeBaixo2");

        habilita.classList.add("escondido");     
        desabilita.classList.remove("escondido");
        
    }
}


function enviarPedido(){
    if(comida && bebida  && sobremesa ){

    let rodape = document.querySelector(".barraDeBaixo2")
    let p = document.querySelector(".barraDeBaixo2 p")
    rodape.classList.add(".backgroundP2")

    let preco1 = Number(precoDaComida.substr(3))
    let preco2 = Number(precoDaBebida.substr(3))
    let preco3 = Number(precoDaSobremesa.substr(3))
    let total = preco1 + preco2 + preco3

    let mensagemPedido = `Olá, gostaria de fazer o pedido: 
    - Prato:${comidaNome}
    - Bebida: ${bebidaNome}
    - Sobremesa: ${sobremesaNome}
    Total: R$ ${total.toFixed(2)}`

    //p.innerHTML = `<a href="https://wa.me/5586994751266?text=${mensagemPedido}"> Fechar pedido </a>`

    let encoded = encodeURIComponent(mensagemPedido);
    window.open(`https://wa.me/${5586994751266}?text=${encoded}`)
}

}