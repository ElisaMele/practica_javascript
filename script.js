
//Ejercicio 1
let body = document.body;
let cuadrado1 = document.querySelector('.cuadrado1');
cuadrado1.addEventListener('click', function () {
    body.style.backgroundColor = '#FF1A1A';

});

let cuadrado2 = document.querySelector('.cuadrado2');
cuadrado2.addEventListener('click', function () {
    body.style.backgroundColor = '#2025F9';

});

let cuadrado3 = document.querySelector('.cuadrado3');
cuadrado3.addEventListener('click', function () {
    body.style.backgroundColor = '#1AEA29';

});


//Ejercicio 2

let textarea = document.getElementById('textarea');
let contadorCaracteres = document.getElementById('contador');

textarea.addEventListener('input', function () {
    let longitudTexto = textarea.value.length;

    contadorCaracteres.textContent = longitudTexto;
});

//Ejercicio 3

var alumnos = [

    {
        nombre: 'Juan Gomez',
        nota: 7
    },
    {
        nombre: 'Pedro Rodriguez',
        nota: 4
    },
    {
        nombre: 'Roxana García',
        nota: 8
    },
    {
        nombre: 'Luciano Lopez',
        nota: 5
    },
    {
        nombre: 'Fernanda Gimenez',
        nota: 6
    },
    {
        nombre: 'Florencia Martinez',
        nota: 10
    },
    {
        nombre: 'Raul Sanchez',
        nota: 7
    },
    {
        nombre: 'Sandra Figueroa',
        nota: 8
    }
];

function aprobado() {
        var alumnosAprobados = [];


        for (var i = 0; i < alumnos.length; i++) {
            if (alumnos[i].nota >= 7){
                alumnosAprobados.push(alumnos[i].nombre);
            }

        }
        
        return alumnosAprobados;

};

var alumnosAprobados = aprobado();

console.log(`Los alumnos aprobados son: ${alumnosAprobados}`);

