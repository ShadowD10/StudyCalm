var btnInicio = document.getElementById("inicioNav");
var btnConceptos = document.getElementById("conceptosNav");
var btnTest = document.getElementById("testNav");
var btnConcejos = document.getElementById("concejosNav");
var btnContacto = document.getElementById("comunicateNav");

btnInicio.addEventListener("click", function() {
    window.location.href = "./index.html";
});
btnConceptos.addEventListener("click", function() {
    window.location.href = "./conceptos.html";
});
btnTest.addEventListener("click", function() {
    window.location.href = "./test.html";
});
btnConcejos.addEventListener("click", function() {
    window.location.href = "./consejos.html";
});
btnContacto.addEventListener("click", function() {
    window.location.href = "./comunicate.html";
});
