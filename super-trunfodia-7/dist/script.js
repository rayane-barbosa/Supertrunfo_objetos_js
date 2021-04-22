//declaração de objeto
var cartaHeroi1 = {
  nome: "Thor",
  atributos: {
    ataque: 85,
    defesa: 65,
    magia: 70
  }
}
var cartaHeroi2 = {
  nome: "Han Solo",
  atributos: {
    ataque: 65,
    defesa: 55,
    magia: 0
  }
}
var cartaMago1 = {
  nome: "Gandalf",
  atributos: {
    ataque: 60,
    defesa: 55,
    magia: 90
  }
}
var cartaMago2 = {
  nome: "Doutor Estranho",
  atributos: {
    ataque: 50,
    defesa: 50,
    magia: 80
  }
}

var cartaAnimal1 = {
  nome:"Hipogrifo",
  atributos: {
    ataque: 55,
    defesa: 30,
    magia: 55
  }
}
var cartaAnimal2 = {
  nome: "Charizard",
  atributos: {
    ataque: 80,
    defesa: 68,
    magia: 65
  }
}
//declaração de variaveis
var cartaMaquina
var cartaJogador
var cartas = [cartaHeroi1, cartaHeroi2, cartaMago1, cartaMago2, cartaAnimal1, cartaAnimal2] //lista dos objetos

function sortearCarta() {  //função vai sortear as cartas a partir do processo de "sorteio aleatório"
    var numeroCartaMaquina = parseInt(Math.random() * 6)
    cartaMaquina = cartas[numeroCartaMaquina]
    
    var numeroCartaJogador = parseInt(Math.random() * 6)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 6) 
      
    }
  //imprime somente o resultado do jogador no console
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)
    //vai interagir com o html e os botões 
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibirOpcoes() //chamada de função
    }
        function exibirOpcoes(){ //criando a função que exibe as funções
          var opcoes = document.getElementById('opcoes')
          var opcoesTexto = ""
          for (var atributo in cartaJogador.atributos) { //rodando um laço dentro da carta jogador e fazendo a busca somente por atributos
              opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo //é impresso na tela as opções de atributo a serem selecionadas dentro do html 
          }
          opcoes.innerHTML = opcoesTexto // interação de js com html
    }
        function obtemAtributoSelecionado() {//recebe o atributo selecionado
            var radioAtributo = document.getElementsByName('atributo')// inserir um elemento no html pelo nome que está sendo chamado
            for (var i = 0; i < radioAtributo.length; i++) {
                if (radioAtributo[i].checked) { 
                    return radioAtributo[i].value //checa o valor do atributo (ataque, defesa, magia)
                }
            }
        }
    function jogar() {
        var atributoSelecionado = obtemAtributoSelecionado()

        if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
            alert('Venceu a carta máquina')
        } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
            alert('Perdeu. Carta da máquina é maior')
        } else {
            alert('Empatou!')
        }
        console.log(cartaMaquina)
    }