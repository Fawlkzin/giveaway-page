/* 
*carne - 400 g por pessoa, se o churrasco durar mais de 6 horas 650g por pessoas
*cerveja - 1200 ml por pessoa, se o churrasco durar mais de 6 horas 2000 ml por pessoal
*bebida - 1000 ml por pessoa, se o churrasco durar mais de 6 horas 1500 ml por pessoal
*criança vale por 0,5 pessoa 
*/

var inputadultos = document.getElementById("adultos")
var inputcriancas = document.getElementById("criancas")
var inputduracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado") 

function concat(){
    let adultos = inputadultos.value 
    let criancas =inputcriancas.value 
    let duracao = inputduracao.value

    let qdtTotalCarne = carnePP(duracao)*adultos + (carnePP(duracao)/2 *criancas)
    let qdtTotalCerveja = cervejaPP(duracao) * adultos
    let qdtToltalBebidas = bebidasPP(duracao) *adultos + (bebidasPP(duracao)/2* criancas)
    
    resultado.innerHTML = `<p>É necessário ${qdtTotalCarne/1000}kg de Carne </p>`
    resultado.innerHTML += `<p>É necessário ${qdtTotalCerveja/1000}L de Cerveja </p>`
    resultado.innerHTML += `<p>É necessário ${qdtToltalBebidas/1000}L de Bebida </p>`
}
function reset(){
    location.reload()
}

function carnePP(duracao){
    if(duracao>=6){
        return 650
    } else{
        return 400
    }

}
function cervejaPP(duracao){
    if(duracao>=6){
        return 2000
    } else{
        return 1200
    }

}
function bebidasPP(duracao){
    if(duracao>=6){
        return 2000
    } else{
        return 1200
    }

}


    
        
    
