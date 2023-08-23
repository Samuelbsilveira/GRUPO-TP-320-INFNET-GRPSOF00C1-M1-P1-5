// Agilidade dos pilotos (%)
const slider = 75;
const jester = 89;
const stinger = 76;
const goose = 75;
const iceman = 98;
const maverick = 90;

// Continue daqui.
let user = parseInt(prompt("Escolha o número do seu piloto \n 1 Slider \n 2 Jester \n 3 Stinger \n 4 Goose \n 5 Iceman \n 6 Maverick")) - 1;

let velComp;
let vel;
// computador escolhendo um piloto
let choices = ["slider 75","jester 89","stinger 76","goose 75","iceman 98","maverick 90"]
let comp = Math.floor(Math.random()*choices.length)
let result = choices[comp]
// computador escolhendo um piloto


// comparando agilidade

//Verifica se pilotos são iguais
if (result == choices[user]) {
  //Se for igual computador escolhe outro piloto
  let comp = Math.floor(Math.random()*choices.length)
  let result = choices[comp]
}

//Nome do piloto existe no array
if (choices[user] != undefined) {
  velComp = parseInt(result.split(" ")[1])
  result = result.split(" ")[0];
  vel = parseInt(choices[user].split(" ")[1]);
  user = choices[user].split(" ")[0];

  //Exibe agilidade e nome dos pilotos
  console.log(`Computador: ${result} | Velocidade: ${velComp} \nMeu piloto: ${user} | Velocidade: ${vel}`);

  //Compara agilidade
  if (vel > velComp) {
    console.log("Você ganhou")
  } else if (velComp > vel) {
    console.log("Você perdeu :(")
  } else {
    console.log("Você empatou")
  }
  
} else {
  console.log("Piloto invalido")
}
// comparando agilidade