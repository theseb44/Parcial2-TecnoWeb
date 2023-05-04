
// el btn_E es una variable global 
btn_E.addEventListener("click",()=>{
    setTimeout(() => {
        console.log(localStorage.getItem("Estudiante"));
   const valor=localStorage.getItem("Estudiante");
      const valo=JSON.parse(valor);
  fetch("http://localhost:3000/Estudiante",{
    method:"post",
    body:JSON.stringify(valo)
  }).then(response => {
    if (response.ok) {
      alert("Los datos se han enviado correctamente");
    } else {
      alert("Ha habido un error al enviar los datos");
    }
  });
  localStorage.removeItem("Estudiante");
    }, 0);
});











