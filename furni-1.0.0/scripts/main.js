let loaded = (eventLoaded) => {
    let myform = document.getElementById('formulario');
    myform.addEventListener('submit', ( eventSubmit ) => { 

        eventSubmit.preventDefault();
    
        if( nombre.value.length == 0 ) {
          
          nombre.focus()
    
          alert('Ingrese un nombre válido')
    
          return;
        }

        if( correo.value.length == 0 ) {
          
            correo.focus()
      
          alert('Ingrese un correo válido')
      
          return;
        }
        
        const formulario = document.getElementById('formulario');
		    formulario.addEventListener('submit',(event)=>{
			    event.preventDefault(); const nombre = document.getElementById('nombre').value;
			    const correo = document.getElementById('correo').value;
			    const tipo = document.getElementById('tipo').value;
			    const datos = {
				    nombre:nombre,
				    correo:correo, 
				    tipo:tipo
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
				    console.log(datos); // Imprimir la respuesta del servidor
				  })
				  .catch(error => console.error(error));
		    });
        debugger;
    
    })
}

window.addEventListener("DOMContentLoaded", loaded);