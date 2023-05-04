const tabla = document.getElementById('tbody-estudiante');


const llamadaDatos = async () =>{

    try{
        let datos = await fetch("http://localhost:3000/EstudianteTodos");
        let datosjson = await datos.json();
        if(!datos.ok)throw { status: res.status, statusText: res.statusText };


        AñadirDataTables(datosjson);
        

    }catch(error){
        console.log(error)
    }
}

function AñadirDataTables(datosjson){

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
        td5.textContent = objeto.semestre;
        fragmento.appendChild(td5)

        let td6 = document.createElement('td');
        td6.textContent = objeto.uni;
        fragmento.appendChild(td6)

        let tr = document.createElement('tr')
        tr.appendChild(fragmento)
        
        tabla.appendChild(tr);
    });
}
llamadaDatos();