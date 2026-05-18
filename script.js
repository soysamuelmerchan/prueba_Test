// REGISTRO
function registrar() {
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let password = document.getElementById("password").value;

  if (nombre === "" || correo === "" || password === "") {
    document.getElementById("mensaje").innerHTML =
      `<div class="alert alert-danger">
            Completa todos los campos
        </div>`;

    return;
  }

  let usuario = {
    nombre: nombre,
    correo: correo,
    password: password,
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));

  document.getElementById("mensaje").innerHTML =
    `<div class="alert alert-success">
        Registro exitoso
    </div>`;

  setTimeout(() => {
    window.location.href = "../HTML/LOGIN/login.html";
  }, 1500);
}

// LOGIN
function iniciarSesion() {
  let correo = document.getElementById("correoLogin").value;
  let password = document.getElementById("passwordLogin").value;

  let usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

  if (usuarioGuardado === null) {
    document.getElementById("mensajeLogin").innerHTML =
      `<div class="alert alert-danger">
            No existe una cuenta registrada
        </div>`;

    return;
  }

  if (
    correo === usuarioGuardado.correo &&
    password === usuarioGuardado.password
  ) {
    localStorage.setItem("sesionActiva", "true");

    window.location.href = "../PAGES/index.html";
  } else {
    document.getElementById("mensajeLogin").innerHTML =
      `<div class="alert alert-danger">
            Correo o contraseña incorrectos
        </div>`;
  }
}

function guardarModulo1() {
  //Preguntas de logica
  let p1 = parseInt(document.getElementsByName("p1")[0].value);
  let p2 = parseInt(document.getElementsByName("p2")[0].value);
  let p3 = parseInt(document.getElementsByName("p3")[0].value);

  localStorage.setItem("p1", p1);
  localStorage.setItem("p2", p2);
  localStorage.setItem("p3", p3);

  //Preguntas de creatividad
  let p4 = parseInt(document.getElementsByName("p4")[0].value);
  let p5 = parseInt(document.getElementsByName("p5")[0].value);
  let p6 = parseInt(document.getElementsByName("p6")[0].value);

  localStorage.setItem("p4", p4);
  localStorage.setItem("p5", p5);
  localStorage.setItem("p6", p6);

  //Preguntas sociales
  let p7 = parseInt(document.getElementsByName("p7")[0].value);
  let p8 = parseInt(document.getElementsByName("p8")[0].value);
  let p9 = parseInt(document.getElementsByName("p9")[0].value);

  localStorage.setItem("p7", p7);
  localStorage.setItem("p8", p8);
  localStorage.setItem("p9", p9);

  // Preguntas tecnicas
  let p10 = parseInt(document.getElementsByName("p10")[0].value);
  let p11 = parseInt(document.getElementsByName("p11")[0].value);
  let p12 = parseInt(document.getElementsByName("p12")[0].value);

  localStorage.setItem("p10", p10);
  localStorage.setItem("p11", p11);
  localStorage.setItem("p12", p12);

  // Preguntas de organizacion
  let p13 = parseInt(document.getElementsByName("p13")[0].value);
  let p14 = parseInt(document.getElementsByName("p14")[0].value);
  let p15 = parseInt(document.getElementsByName("p15")[0].value);

  localStorage.setItem("p13", p13);
  localStorage.setItem("p14", p14);
  localStorage.setItem("p15", p15);

  let respuestas = document.querySelectorAll("select");

  for (let i = 0; i < respuestas.length; i++) {
    if (respuestas[i].value === "") {
      document.getElementById("mensaje").innerHTML =
        "<div class='alert alert-warning'>Por favor responde todas las preguntas antes de continuar.</div>";
      setTimeout(function () {
        document.getElementById("mensaje").innerHTML = "";
      }, 3000);
      return;
    }
  }
  // ir a siguiente página
  window.location.href = "personalidad.html";
}

