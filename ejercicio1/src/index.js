const backgrounds = ["#FF0000" , "#DAA520" , "#008000"];
const body = document.querySelector("body");
const cuadros = document.querySelectorAll(".flex-child");

cuadros.forEach((cuadro , index) => {
    cuadro.addEventListener("click" , () =>{
        body.style.backgroundColor = backgrounds[index];
    });
})