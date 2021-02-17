let who = ['the dog', 'my granma', 'his turtle', 'my bird'];
let what = ['eat', 'pissed', 'crushed', 'broked'];
let when = ['before the class', 'right in time', 'when I finished', 'during my lunch', 'while I was praying'];

function onLoad(who, what, when) {
    let aleatorio_who = Math.floor(Math.random() * who.length);
    let aleatorio_what = Math.floor(Math.random() * what.length);
    let aleatorio_when = Math.floor(Math.random() * when.length);
    let cadena = who[aleatorio_who] + ' ' + what[aleatorio_what] + ' ' + when[aleatorio_when];
    document.getElementById("excusa").innerHTML = cadena;
}
onLoad(who, what, when);