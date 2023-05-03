const tabla = document.getElementById('tbody-estudiante');


const llamadaDatos = async () =>{

    try{
        let datos = await fetch("http://localhost:3000/Estudiante");
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
        td2.textContent = objeto.edad;
        fragmento.appendChild(td1)
      
        const td3 = document.createElement('td');
        td3.textContent = objeto.primer_apellido;
        fragmento.appendChild(td3)

        const td4 = document.createElement('td');
        td4.textContent = objeto.segundo_apellido;
        fragmento.appendChild(td4)

        const td5 = document.createElement('td');
        td5.textContent = objeto.semestre;
        fragmento.appendChild(td5)

        const td6 = document.createElement('td');
        td6.textContent = objeto.universidad;
        fragmento.appendChild(td6)

        let tr = document.createElement('tr')
        tr.appendChild(fragmento)
        
        table.appendChild(tr);
    });
}