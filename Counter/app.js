let btnIncremento = document.querySelector(".btn-incremento");
let btnReset = document.querySelector(".btn-reset");
let btnDecre = document.querySelector(".btn-decremento");
let numero = document.querySelector(".numero");

btnIncremento.addEventListener("click", function () {
  numero.innerHTML = parseInt(numero.innerText) + 1;
});

btnDecre.addEventListener("click", function () {
  numero.innerHTML = parseInt(numero.innerHTML - 1) 
});

btnReset.addEventListener("click", function(){
   numero.innerHTML =  0
})
