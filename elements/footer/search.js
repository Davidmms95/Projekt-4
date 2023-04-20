/// Definer arrayet
let data = [
	{ id: 1, topic: "HTML" },
	{ id: 2, topic: "CSS" },
	{ id: 3, topic: "Javascript" },
	{ id: 4, topic: "Research" },
	{ id: 5, topic: "Brugertest" },
	{ id: 6, topic: "InDesign" }
];

// Definer søgefunktionen
function search() {
	// Henter søgning fra inputelement
	let input = document.getElementById('searchbar').value.toLowerCase();

	// Filtrere arrayet
	let results = data.filter(item => item.topic.toLowerCase().includes(input));

	// Viser søgeresultat i output
	let output = document.getElementById('output');
	output.innerHTML = '';
	if (results.length === 0) {
		let li = document.createElement('li');
		li.textContent = "Vi kan desværre ikke finde det, du leder efter. Prøv igen med andre søgeord.";
		output.appendChild(li);
	} else {
		for (let i = 0; i < results.length; i++) {
			let li = document.createElement('li');
			let a = document.createElement('a');
			a.href = `#${results[i].id}`;
			a.textContent = results[i].topic;
			li.appendChild(a);
			output.appendChild(li);
		}
	}
}
