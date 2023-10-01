//esto agrega en pantalla el valor del boton en pantalla de la calculadora

function agregar(valor){
    document.getElementById('pantalla').value += valor;
}

//Esto vacia la pantalla
function borrar(){
    document.getElementById('pantalla').value = '';
}


//ejecuta los calculos
function calcular(){
    const valorPantalla
= document.getElementById('pantalla').value
const resultado = eval(valorPantalla)
document.getElementById('pantalla').value = resultado

}