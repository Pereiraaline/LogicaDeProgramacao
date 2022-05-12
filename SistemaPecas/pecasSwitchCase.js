let listaDePecas = ["Filtro de Ar", "Motor", "Disco de Freio"]

if (listaDePecas.length < 10) 
{
    console.log("É possível cadastrar mais peças!!!")
}
else
{
    console.log("Capacidade insuficiente, não é possível cadastrar!!!")
}

let peso = 101
if(peso < 100)
{
    console.log("A peça deve pesar no mínimo 100g.")
}
else
{
    console.log("A peça possui o peso adequado.")
}

let nomePeca = "Disco de Freio"
switch (nomePeca.length){
    case 0:
        console.log("O nome da peça não pode ser vazio.")
        break;
    case 1:
    case 2:
        console.log("O nome da peça deve conter pelo  menos 3 caracteres.")
    default:
        console.log("Nome da peça adequado para cadastro.")
        break;
}