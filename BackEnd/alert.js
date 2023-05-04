

export function RespuestaBDNotificacion(booleano, textTrue, textFalse) {


    let alerta = document.createElement("div");
    alerta.className = "alert alert-success";
    alerta.setAttribute("role", "alert");
    alerta.id = "alerta";
  
    if (booleano) {
  
      alerta.innerText = textTrue;
      alerta.classList.add("alert-success");
  
    } else {
  
      alerta.innerText = textFalse;
      alerta.classList.add("alert-failure");
    }
    document.body.appendChild(alerta);
    window.scrollTo(0, 0);
    setTimeout(() => {
      document.body.removeChild(alerta)
    }, 3000);
  }