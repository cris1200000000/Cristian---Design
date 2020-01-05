function MO(){
    var ancla = document.getElementsByClassName('div-text-a-1');
    for(i=0; i<ancla.length; i++){
        ancla[i].classList.toggle('desaparece');
    }
}
function MO2(){
    var ancla2 = document.getElementsByClassName('div-text-a-2');
    for(i=0; i<ancla2.length; i++){
        ancla2[i].classList.toggle('desaparece');
    }
}
function MO3(){
    var ancla3 = document.getElementsByClassName('div-text-a-3');
    for(i=0; ancla3.length; i++){
        ancla3[i].classList.toggle('desaparece');
    }
}

const mensaje = document.querySelector('#hey-id');
const button = document.querySelector('.buttons-m-hey');

let expand = () => {
    mensaje.style.display = "none";
}
button.addEventListener('click', expand);

const newStatusInput = document.querySelector('.inputsocialmedia');

if (newStatusInput.value === '') {
	newStatusInput.value += '   Status: Feeling Blue';
}