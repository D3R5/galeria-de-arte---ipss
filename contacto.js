// Validar formulario al enviar
const validarFormulario = (event) => {
  event.preventDefault();
  
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const tipo = document.getElementById("tipo").value;
  const mensaje = document.getElementById("mensaje").value.trim();
  
  if (!nombre || !correo || !tipo || !mensaje) {
    mostrarMensaje("Por favor, complete todos los campos.", "danger");
    return;
  }
  
  if (!esCorreoValido(correo)) {
    mostrarMensaje("Por favor, ingrese un correo electrónico válido.", "danger");
    return;
  }
  
  actualizarTipoPorContenido(mensaje);
  mostrarMensaje("Formulario enviado correctamente.", "success");
};

// Mensaje de éxito o error
const mostrarMensaje = (texto, tipo) => {
  const mensajeAnterior = document.querySelector(".alert");
  if (mensajeAnterior) mensajeAnterior.remove();
  
  const alerta = document.createElement("div");
  alerta.className = `alert alert-${tipo} mt-3`;
  alerta.textContent = texto;
  document.querySelector("form").appendChild(alerta);
  
  setTimeout(() => alerta.remove(), 4000);
};

// Actualizar el campo "tipo" según el contenido del mensaje
const actualizarTipoPorContenido = (texto) => {
  const tipo = document.getElementById("tipo");
  const textoLower = texto.toLowerCase();
  
  if (textoLower.includes("compra")) tipo.value = "Compra";
  else if (textoLower.includes("venta")) tipo.value = "Venta";
  else if (textoLower.includes("consulta")) tipo.value = "Consulta";
};

// Validar correo electrónico
const esCorreoValido = (correo) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

// Alternar visibilidad del navbar (responsividad)
const toggleNavbar = () => {
  const navbar = document.getElementById("navbarNav");
  navbar.classList.toggle("show");
};

const cerrarMenuAlClickFuera = (e) => {
  const navbar = document.getElementById("navbarNav");
  const toggler = document.getElementById("navbarToggler");
  
  if (!navbar.contains(e.target) && !toggler.contains(e.target)) {
    navbar.classList.remove("show");
  }
};

const manejarRedimensionar = () => {
  const navbar = document.getElementById("navbarNav");
  if (window.innerWidth >= 992) navbar.classList.remove("show");
};

const inicializarEventos = () => {
  document.getElementById("formularioContacto").addEventListener("submit", validarFormulario);
  
  document.getElementById("navbarToggler").addEventListener("click", toggleNavbar);
  
  document.addEventListener("click", cerrarMenuAlClickFuera);
  window.addEventListener("resize", manejarRedimensionar);
  
  document.getElementById("correo").addEventListener("blur", (e) => {
    e.target.classList.toggle("is-invalid", e.target.value.trim() && !esCorreoValido(e.target.value));
  });
  
  document.getElementById("mensaje").addEventListener("input", (e) => {
    actualizarTipoPorContenido(e.target.value);
  });
};

document.addEventListener("DOMContentLoaded", inicializarEventos);