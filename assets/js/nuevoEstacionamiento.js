let DB;
(function(){
  
  const formulario = document.querySelector('#formulario');
  document.addEventListener('DOMContentLoaded',()=>{
     conectarDB();
     formulario.addEventListener('submit', validarCliente);
  });



  function validarCliente(e)
  {
     e.preventDefault();

     //leer inputs de formulario
     const nombre = document.querySelector('#nombre').value;
     const email = document.querySelector('#email').value;
     const telefono = document.querySelector('#telefono').value;
     const direccion = document.querySelector('#direccion').value;

     if(nombre === '' || email === '' || telefono === '' || direccion === '')
     {
        imprimirAlerta('Todos los campos son obligatorios','error');
        return;
     }
     //crear un objeto de informacion

     const cliente = {
         nombre,
         email,
         telefono,
         direccion
         
     }
     
     cliente.id = Date.now();
     crearNuevoCliente(cliente);
  }

  function crearNuevoCliente(cliente)
  {
    
      const transaction = DB.transaction(['crm'], 'readwrite');
      const objectStore = transaction.objectStore('crm');
      objectStore.add(cliente);
     

      transaction.onerror = function()
      {
          imprimirAlerta('Hubo un error','error');
      };
      transaction.oncomplete = function()
      {
          imprimirAlerta('El estacionamiento se agregó correctamente');

          setTimeout(()=>
          {
            window.location.href = 'home.html';
          },3000)
      }
       
  }
  

  
}

)();