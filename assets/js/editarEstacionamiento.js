(function()
{
    let DB;
    let idCliente;

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const direccionInput = document.querySelector('#direccion');

    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded',()=>{
        conectarDB();
         //actualiza el registro
         formulario.addEventListener('submit',actualizarCliente);
        //verificar id de la url
        const parametrosURL = new URLSearchParams(window.location.search);

         idCliente = parametrosURL.get('id');
        if(idCliente)
        {
            setTimeout(()=>{
                obtenerCliente(idCliente);
            },1000);
            
        }
    });
    function actualizarCliente(e)
    {
        e.preventDefault();

        if(nombreInput.value === ''|| emailInput.value === '' || telefonoInput.value === '' || direccionInput.value === '')
        {
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        //actualizar
        const clienteActualizado =  {
           nombre: nombreInput.value,
           email: emailInput.value,
           telefono : telefonoInput.value,
           direccion : direccionInput.value,
           id : Number(idCliente)    
        };
        
        const transaction = DB.transaction(['crm'],'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.put(clienteActualizado);

      

        transaction.oncomplete = function() {
            imprimirAlerta('Editado correctamente');
            setTimeout(()=>
          {
            window.location.href = 'home.html';
          },3000)
        };
  
        transaction.onerror = function() {
            
            imprimirAlerta('Hubo un error','error');
        }
        

    }


    function obtenerCliente(id)
    {
        
        const transaction = DB.transaction(['crm'],'readonly');
        const objectStore = transaction.objectStore('crm');
        
        const cliente = objectStore.openCursor();
        cliente.onsuccess = function(e)
        {
           const cursor =  e.target.result;

           if(cursor)
           {
               if(cursor.value.id === Number(id))
               {
                   llenarFormulario(cursor.value);
               }

               cursor.continue();
           }
        }
    }

    function llenarFormulario(datosCliente)
    {
        const{nombre,email,telefono,direccion} = datosCliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        direccionInput.value = direccion;


    }



    function conectarDB()
  {
      const abrirConexion = window.indexedDB.open('crm',1);
      abrirConexion.onerror = function()
      {
          console.log('Error');
      };
      abrirConexion.onsuccess =  function()
      {
          DB = abrirConexion.result;
      }
  }
})();