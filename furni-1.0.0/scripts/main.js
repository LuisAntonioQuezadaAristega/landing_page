let loaded = (eventLoaded) => {
    let myform = document.getElementById('formulario');
    myform.addEventListener('submit', ( eventSubmit ) => { 

        eventSubmit.preventDefault();
		
		const nombre = document.getElementById('nombre').value;
		const correo = document.getElementById('correo').value;
		const consola = document.getElementById('consola').value;

        if( nombre.length == 0 ) {
          
          nombre.focus()
    
          alert('Ingrese un nombre válido')
    
          return;
        }

        if( correo.length == 0 ) {
          
            correo.focus()
      
          alert('Ingrese un correo válido')
      
          return;
        }
        
		const datos = {
			nombre:nombre,
			correo:correo, 
			consola:consola
		};
		fetch('https://proyecto02-49e35-default-rtdb.firebaseio.com/collection.json', {
			method: 'POST',
			body: JSON.stringify(datos),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(respuesta => respuesta.json())
		.then(datos => {
			alert("tu respuesta ha sido guardada!")
			location.reload();
			//console.log(datos); // Imprimir la respuesta del servidor
		})
		.catch(error => console.error(error));
    })
}

window.addEventListener("DOMContentLoaded", loaded);
obtenerDatos();
async function obtenerDatos() {
	const url = 'https://proyecto02-49e35-default-rtdb.firebaseio.com/collection.json';
	const respuesta = await fetch(url);
	if (!respuesta.ok) {
		console.error("Error:", respuesta.status);
		return;
	}
	const datos = await respuesta.json();
	let votesMap = new Map();
	for(const key in datos){
		let votes = datos[key]
		let consola = votes['consola']

		let conteo = votesMap.has(consola)?votesMap.get(consola)+1:1;
		votesMap.set(consola, conteo)
	}

	total = 0
	tablebody.innerHTML = ''

	//console.log(votesMap);

	for(let key of votesMap.keys()){
		let template = `
			<tr>
				<td>${key}</td>
				<td>${votesMap.get(key)}</td>
			</tr>
			`
		tablebody.innerHTML += template
	}

}