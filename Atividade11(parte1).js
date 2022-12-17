function Nome_e_idade(){

let novo_h1 = document.createElement("h1")

let nome = document.querySelector('#nome')

let idade = document.querySelector("#Idade")

let Welcome = document.createTextNode(`Hm, você tem ${idade.value} anos, esta liberado! Aproveite o Show ${nome.value} ! `)

nome.id = "nome"

idade.id = "idade"

novo_h1.id = "novo_h1"

novo_h1.appendChild(Welcome) 


document.body.appendChild(novo_h1)


let div2 = document.createElement("div")

div2.innerHTML = '<img src =https://media.tenor.com/PPoRTJH2itYAAAAC/bendy.gif>'

div2.id = "div2"

document.body.appendChild(div2)



var div3 = document.createElement("div")

div3.id - "div3"

div3.innerHTML = "<a href ='Atividade11(parte2).html'> Opa!,link pro proximo trabalho!"

document.body.appendChild(div3)

}





let botao = document.querySelector('#botao');

botao.onclick = Nome_e_idade;



