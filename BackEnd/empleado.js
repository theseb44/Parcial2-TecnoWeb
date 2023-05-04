btn_Em.addEventListener("click",()=>{
    setTimeout(() => {
        console.log(localStorage.getItem("Empleado"));
   const valor=localStorage.getItem("Empleado");
      const valo=JSON.parse(valor);
  fetch("http://localhost:3000/Empleados",{
    method:"post",
    body:JSON.stringify(valo)
  }).then(response => {
    if (response.ok) {
      alert("Los datos se han enviado correctamente");
    } else {
      alert("Ha habido un error al enviar los datos");
    }
  })
  localStorage.removeItem("Empleados");
    }, 0);
});