function guardarModulo2() {
  let respuestas = document.querySelectorAll("select");

  for (let i = 0; i < respuestas.length; i++) {
    if (respuestas[i].value === "") {
      document.getElementById("mensaje").innerHTML =
        "<div class='alert alert-warning'>Responde todas las preguntas.</div>";

      setTimeout(function () {
        document.getElementById("mensaje").innerHTML = "";
      }, 3000);

      return;
    }
  }

  let p16 = parseInt(document.getElementsByName("p16")[0].value);
  let p17 = parseInt(document.getElementsByName("p17")[0].value);
  let p18 = parseInt(document.getElementsByName("p18")[0].value);
  let p19 = parseInt(document.getElementsByName("p19")[0].value);
  let p20 = parseInt(document.getElementsByName("p20")[0].value);
  let p21 = parseInt(document.getElementsByName("p21")[0].value);
  let p22 = parseInt(document.getElementsByName("p22")[0].value);
  let p23 = parseInt(document.getElementsByName("p23")[0].value);
  let p24 = parseInt(document.getElementsByName("p24")[0].value);
  let p25 = parseInt(document.getElementsByName("p25")[0].value);

  localStorage.setItem("p16", p16);
  localStorage.setItem("p17", p17);
  localStorage.setItem("p18", p18);
  localStorage.setItem("p19", p19);
  localStorage.setItem("p20", p20);
  localStorage.setItem("p21", p21);
  localStorage.setItem("p22", p22);
  localStorage.setItem("p23", p23);
  localStorage.setItem("p24", p24);
  localStorage.setItem("p25", p25);

  window.location.href = "Resultado.html";
}

//-----------------------------------------------------------------------------------------------//

//Funcion para la lista de carreras

function agregarCarrera(lista, nueva) {
  let existe = lista.some((c) => c.nombre === nueva.nombre);

  if (!existe) {
    lista.push(nueva);
  }
}

