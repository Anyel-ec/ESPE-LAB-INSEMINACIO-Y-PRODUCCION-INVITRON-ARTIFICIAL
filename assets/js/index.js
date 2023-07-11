
function toggleMenu() {
    var menu = document.getElementById("dropdown-content");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
    menuAbierto = !menuAbierto;
  }

  // Animación de opacidad del logo
  const logo = document.querySelector("#ec");
  const pulse = function() {
    logo.style.opacity = logo.style.opacity === "1" ? "0.5" : "1";
  };
  setInterval(pulse, 1000);

  // Cambio de modo oscuro a claro
  var darkModeBtn = document.getElementById("dark-mode-btn");
  var icon = document.getElementById("icon");
  
  var headerLinks = document.querySelectorAll("#navbar ul li a");
// Cambio de modo oscuro a claro
var elements = [ "why-us",  "container", "events", 
"header", "doctors", "mision2", "mision3", "mision1", 
"faq", "faq1", "faq2", "faq3", "faq4", "faq5", 
"testimonials2","a1","a2", "a3","a4","a5", "b1", "clients", "b2"
, "b7", "b6", "b3", "b4", "b5", "b8", "b9", "b10", "b11", "c1"];


  darkModeBtn.addEventListener("click", function() {
    headerLinks.forEach(function(link) {
      
      
      
    });

    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
    var testimonialItems = document.querySelectorAll(".testimonial-item");
  testimonialItems.forEach(function(testimonial) {
    testimonial.classList.toggle("bg-dark");
    testimonial.classList.toggle("text-light");
  });
  });
  var heroSection = document.getElementById("hero");
  darkModeBtn.addEventListener("click", function() {
    elements.forEach(function(elementId) {
      var element = document.getElementById(elementId);
      element.classList.toggle("bg-dark");
      element.classList.toggle("text-light");
    });
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
  });

  darkModeBtn.addEventListener("click", function() {
   
      var dropdownLinks = document.querySelectorAll(".dropdown ul li a");
  dropdownLinks.forEach(function(link) {
    link.classList.toggle("text-dark");
  });
  
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
  });







  //




  var menuAbierto = false;
  function cambiarIdioma(idioma) {
    var elementos = {
      "texto-servicio": ["Servicio", "Service"],
      "texto-portafolio": ["Portafolio", "Portfolio"],
      "texto-historia": ["Historia", "History"],
      "texto-contacto": ["Contacto", "Contact"],
      "texto-blog": ["Blog", "Blog"],
      "animated-text": ["Extremo a extremo siendo digital", "End to end being digital"],
      "boton": ["Comenzar", "Start"],
      "servicios": ["Servicios", "Services"],
      "a1": ["Excelencia de Extremo a Extremo.", "Excellence from End to End."],
      "a2": ["Las estrategias de marketing digital que utilizan herramientas de Tecnologías de la Información son fundamentales para el éxito de cualquier negocio en la actualidad. Un Community Manager capacitado en estas técnicas puede ayudar a mejorar la presencia en línea y a llegar a un público más amplio", "Digital marketing strategies using Information Technology tools are critical to the success of any business today. A Community Manager trained in these techniques can help improve online presence and reach a wider audience."],
      "a3": ["Soporte de TI", "IT Support"],
      "a4": ["Brindamos soporte a los usuarios en Tecnologías de la Información, en áreas como redes de comunicación, interconexión de redes, sistemas operativos, administración de servicios y seguridad de la información.", "We provide support to users in Information Technology, in areas such as communication networks, network interconnection, operating systems, service administration and information security."],
      "a5": ["Analista de Datos", "Data Analyst"],
      "a6": ["Realizamos análisis de datos de gran volumen, los procesamos y convertimos en información útil para la toma de decisiones. Contamos con herramientas especializadas, como las de IBM, Excel, lenguajes de consulta y programación, para llevar a cabo este proceso de manera eficiente y efectiva.", "We perform high-volume data analysis, process it and convert it into useful information for decision making. We have specialized tools, such as IBM, Excel, query languages and programming, to carry out this process efficiently and effectively."],
      "a7": ["CERTIFICADOS", "CERTIFICATES"],
      "a8": ["PROFESIONALES", "PROFESSIONALS"],
      "a9": ["Tecnologías de la Información y Comunicación", "Information and Communication Technologies"],
      "a10": ["Certificado Profesional de Analista en Ciberseguridad", "Cybersecurity Analyst Professional Certification"],
      "a11": ["Analista en Datos de IBM", "IBM Data Analyst"],
      "a12": ["Certificado Profesional de Analista de Datos", "Data Analyst Professional Certification"],
      "a13" : ["Especilización de Computer Communications", "Computer Communications Specialization"],
      "a14" : ["Certificado Profesional de Soporte en TI", "IT Support Professional Certificate"],
      "a15" : ["Especialización Cyberseguridad de Cisco", "Cisco Cybersecurity Specialization"],
      "a16" : ["Excel Para Empresas", "Excel For Business"],
      "a17" : ["Excel Empresarial nivel avanzado", "Business Excel advanced level"],
      "a18" : ["Historia", "History"],
      "a19" : ["Estoy incursionando en el mundo de la tecnología.", "I am getting into the world of technology."],
      "a20" : ["Pasantías en asistencia administrativa escolar", "Internships in school administrative assistance"],
      "a16" : ["Excel Para Empresas", "Excel For Business"],
      "a17" : ["Excel Empresarial nivel avanzado", "Business Excel advanced level"],
      "a18" : ["Historia", "History"],
      "a19" : ["Estoy incursionando en el mundo de la tecnología.", "I am getting into the world of technology."],
      "a20" : ["Pasantías en asistencia administrativa escolar", "Internships in school administrative assistance"],
      "a21"  :["Brindamos asesoría a docentes y administradores de centros educativos en relación a los proyectos de la institución, informamos sobre el presupuesto y brindamos soporte técnico.", "We provide advice to teachers and school administrators regarding the institution's projects, inform about the budget and provide technical support."],
      "a22" : ["Febrero 2019", "February 2019"],
      "a23" : ["Mejor egresado en Administración de Sistemas", "Best graduate in Systems Administration"],
      "a24" : ["Mérito académico en Bachillerato Técnico en Servicios de Administración de Sistemas por obtener la puntuación más alta en la promoción 2018-2019    ", 
      "Academic merit in Baccalaureate Technical in System Administration Services for obtaining the highest score in the 2018-2019 promotion."],
      "a25" : ["Creador de Contenido y Streaming", "Content Creator and Streaming"],
      "a26" : ["Creador de contenido en plataformas digitales como YouTube, Kwai, TikTok e Instagram, con experiencia en monetización y SEO a través del canal 'Anyel EC'", 
      "Content creator on digital platforms such as YouTube, Kwai, TikTok and Instagram, with experience in monetization and SEO through the channel 'Anyel EC'."],
      "a27" : ["Administrador de redes sociales, encargado de la gestión de la FansPage y cuenta de Instagram de un prestigioso supermercado, con experiencia en la creación de contenido publicitario para dicha empresa.","Social media administrator, in charge of managing the FansPage and Instagram account of a prestigious supermarket, with experience in creating advertising content for that company."],
      "a28" : ["Redes Sociales", "Social Media"],
      "espe" : ["Estudiante de Ingeniería en Tecnologías de la Información", "Information Technology Engineering Student"],
      "a29" : ["Que tengas un excelente día.", "Have a wonderful day."],
      "a30" : ["Política de privacidad", "Privacy Policy"],
      "a31" : ["Terminos de usuario", "User terms and conditions"],
      "a32" : ["Certificado Profesional", "Professional Certificate"],
      "a33" : ["Soporte de Tecnologías de la Información de Google", "Google IT Support"],
      "a34" : ["Aquellos que obtienen el Certificado profesional de soporte de TI de Google tienen completó cinco cursos, desarrollados por Google, que incluyen prácticas, evaluaciones basadas en la práctica y están diseñadas para prepararlos para roles de nivel de entrada en soporte de TI. Son competentes en fundamentos habilidades, incluyendo solución de problemas y servicio al cliente, trabajo en red, sistemas operativos, administración de sistemas y seguridad.",     
      "Those who earn the Google IT Support Professional Certificate have completed five courses, developed by Google, that include hands-on, practice-based assessments and are designed to prepare them for entry-level roles in IT support. They are proficient in fundamental skills, including troubleshooting and customer service, networking, operating systems, systems administration and security."],
      "a35" : ["Certificado Profesional", "Professional Certificate"],
      "a36": ["Analista en Datos de IBM", "IBM Data Analyst"],
      "a37": ["En esta especialización, los alumnos desarrollaron y perfeccionaron habilidades esenciales en conceptos y principios fundamentales de las redes informáticas, aplicar los teoría de redes y principios de diseño, verificar su comprensión, y construir una base sólida para crear innovaciones en la actualidad Internet. Sienta las bases de arquitecturas de red, diseño de protocolos principios y habilidades de programación TCP/IP, que son necesarios para tomar cursos más avanzados en estudios de posgrado y/o capacitación técnica en La industria. La especialización también cubrió redes básicas conocimiento y comprensión profunda del funcionamiento interno de Redes informáticas y su evolución. Los alumnos completaron todos los evaluaciones requeridas para aplicar sus nuevos conocimientos y habilidades", 
          "In this specialization, students develop and hone essential skills in fundamental concepts and principles of computer networking, apply networking theory and design principles, verify their understanding, and build a solid foundation for creating innovations in today's Internet. It lays the foundation of network architectures, protocol design principles and TCP/IP programming skills, which are necessary to take more advanced courses in graduate studies and/or technical training in industry. The specialization also covered basic networking knowledge and in-depth understanding of the inner workings of computer networks and their evolution. Students completed all of the assessments required to apply their new knowledge and skills."],
      "a38": ["Especializacion", "Specialization"],
      "a39": ["En esta especialización, los alumnos desarrollaron y perfeccionaron habilidades esenciales en conceptos y principios fundamentales de las redes informáticas, aplicar los teoría de redes y principios de diseño, verificar su comprensión, y construir una base sólida para crear innovaciones en la actualidad Internet. Sienta las bases de arquitecturas de red, diseño de protocolos principios y habilidades de programación TCP/IP, que son necesarios para tomar cursos más avanzados en estudios de posgrado y/o capacitación técnica en La industria. La especialización también cubrió redes básicas conocimiento y comprensión profunda del funcionamiento interno de Redes informáticas y su evolución. Los alumnos completaron todos los evaluaciones requeridas para aplicar sus nuevos conocimientos y habilidades",     
      "In this specialization, the students developed and perfected essential skills in fundamental concepts and principles of computer networks, apply the network theory and design principles, verify their understanding, and build a solid foundation for creating innovations on today's Internet. Lay the foundation of network architectures, protocol design, TCP/IP programming principles and skills. TCP/IP programming principles and skills, which are necessary to take more advanced courses in graduate more advanced coursework in graduate studies and/or technical training in industry. The specialization also covered basic networking in-depth knowledge and understanding of the inner workings of computer networks and their evolution. Students completed all of the required evaluations required to apply their new knowledge and skills."],
      "a40": ["Programa de Cisco Networking Academy.", "Cisco Networking Academy Program."],
      "a41": ["Entienden las técnicas para monitorear y proteger la red, incluidos los firewalls, la seguridad en la nube y la criptografía, están familiarizados con las alertas de seguridad y la gobernanza, y tienen habilidades para realizar evaluaciones de vulnerabilidad de la red y crear un plan de gestión de riesgos, incluidas las investigaciones forenses y la planificación de respuesta a incidentes.",
       "They understand techniques to monitor and protect the network, including firewalls, cloud security and cryptography, are familiar with security alerts and governance, and have skills to perform network vulnerability assessments and create a risk management plan, including forensic investigations and incident response planning."],
      "a42": ["Excel Para Empresas", "Excel For Business"],
      "a43": ["Capacitacion brindada por el Instituto Superior Tecnológico Tsáchila", 
      "Training provided by Instituto Superior Tecnológico Tsáchila"],
      "a44": ["Análisis de información en Excel 2019, con experiencia en el manejo de aplicaciones y fórmulas específicas para presentar información de manera clara y efectiva   ", 
      "Analysis of information in Excel 2019, with experience in handling specific applications and formulas to present information clearly and effectively."],
      "a45" : ["Certificado Profesional", "Professional Certificate"],
      "a46" : ["En este Certificado Profesional, los alumnos desarrollaron y perfeccionaron conocimientos y habilidades para ingresar a la fuerza laboral dinámica de seguridad cibernética de hoy. Los alumnos desarrollaron conocimientos sobre las herramientas de análisis de ciberseguridad, que incluyen protección de Datos; protección de punto final; SIEM; y sistemas y red fundamentos; conocimientos adquiridos sobre cumplimiento clave y amenazas temas de inteligencia importantes en el panorama actual de ciberseguridad; ganado Habilidades para respuesta a incidentes y análisis forense. El conocimiento del aprendiz y las habilidades se probaron a través de múltiples evaluaciones a lo largo del cursos, un estudio de caso de incumplimiento del mundo real y varias prácticas en virtual laboratorios El alumno también logró una calificación aprobatoria en una evaluación final. curso que cubre todo el contenido de los siete cursos anteriores.",   
      "In this Professional Certificate, students developed and honed their knowledge and skills to enter today's dynamic knowledge and skills to enter today's dynamic cybersecurity workforce. Students developed knowledge of cybersecurity analysis tools, including. Data protection; end-point protection; SIEM; and systems and network fundamentals; knowledge gained about key compliance and threat intelligence topics important in today's cybersecurity landscape; gained Incident response and forensic analysis skills. The trainee's knowledge and skills were tested through multiple evaluations throughout the coursework, a real-world breach case study, and several hands-on virtual The trainee also achieved a passing grade on a final assessment. This course covers all the content of the previous seven courses."],  "a32" : ["Certificado Profesional", "Professional Certificate"],
      "a50" : ["Cerrar", "Close"],
      "a51" : ["Cerrar", "Close"],
      "a52" : ["Cerrar", "Close"],
      "a53" : ["Cerrar", "Close"],
      "a54" : ["Cerrar", "Close"],
      "a55" : ["Cerrar", "Close"]
  
    };
    
    var idiomaIndex = idioma === "espanol" ? 0 : 1;
    var dropdownButton = document.getElementById("dropdownButton");
    var flagIcon = document.getElementById("flagIcon");
  
    Object.keys(elementos).forEach(function(elementoId) {
      var elemento = document.getElementById(elementoId);
      elemento.textContent = elementos[elementoId][idiomaIndex];
      
    });
  
    dropdownButton.innerHTML = '<i id="flagIcon" class="flag-icon flag-icon-' + (idioma === "espanol" ? "es" : "gb") + '"></i>';
  
    if (menuAbierto) {
      toggleMenu();
    }
  }