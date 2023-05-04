import { RespuestaBDNotificacion } from "./alert.js"
// el btn_E es una variable global 
btn_E.addEventListener("click", () => {
  setTimeout(() => {
    console.log(localStorage.getItem("Estudiante"));
    const valor = localStorage.getItem("Estudiante");
    const valo = JSON.parse(valor);
    fetch("http://localhost:3000/Estudiante", {
      method: "post",
      body: JSON.stringify(valo)
    }).then(response => {
      RespuestaBDNotificacion(response.ok, "Los datos se han enviado correctamente", "ha habido un error en el envio de datos")
    });
    localStorage.removeItem("Estudiante");
  }, 0);
});
