(function()
{
    
    let idCliente;

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const patenteInput = document.querySelector('#patente');

    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded',()=>{
       
         //actualiza el registro
         formulario.addEventListener('submit',agendar);
        //verificar id de la url
      
            
        
    });
    function agendar(e)
    {
        e.preventDefault();

        if(nombreInput.value === ''|| emailInput.value === '' || telefonoInput.value === '' || patenteInput.value === '')
        {
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }
        if(nombreInput.value !== ''|| emailInput.value !== '' || telefonoInput.value !== '' || patenteInput.value !== '')
        {
            imprimirAlerta('Su solicitud ha sido enviada correctamente');
            setTimeout(()=>
            {
              window.location.href = 'home.html';
            },3000)
        }
        

         
        
       
        

      
      
        

    }


  



})();