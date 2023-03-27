//REFERENCIA BOTON
let buttonEvol = document.getElementById('evolucionar');
//Nombre del Pokemon
let pkmName = document.getElementById('charmander-name');
function changePkmName(){
    switch (pkmName.innerHTML){
        case 'Charmander': pkmName.innerHTML = 'Charmeleon';
        break;
        case 'Charmeleon': pkmName.innerHTML = 'Charizard';
        break;
        case 'Charizard': pkmName.innerHTML = 'Charmander';
        break;
    };
};
//Imagen del Pokemon
let contador = 1;
let pkmImg = document.getElementById('pokemon-img')
function cambiarImagen(){
    if(contador == 1) {
        pkmImg.src = "./recursos/imagenes/charmeleon.png";
        contador++;
    } else if (contador == 2) {
        pkmImg.src = "./recursos/imagenes/charizard.png";
        contador++;
    } else if (contador == 3) {
        pkmImg.src = "./recursos/imagenes/charmander.png";
        contador = 1;
    }
}

buttonEvol.addEventListener('click', cambiarImagen);
buttonEvol.addEventListener('click', changePkmName);
