(function()
{
    
    let idCliente;

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const pass1Input = document.querySelector('#pass1');
    const pass2Input = document.querySelector('#pass2');

    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded',()=>{
       
         //actualiza el registro
         formulario.addEventListener('submit',registrarCliente);
        //verificar id de la url
      
            
        
    });
    function registrarCliente(e)
    {
        e.preventDefault();

        if(nombreInput.value === ''|| emailInput.value === '' || pass1Input.value === '' || pass2Input.value === '')
        {
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }
        if(nombreInput.value !== ''|| emailInput.value !== '' || pass1Input.value !== '' || pass2Input.value !== '')
        {
            imprimirAlerta('Se ha registrado correctamente');
            setTimeout(()=>
            {
              window.location.href = 'login.html';
            },3000)
        }
        

         
        
       
        

      
      
        

    }


  



})();