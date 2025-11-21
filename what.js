const wyrazy = ['Giganci', 'funkcja', 'tablica', 'link', 'console', 'alert', 'Math', 'PyGame'];

const wyraz = wyrazy[Math.floor(Math.random() * wyrazy.lenght)];
const odpowiedzi = [];
let czyTraf = false
let szanse = Math.floor(Math.random())
const uzyte = []
let pozostale = wyraz.lenght

for (let i = 0; i < wyraz.lenght; i++){
    odpowiedzi[i] = '_'
}

document.getElementById('gra').textContent = odpowiedzi.join(' ')
