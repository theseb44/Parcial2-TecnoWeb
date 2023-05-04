btn_Em.addEventListener("click",()=>{
    setTimeout(() => {
        console.log(localStorage.getItem("Empleado"));
   const valor=localStorage.getItem("Empleado");
      const valo=JSON.parse(valor);
  fetch("http://localhost:3000/Empleados",{
    method:"post",
    body:JSON.stringify(valo)
  });
  localStorage.removeItem("Empleados");
    }, 0);
});