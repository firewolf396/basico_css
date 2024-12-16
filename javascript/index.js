
//document.addEventListener('DOMContentLoaded',()=>{
//    console.log(document.getElementById('titulo'));
//});
//document.getElementById('titulo').innerText = 'Hola Pepe';
document.getElementById('titulo').innerHTML = 'Hola <strong> Pepe</strong>';
//document.getElementById('titulo').textContent = 'Hola  Pepe';
console.log(document.getElementById('titulo').textContent);
const titulo = document.getElementById("titulo");

titulo.style.color = 'red';
titulo.style.textAlign = 'center';
titulo.style.fontSize = '24px';
titulo.classList.add('ocultar');
titulo.classList.add('mostrar');
titulo.classList.remove('ocultar');

const msg2 = document.getElementById('msg2');

msg2.classList.add('ocultar')
const saludar =()=>{
    const msg = document.getElementById('msg');
    //msg.innerHTML = '<p>Hola Juanita</p>';
    msg.innerHTML='';
    const msgp = document.createElement('p');
    const msg2 = document.getElementById('msg2');
    msgp.textContent = 'Hola Juanita';
    msgp.style.color = '#0000ff';

    const eliminar_saludo = document.createElement("button");
    eliminar_saludo.textContent = "eliminar";
    eliminar_saludo.addEventListener('click',()=>{
        msg.innerHTML = "";
    })
    msg.appendChild(msgp);
    msg.appendChild(eliminar_saludo);
}


document.getElementById('saludarBtn').addEventListener('click',()=> {
    saludar();
});
