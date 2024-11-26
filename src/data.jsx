import triviaImage from "./assets/img/trivia.jpg";
import textAnalizerImage from "./assets/img/textAnalizer.jpg";
import infoZooImage from "./assets/img/InfoZoo.jpg";
import infoZooChat from "./assets/img/InfoZooChat.png";


export const projectsData = [
  {
    title: "Trivia",
    subtitle: "Juego de la trivia",
    description:
      "Se trata de jugar eligiendo un tema de interés en el cuál debemos seleccionar las respuestas correctas para ser el ganador. Fue creado con HTML, CSS, Javascript y bootstrap version 4.6",
    image: triviaImage,
    
    link: "https://esteticahm.000webhostapp.com/",
  },

  {
    title: "Text Analizer",
    subtitle: "Analizador de Texto",
    description:
      "Cuenta cuantas palabras escribimos, caracteres en total, números, suma de números, esto lo hace al momento de ir escribiendo. Creado con HTML, CSS, Javascript, Node.Js, Git y Github",
    image: textAnalizerImage,
    link: "https://ross1966.github.io/DEV012-Analizador-Texto/",
  },

  {
    title: "Dataverse(InfoZoo)",
    subtitle: "Infozoo",
    description:
      "Muestra un conjunto de animales los cuales los podemos filtrar por el tipo de dieta y por su hábitat natural. Creado con HTML, CSS, Javascript, Node.Js ",
    image: infoZooImage,
    link: "https://ross1966.github.io/DEV012-dataverse-RosaMaIba/",
  },

  {
    title: "Dataverse(Chat)",
    subtitle: "DataverseChat",
    description:
      "Muestra el conjunto de animales que se pueden filtrar por tipo de dieta y ver la información de cada una de las tarjetas, utilizamos una Api para tener una charla con el animal elegido con IA. Creado con HTML, CSS, Javascript, Node.Js ",
    image: infoZooChat,
    link: "https://elegant-alfajores-cab67f.netlify.app/",
  },
];