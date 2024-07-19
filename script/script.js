/* desenvolva uma funçao que ira receber como parametro um tema, e a funcao deve retornar uma frase
aleatoria sobre este tema, tendo em vista que tera 4 temas */

const lista  = [

    {
        Tema: "Felicidade",
        Frase: "A felicidade não é um destino, é um método!",
        Autor: "Burton Hills."
        
    },

    {
        Tema: "Felicidade",
        Frase: "Os momentos felizes são nossas lembranças mais doces nesse mundo!",
        Autor: "leandro Hungria."
        
    },

    {
        Tema: "Felicidade",
        Frase: "Se você quer encontrar a felicidade, encontre gratidão!",
        Autor: "Steve Maraboli."
        
    },

    {
        Tema: "Felicidade",
        Frase: "A alegria evita mil males e prolonga  vida!",
        Autor: "William Shakespeare."
        
    },

    {
        Tema: "Amizade",
        Frase: "Voltando com amigos o mesmo caminho é mais curto!",
        Autor: "Alice Ruiz."
    },

    {
        Tema: "Amizade",
        Frase: "Tudo muda, menos uma amizade verdadeira!",
        Autor: "Danilo Dias."
    },

    {
        Tema: "Amizade",
        Frase: "Amizade vale mais que dinhiero, pois amizade não se compra, se conquista!",
        Autor: "Eduardo de Castro."
    },

    {
        Tema: "Amizade",
        Frase: "Amigos são a familia que a vida nos dá!",
        Autor: "Mario Quintana."
    },

    {
        Tema: "Amor",
        Frase: "Amar é admirar com o coração. Admirar é amar com o cérebro!",
        Autor: "Theophile Gautier."
    },

    {
        Tema: "Amor",
        Frase: "O amor é a força mais sutil do mundo!",
        Autor: "Mahatma Gandhi."
    },

    {
        Tema: "Amor",
        Frase: "É um amor pobre aquele que se pode medir!",
        Autor: "Willim Shakespeare."
    },

    {
        Tema: "Amor",
        Frase: "Não há remédio para o amor, a não ser amar mais!",
        Autor: "henry David."
    },

    {
        Tema: "Família",
        Frase: "A verdadeira família é aquela unida pelo espirito e não pelo sangue!",
        Autor: "Luiz Gasparetto."
    },

    {
        Tema: "Família",
        Frase: "Família é o amor na sua forma mais pura!",
        Autor: "Henry David."
    },

    {
        Tema: "Família",
        Frase: "Família é o amor de Deus, nos oferecendo um pouquinho do céu aqui na terra!",
        Autor: "Willim Shakespeare."
    },

    {
        Tema: "Família",
        Frase: "O amor é um dos pilares essenciais para sustentar uma família",
        Autor: "Willim Shakespeare."
    }

]

function gerarFrase (){

    const select = document.querySelector(".seletor") 
    let Frase = document.querySelector(".Frase")
    let Autor = document.querySelector(".Autor")

    let frasesTema = []
    let sorteio = 0;
    let fraseAtual;
    
    for(let i = 0; i < lista.length; i++){
       
        if(lista[i].Tema.toLowerCase() == select.value.toLowerCase()){
            frasesTema.push(lista[i])
        }
    }

    if(frasesTema.length == 0){
        alert(" Nenhum tema foi selecionado!")
        Frase.innerHTML = ""
        Autor.innerHTML = "Autor: " 
        return
    }

    sorteio = Math.floor(Math.random() * frasesTema.length)

    fraseAtual = frasesTema[sorteio]

    Frase.innerHTML = fraseAtual.Frase
    Autor.innerHTML = "Autor: " + fraseAtual.Autor


}