const tabla = document.getElementById('tbody-empleado');


const llamadaDatos = async () =>{

    try{
        let datos = await fetch("http://localhost:3000/EmpleadoTodos");
        let datosjson = await datos.json();
        console.log(datosjson);
        if(!datos.ok)throw { status: res.status, statusText: res.statusText };


        AñadirDataTables(datosjson);
        

    }catch(error){
        console.log(error)
    }
}

function AñadirDataTables(datosjson){
    console.log(datosjson)
    datosjson.forEach(objeto => {
        let fragmento = document.createDocumentFragment()
        // Crear un nuevo elemento tr
        let td1 = document.createElement('td');
        td1.textContent = objeto.nombre;
        fragmento.appendChild(td1)

        let td2 = document.createElement('td');
        td2.textContent = objeto.p_apellido;
        fragmento.appendChild(td2)
      
        let td3 = document.createElement('td');
        td3.textContent = objeto.s_apellido;
        fragmento.appendChild(td3)

        let td4 = document.createElement('td');
        td4.textContent = objeto.edad;
        fragmento.appendChild(td4)

        let td5 = document.createElement('td');
        td5.textContent = objeto.salario;
        fragmento.appendChild(td5)

        let td6 = document.createElement('td');
        td6.textContent = objeto.puesta;
        fragmento.appendChild(td6)

        let tr = document.createElement('tr')
        tr.appendChild(fragmento)
        
        tabla.appendChild(tr);
    });
}
llamadaDatos();
