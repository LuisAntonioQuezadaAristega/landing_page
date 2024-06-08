let loaded = (eventLoaded) => {
    let myform = document.getElementById('formulario');
    myform.addEventListener('submit', ( eventSubmit ) => { 

        eventSubmit.preventDefault();

        let nombreValue = nombre.value;
        let correoValue = correo.value;
    
        if( nombreValue.length == 0 ) {
          
          nombre.focus()
    
          alert('Ingrese un nombre válido')
    
          return;
        }

        if( correoValue.length == 0 ) {
          
            correo.focus()
      
          alert('Ingrese un correo válido')
      
          return;
        }
        
        debugger;
    
    })
}

window.addEventListener("DOMContentLoaded", loaded);