let venus = document.getElementById("venus");
let talena = document.getElementById("talena");
let larota = document.getElementById("larota");
let amoly = document.getElementById("amoly");
let infVacia = document.getElementById("infInic");
let titPers = document.getElementById("titPers");

let persV = document.getElementById("persV");
let persT = document.getElementById("persT");
let persL = document.getElementById("persL");
let persA = document.getElementById("persA");

let teenGirl= ["persV", "persT", "persL", "persA"];
console.log(teenGirl);
console.log(persA);
console.log(amoly);

persV.addEventListener("click",selecVenus);
persT.addEventListener("click",selecTalena);
persL.addEventListener("click",selecLarota);
persA.addEventListener("click",selecAmoly);


function selecVenus(){
    titPers.innerText="VENUS"
    infVacia.innerText="Soy Venus De Milo, la hermana mayor y líder de Tortugas Coders . Después de estar lejos de mis maestros, me he unido a mis hermanas menores a otro grupo de tortugas coders-ninja conocido como factoría-Girls junto a Talena, Larota y Amoly. Soy la nueva líder del grupo. A diferencia de Amr, que usa una katana-Java, yo empuño Java script y APIs."}
function selecTalena(){
    titPers.innerText="TALENA"
    infVacia.innerText="Soy Talena, soy un poco tímida pero muy respetada por mis hermanoas coders.Me gusta inventar imagenes, trabajo como asistente de mi hermano mayor Donatello, con quien tengo mucho en común en lo que respecta a Java Script. Mi arma principal es el UX-UI."}
function selecLarota(){
    titPers.innerText="LAROTA"
    infVacia.innerText="Larota es la segunda hermana. Larota es dura como un boton de Bootstrap. Ella es una luchadora fuerte y puede programar fácilmente una API en menos de una semana. Se la considera la gran felina-coder en un mundo de gatos-coders. Lara empuña Phyton y MySQL gemelos."}
function selecAmoly(){
    titPers.innerText="AMOLY"
    infVacia.innerText="Amoly es la más joven desarrolla movientos ágiles con flexbox y grid. A diferencia de sus hermanas, ella usa otros programas como node y SAS. Es la más linda de todas, pero no dejes que su cara bonita te engañe. Cuando es Product owner, Amoly no les da tregua, especialmente a Shredder. El arma principal de Amoly es Trello y el Miro."}
