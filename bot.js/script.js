// script.js

const respuestas = [
  {
    claves: ["hola", "buenas", "buenos dias", "buenas tardes", "buenas noches"],
    respuesta: "¡Hola! 🌿 Soy tu chatbot ambiental sobre la contaminación en Salaverry. ¿Qué deseas saber?"
  },
  {
    claves: ["como estas", "como te encuentras"],
    respuesta: "¡Muy bien! 😊 Gracias por preguntar. Estoy listo para ayudarte."
  },
  {
    claves: ["que es la contaminacion", "que es contaminacion", "q es la contaminacion"],
    respuesta: "La contaminación es la presencia de sustancias dañinas en el ambiente."
  },
  {
    claves: ["que es la contaminacion en salaverry", "contaminacion en salaverry"],
    respuesta: "Es el deterioro del ambiente causado por residuos y actividades humanas en Salaverry."
  },
  {
    claves: ["donde queda salaverry", "ubicacion de salaverry"],
    respuesta: "Salaverry es un distrito y puerto ubicado en la región La Libertad, Perú."
  },
  {
    claves: ["causa de contaminacion", "causas de contaminacion en salaverry"],
    respuesta: "Los residuos sólidos, algunas actividades portuarias y el mal manejo de desechos pueden contribuir a la contaminación."
  },
  {
    claves: ["residuos solidos"],
    respuesta: "Son desechos como plásticos, cartones, papeles y restos de comida."
  },
  {
    claves: ["contaminacion del agua"],
    respuesta: "Es la alteración del agua por sustancias perjudiciales."
  },
  {
    claves: ["contaminacion del aire"],
    respuesta: "Es la presencia de gases o partículas dañinas en el aire."
  },
  {
    claves: ["contaminacion del suelo"],
    respuesta: "Es la degradación del suelo por residuos y sustancias tóxicas."
  },
  {
    claves: ["afecta a las personas", "como afecta la contaminacion a las personas"],
    respuesta: "Puede provocar enfermedades y afectar la calidad de vida."
  },
  {
    claves: ["afecta a los animales"],
    respuesta: "Puede causar enfermedades y alterar sus hábitats."
  },
  {
    claves: ["afecta a los peces"],
    respuesta: "Reduce la calidad del agua y pone en riesgo su supervivencia."
  },
  {
    claves: ["que es el reciclaje", "reciclaje"],
    respuesta: "Es el proceso de reutilizar materiales para reducir residuos."
  },
  {
    claves: ["por que es importante reciclar"],
    respuesta: "Porque ayuda a disminuir la contaminación."
  },
  {
    claves: ["como puedo ayudar"],
    respuesta: "No arrojes basura y participa en campañas ambientales."
  },
  {
    claves: ["tres erres"],
    respuesta: "Las tres erres son: Reducir, Reutilizar y Reciclar."
  },
  {
    claves: ["ecosistema"],
    respuesta: "Es el conjunto de seres vivos y su entorno."
  },
  {
    claves: ["educacion ambiental"],
    respuesta: "Es enseñar a cuidar y proteger el ambiente."
  },
  {
    claves: ["calentamiento global"],
    respuesta: "Es el aumento de la temperatura del planeta."
  },
  {
    claves: ["cambio climatico"],
    respuesta: "Son cambios prolongados en el clima de la Tierra."
  },
  {
    claves: ["biodiversidad"],
    respuesta: "Es la variedad de seres vivos existentes."
  },
  {
    claves: ["desechos toxicos"],
    respuesta: "Son residuos peligrosos para la salud y el ambiente."
  },
  {
    claves: ["microplasticos"],
    respuesta: "Son pequeñas partículas de plástico."
  },
  {
    claves: ["basura al mar"],
    respuesta: "No debemos botar basura al mar porque afecta a la vida marina."
  },
  {
    claves: ["contaminacion marina"],
    respuesta: "Es la contaminación de océanos y mares."
  },
  {
    claves: ["afecta a los niños"],
    respuesta: "Puede causar problemas respiratorios y otras enfermedades."
  },
  {
    claves: ["enfermedades puede causar"],
    respuesta: "Problemas respiratorios, alergias y otras afecciones."
  },
  {
    claves: ["desarrollo sostenible"],
    respuesta: "Es satisfacer las necesidades actuales sin perjudicar a las futuras generaciones."
  },
  {
    claves: ["municipalidades"],
    respuesta: "Promueven campañas y gestionan residuos."
  },
  {
    claves: ["reforestacion"],
    respuesta: "Es plantar árboles para recuperar ecosistemas."
  },
  {
    claves: ["importancia de los arboles"],
    respuesta: "Producen oxígeno y ayudan a regular el clima."
  },
  {
    claves: ["campaña ambiental"],
    respuesta: "Es una actividad para promover el cuidado ambiental."
  },
  {
    claves: ["como evitar la contaminacion"],
    respuesta: "Reduciendo residuos y actuando responsablemente."
  },
  {
    claves: ["botellas plasticas"],
    respuesta: "Puedes reutilizarlas o reciclarlas."
  },
  {
    claves: ["basura organica"],
    respuesta: "Son residuos biodegradables como restos de comida."
  },
  {
    claves: ["basura inorganica"],
    respuesta: "Son residuos como plástico, vidrio y metal."
  },
  {
    claves: ["relleno sanitario"],
    respuesta: "Es un lugar destinado a la disposición de residuos."
  },
  {
    claves: ["pesca sostenible"],
    respuesta: "Es pescar sin afectar las poblaciones futuras."
  },
  {
    claves: ["afecta al turismo"],
    respuesta: "La contaminación reduce el atractivo turístico."
  },
  {
    claves: ["conciencia ambiental"],
    respuesta: "Es comprender la importancia de cuidar el ambiente."
  },
  {
    claves: ["quien debe cuidar el ambiente"],
    respuesta: "Todos somos responsables."
  },
  {
    claves: ["contaminacion visual"],
    respuesta: "Es el exceso de elementos que afectan el paisaje."
  },
  {
    claves: ["contaminacion sonora"],
    respuesta: "Es el exceso de ruido perjudicial."
  },
  {
    claves: ["compostaje"],
    respuesta: "Es transformar residuos orgánicos en abono."
  },
  {
    claves: ["playa limpia"],
    respuesta: "Es una playa libre de residuos y contaminación."
  },
  {
    claves: ["cuidar las playas"],
    respuesta: "Porque son ecosistemas valiosos."
  },
  {
    claves: ["reducir el uso de plastico"],
    respuesta: "Usando bolsas y envases reutilizables."
  },
  {
    claves: ["voluntariado ambiental"],
    respuesta: "Es participar en acciones de protección ambiental."
  },
  {
    claves: ["que pueden hacer los estudiantes"],
    respuesta: "Promover buenas prácticas ambientales."
  },
  {
    claves: ["futuro si no cuidamos el ambiente"],
    respuesta: "Habrá más contaminación y problemas de salud."
  },
  {
    claves: ["proteger salaverry"],
    respuesta: "Debemos proteger Salaverry para preservar la salud y el bienestar de la comunidad."
  },
  {
    claves: ["gracias"],
    respuesta: "¡De nada! 😊 Espero haberte ayudado."
  },
  {
    claves: ["adios", "chau", "hasta luego"],
    respuesta: "¡Hasta luego! 🌎 Recuerda cuidar el medio ambiente."
  }
];

const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function limpiarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[¿?¡!.,]/g, "")
    .trim();
}

function agregarMensaje(texto, clase) {
  const mensaje = document.createElement("div");
  mensaje.classList.add("mensaje", clase);
  mensaje.textContent = texto;
  chatBox.appendChild(mensaje);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function responder() {
  const pregunta = userInput.value.trim();

  if (pregunta === "") return;

  agregarMensaje(pregunta, "usuario");

  const texto = limpiarTexto(pregunta);

  let respuestaBot =
    "Lo siento, aún no tengo una respuesta para esa pregunta. Intenta formularla de otra manera. 🌿";

  for (const item of respuestas) {
    for (const clave of item.claves) {
      if (texto.includes(clave)) {
        respuestaBot = item.respuesta;
        break;
      }
    }

    if (respuestaBot !==
      "Lo siento, aún no tengo una respuesta para esa pregunta. Intenta formularla de otra manera. 🌿") {
      break;
    }
  }

  setTimeout(() => {
    agregarMensaje(respuestaBot, "bot");
  }, 500);

  userInput.value = "";
}

sendBtn.addEventListener("click", responder);

userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    responder();
  }
});