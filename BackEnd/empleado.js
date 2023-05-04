import {RespuestaBDNotificacion} from "./alert.js"

btn_Em.addEventListener("click", () => {
  setTimeout(() => {
    console.log(localStorage.getItem("Empleado"));
    const valor = localStorage.getItem("Empleado");
    const valo = JSON.parse(valor);
    fetch("http://localhost:3000/Empleados", {
      method: "post",
      body: JSON.stringify(valo)
    }).then(response => {
      RespuestaBDNotificacion(response.ok, "Los datos se han enviado correctamente", "ha habido un error en el envio de datos" )
    })
    localStorage.removeItem("Empleado");
  }, 0);
});