function calcularResultadoFinal() {
  // Lectura de datos de todos los modulos
  let p1 = parseInt(localStorage.getItem("p1"));
  let p2 = parseInt(localStorage.getItem("p2"));
  let p3 = parseInt(localStorage.getItem("p3"));
  let p4 = parseInt(localStorage.getItem("p4"));
  let p5 = parseInt(localStorage.getItem("p5"));
  let p6 = parseInt(localStorage.getItem("p6"));
  let p7 = parseInt(localStorage.getItem("p7"));
  let p8 = parseInt(localStorage.getItem("p8"));
  let p9 = parseInt(localStorage.getItem("p9"));
  let p10 = parseInt(localStorage.getItem("p10"));
  let p11 = parseInt(localStorage.getItem("p11"));
  let p12 = parseInt(localStorage.getItem("p12"));
  let p13 = parseInt(localStorage.getItem("p13"));
  let p14 = parseInt(localStorage.getItem("p14"));
  let p15 = parseInt(localStorage.getItem("p15"));

  let p16 = parseInt(localStorage.getItem("p16"));
  let p17 = parseInt(localStorage.getItem("p17"));
  let p18 = parseInt(localStorage.getItem("p18"));
  let p19 = parseInt(localStorage.getItem("p19"));
  let p20 = parseInt(localStorage.getItem("p20"));
  let p21 = parseInt(localStorage.getItem("p21"));
  let p22 = parseInt(localStorage.getItem("p22"));
  let p23 = parseInt(localStorage.getItem("p23"));
  let p24 = parseInt(localStorage.getItem("p24"));
  let p25 = parseInt(localStorage.getItem("p25"));

  // -------------------------------------------------------------------------------------------//

  // Habilidades
  let logica = (p1 + p2 + p3) / 3;
  let creatividad = (p4 + p5 + p6) / 3;
  let social = (p7 + p8 + p9) / 3;
  let tecnica = (p10 + p11 + p12) / 3;
  let organizacion = (p13 + p14 + p15) / 3;

  // Personalidad
  let liderazgo = (p20 + p22) / 2;
  let adaptabilidad = (p16 + p21) / 2;
  let trabajoEquipo = (p18 + p24) / 2;
  let planificacion = (p17 + p25) / 2;
  let independencia = p23;

  // Perfil dominante
  let mayor = Math.max(logica, creatividad, social, tecnica, organizacion);

  //-----------------------------------------------------------------------------------------------//

  // Actualizacion: implemento un array para que la logica soporte si hay empate entre dos areas
  let perfiles = [];
  let carreras = "";
  let justificacion = "";

  if (logica === mayor) perfiles.push("Lógico / Analítico");
  if (creatividad === mayor) perfiles.push("Creativo");
  if (social === mayor) perfiles.push("Social / Comunicación");
  if (tecnica === mayor) perfiles.push("Técnico / Tecnológico");
  if (organizacion === mayor) perfiles.push("Organización / Gestión");

  let perfil =
    perfiles.length > 0 ? perfiles.join(" / ") : "Perfil no definido";

  //-------------------------------------------------------------------------------------------//

  //Implemento objetos para la lista de carreras, asi no se repiten en caso de que haya una combinacion de habilidades

  let listaCarreras = [];

  // Logica
  if (perfiles.includes("Lógico / Analítico")) {
    agregarCarrera(listaCarreras, {
      nombre: "Ingenieria",
      descripcion: "Resolución de problemas complejos",
      prioridad: logica,
    });

    agregarCarrera(listaCarreras, {
      nombre: "Matematicas",
      descripcion: "Ciencia formal que estudia propiedades y relaciones",
      prioridad: logica,
    });

    agregarCarrera(listaCarreras, {
      nombre: "Programación",
      descripcion: "Pensamiento estructurado",
      prioridad: logica,
    });
  }

  // Creatividad
  if (perfiles.includes("Creativo")) {
    agregarCarrera(listaCarreras, {
      nombre: "Diseño gráfico",
      descripcion: "Combina creatividad con comunicación visual",
      prioridad: creatividad,
    });

    agregarCarrera(listaCarreras, {
      nombre: "Publicidad",
      descripcion:
        "Permite generar ideas innovadoras para conectar con personas",
      prioridad: creatividad,
    });

    agregarCarrera(listaCarreras, {
      nombre: "Producción audiovisual",
      descripcion: "Ideal si te gusta crear contenido visual",
      prioridad: creatividad,
    });
  }

  // Social
  if (perfiles.includes("Social / Comunicación")) {
    agregarCarrera(listaCarreras, {
      nombre: "Psicología",
      descripcion: "Enfocada en comprender y ayudar a las personas",
      prioridad: social,
    });

    agregarCarrera(listaCarreras, {
      nombre: "Docencia",
      descripcion: "Ideal si disfrutas enseñar y comunicar ideas",
      prioridad: social,
    });

    agregarCarrera(listaCarreras, {
      nombre: "Trabajo social",
      descripcion: "Permite impactar directamente en la sociedad",
      prioridad: social,
    });
  }

  // Tecnica
  if (perfiles.includes("Técnico / Tecnológico")) {
    agregarCarrera(listaCarreras, {
      nombre: "Ingeniería de sistemas",
      descripcion: "Orientada a la tecnología y resolución técnica",
      prioridad: tecnica,
    });

    agregarCarrera(listaCarreras, {
      nombre: "Electrónica",
      descripcion: "Ideal si te interesa cómo funcionan los dispositivos",
      prioridad: tecnica,
    });

    agregarCarrera(listaCarreras, {
      nombre: "Desarrollo de software",
      descripcion: "Permite crear soluciones tecnológicas",
      prioridad: tecnica,
    });
  }

  // Organizacion
  if (perfiles.includes("Organización / Gestión")) {
    agregarCarrera(listaCarreras, {
      nombre: "Administración",
      descripcion: "Ideal para gestionar recursos y equipos",
      prioridad: organizacion,
    });

    agregarCarrera(listaCarreras, {
      nombre: "Negocios",
      descripcion: "Enfocado en toma de decisiones estratégicas",
      prioridad: organizacion,
    });

    agregarCarrera(listaCarreras, {
      nombre: "Gestión de proyectos",
      descripcion: "Combina planificación y liderazgo",
      prioridad: organizacion,
    });

    justificacion +=
      "Tu perfil evidencia habilidades de organización y planificación, lo que puede facilitar tu desarrollo en áreas donde la gestión y la toma de decisiones son clave.";
  }
  //Ordena la lista de carreras y  las limita
  listaCarreras.sort((a, b) => b.prioridad - a.prioridad);
  listaCarreras = listaCarreras.slice(0, 5);

  //Muestra con estrucrtura html
  listaCarreras.forEach((c) => {
    carreras += `<strong>${c.nombre}:</strong> ${c.descripcion}<br>`;
  });

  //------------------------------------------------------------------------------------------------------------------------//

  //Justificaciones

  if (perfiles.includes("Lógico / Analítico")) {
    justificacion +=
      "Tienes una forma de pensar estructurada y orientada a la resolución de problemas. ";
  }

  if (perfiles.includes("Creativo")) {
    justificacion +=
      "También se nota una inclinación hacia la creatividad y la generación de ideas. ";
  }

  if (perfiles.includes("Social / Comunicación")) {
    justificacion +=
      "Además, cuentas con habilidades para interactuar y comunicarte con otras personas. ";
  }

  if (perfiles.includes("Técnico / Tecnológico")) {
    justificacion +=
      "Se evidencia interés por la tecnología y la aplicación práctica del conocimiento. ";
  }

  if (perfiles.includes("Organización / Gestión")) {
    justificacion +=
      "También tienes habilidades para planificar, organizar y gestionar actividades o proyectos. ";
  }

  justificacion +=
    "Estas características, en conjunto, pueden ayudarte a desenvolverte mejor en entornos que se alineen con tu forma de pensar y tus intereses.";

  // Analisis
  let analisis = "";

  // Lógica + planificación
  if (
    perfiles.includes("Lógico / Analítico") &&
    planificacion > trabajoEquipo
  ) {
    analisis +=
      "Se observa una marcada capacidad de análisis y organización, lo que sugiere que el estudiante tiende a abordar los problemas de manera estructurada, evaluando cada paso antes de tomar decisiones.<br><br>";
  }

  // Social + trabajo en equipo
  if (
    perfiles.includes("Social / Comunicación") &&
    trabajoEquipo > independencia
  ) {
    analisis +=
      "El perfil evidencia una inclinación hacia la interacción social, destacando habilidades comunicativas y una buena disposición para el trabajo en equipo en distintos contextos.<br><br>";
  }

  // Creatividad + adaptabilidad
  if (perfiles.includes("Creativo") && adaptabilidad > planificacion) {
    analisis +=
      "Se identifica una tendencia hacia el pensamiento creativo, acompañada de una adecuada capacidad de adaptación, lo que facilita la generación de ideas y la respuesta ante cambios en el entorno.<br><br>";
  }

  // Técnica + lógica
  if (perfiles.includes("Técnico / Tecnológico") && logica > social) {
    analisis +=
      "El estudiante presenta un enfoque orientado a la resolución técnica de problemas, apoyado en el razonamiento lógico y la comprensión de procesos estructurados.<br><br>";
  }

  // Liderazgo
  if (liderazgo <= 4) {
    analisis +=
      "No se evidencian tendencias marcadas hacia el liderazgo en este momento.<br><br>";
  } else if (liderazgo > 4 && liderazgo <= 7) {
    analisis +=
      "Se observan algunas características de liderazgo que podrían desarrollarse con la práctica.<br><br>";
  } else if (liderazgo > 7) {
    analisis +=
      "Se evidencian habilidades de liderazgo, con capacidad para tomar decisiones y coordinar grupos.<br><br>";
  }

  // Independencia
  else if (independencia > trabajoEquipo && independencia > 3) {
    analisis +=
      "También se observa una preferencia por el trabajo autónomo, lo cual puede favorecer entornos donde se requiera iniciativa individual y toma de decisiones independiente.<br><br>";
  }

  if (analisis === "") {
    analisis =
      "Tus respuestas muestran un perfil equilibrado, sin una tendencia dominante clara, lo que indica que puedes adaptarte a diferentes tipos de entornos y actividades.<br><br>";
  }

  //Conclusion
  let conclusion =
    "Con base en tus respuestas, se puede ver una tendencia clara en tus habilidades y en la forma en la que te desenvuelves. Este resultado no define completamente lo que debes elegir, pero sí te da una idea más clara de hacia dónde podrías sentirte más cómodo y motivado.";

  if (perfiles.length > 1) {
    conclusion +=
      " Además, tu perfil muestra una combinación de habilidades, lo que puede abrirte puertas en diferentes áreas.";
  }

  conclusion +=
    " Lo importante ahora es que explores estas opciones, investigues y te permitas descubrir qué realmente te gusta.";

  //-------------------------------------------------------------------------------------------------------------------------------------------------//

  //En caso de que cada pregunta se conteste con 1:
  let promedioGeneral =
    (logica + creatividad + social + tecnica + organizacion) / 5;

  if (promedioGeneral <= 2) {
    analisis =
      "Tus respuestas indican que no hay una inclinación clara hacia ninguna área en este momento. Esto puede significar que aún estás explorando tus intereses o que ninguna de las opciones planteadas se ajusta completamente a ti.<br><br>";

    carreras =
      "En este caso, se recomienda explorar diferentes áreas, probar nuevas actividades y reflexionar sobre lo que realmente te interesa antes de tomar una decisión.";

    justificacion =
      "No se identifica una tendencia dominante, lo cual es completamente válido en etapas de exploración personal.";

    perfil = "Perfil en exploración";

    conclusion =
      "Este resultado no indica una falta de habilidades, sino una etapa de descubrimiento. Tómalo como una oportunidad para experimentar, conocer nuevas áreas y construir poco a poco tu camino.";
  }

  document.getElementById("perfil").innerHTML =
    "<strong>" + perfil + "</strong>";
  document.getElementById("analisis").innerHTML = analisis;
  document.getElementById("carreras").innerHTML = carreras;
  document.getElementById("justificacion").innerHTML = justificacion;
  document.getElementById("conclusion").innerHTML = conclusion;
}
function cerrarSesion() {
  localStorage.removeItem("sesionActiva");

  window.location.href = "Login.html";
}
