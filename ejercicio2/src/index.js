const textarea = document.getElementById("textarea_sin_miedo_al_exito");
const contador = document.getElementById("contador");

textarea.addEventListener("input" , () => {
    contador.innerText = textarea.value.length;
})