//declaração de objeto
var cartaHeroi1 = {
  nome: "Thor",
  imagem:"https://i2.wp.com/cinemacao.com/wp-content/uploads/2017/10/thor-3.jpg?resize=1140%2C586&ssl=1",
  atributos: {
    ataque: 85,
    defesa: 65,
    magia: 70
  }
}
var cartaHeroi2 = {
  nome: "Superman",
  imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/03/superman-snyder-cut-divulgacao.jpg",
  atributos: {
    ataque: 100,
    defesa: 85,
    magia: 40
  }
}
var cartaMago1 = {
  nome: "Gandalf", imagem:"https://files.mormonsud.net/wp-content/uploads/2018/09/gandalf.jpg",
  atributos: {
    ataque: 60,
    defesa: 55,
    magia: 90
  }
}
var cartaMago2 = {
  nome: "Doutor Estranho",
  imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxGSCxHLX6q2uNmbru6QHy7ggdrhs5ObrYw&usqp=CAU",
  atributos: {
    ataque: 50,
    defesa: 50,
    magia: 80
  }
}

var cartaAnimal1 = {
  nome:"Hipogrifo",
  imagem:"http://2.bp.blogspot.com/_gAYaWeEsvcI/TS-GrsfJSBI/AAAAAAAAAFI/XilL1-NpMfE/s1600/buckbeak.bmp",
  atributos: {
    ataque: 55,
    defesa: 30,
    magia: 55
  }
}
var cartaAnimal2 = {
  nome: "Charizard",
  imagem:"https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/05/legiao_Ivj8qSxFEQif.jpg.jpeg",
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
  
    cartaJogador = cartas[numeroCartaJogador]
    //vai interagir com o html e os botões 
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibeCartaJogadorNaTela() //chamada de função 
    }
   function exibeCartaJogadorNaTela(){
     var divCartaJogador = document.getElementById("carta-jogador")//id contido no html está interagindo com js atraves da função na div
     var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

     divCartaJogador.style.backgroundImage =`url(${cartaJogador.imagem})`//comando de estilo onde o js interage diretamente no css alterando a visualização da pagina
     var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`//interaçao no html na tag <p></p> para inserir o o atributo nome à carta sorteada
     var opcoesTexto = ""
     
     for (var atributo in cartaJogador.atributos) { //rodando um laço dentro da carta jogador e fazendo a busca somente por atributos
         opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + "" + cartaJogador.atributos[atributo] +"<br>" //é impresso na tela as opções de atributo a serem selecionadas dentro do layout da carta no html para que possa ser selecionado o atributo utilizado para o jogo
            }
    var html ="<div id='opcoes' class='carta-status'>"
    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
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
        var divResultado = document.getElementById("resultado")
        var atributoSelecionado = obtemAtributoSelecionado()

        if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
            htmlResultado = '<p class="resultado-final">Venceu!</p>'
        } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
            htmlResultado = '<p class="resultado-final">Perdeu!</p>'
        } else if(cartaJogador.atributos[atributoSelecionado] == cartaMaquina.atributos[atributoSelecionado]) {
           htmlResultado = '<p class="resultado-final">Empatou</p>'
        } else alert ("Nenhum atributo selecionado!")
     
        
        divResultado.innerHTML = htmlResultado

      exibeCartaMaquina()//chamando uma função para exibir a carta da máquina 
    }
//função que ira exibir a carta da máquina
function exibeCartaMaquina(){
  var divCartaMaquina = document.getElementById("carta-maquina")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  var opcoesTexto = ""
  
  for (var atributo in cartaMaquina.atributos){
    opcoesTexto += "<p type='text' name='atributo' value='"+atributo + "'>" + atributo + "" + cartaMaquina.atributos[atributo] + "<br>"
  }
  var html ="<div id='opcoes' class='carta-status --spacing'>"
  
  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}