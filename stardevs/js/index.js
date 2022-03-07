// API StarWars Infos:

const persons = document.getElementById('persons');
const starships = document.getElementById('starships');
const planets = document.getElementById('planets');

fillCounters();

function fillCounters() {
	Promise.all([
		getData('people/'),
		getData('starships/'),
		getData('planets')
	])
	.then(data => {
		// console.log(data) // para conferir as infos que chegam
		persons.style.fontSize = '5em';
		starships.style.fontSize = '5em';
		planets.style.fontSize = '5em';

		persons.innerHTML = data[0].count;
		starships.innerHTML = data[1].count;
		planets.innerHTML = data[2].count;
	})
	.catch(err => console.log('Erro dos quantitativos: ', err))
}

function getData(param) {
	return fetch(`https://swapi.dev/api/${param}`)
		.then(res => res.json())
}


// API Frases:

function loadPhrase() {
	const btn = document.getElementById('btn-phrases');
	const phrase = document.getElementById('phrase');
	
	return fetch(`https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote`)
		.then(data => data.json())
		.then(json => {
			// console.log(json.content); // para conferir as infos
			dados = json.content
			btn.innerHTML = 'Ver mais uma frase!';
			phrase.innerHTML = `" ${dados} "`;

			phrase.animate([{transform:'translateY(-70px)'},{transorm: 'translateY(0px)'}],{duration: 500})
	})

		.catch(err => console.log('Erro da frase: ', err))
}