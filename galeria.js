// Mostrar modal por ID
const mostrarModal = (id) => {
  const modal = new bootstrap.Modal(document.getElementById(id));
  modal.show();
};

// Cerrar modal por ID
const cerrarModal = (id) => {
  const modalEl = document.getElementById(id);
  const modal = bootstrap.Modal.getInstance(modalEl);
  if (modal) modal.hide();
};

// Eliminar una tarjeta de imagen
const eliminarImagen = (e) => {
  const tarjeta = e.target.closest(".col");
  if (tarjeta) tarjeta.remove();
};

// Activar botón de eliminar en cada imagen
const activarBotonesEliminar = () => {
  document.querySelectorAll(".btn-eliminar").forEach((btn) => {
    btn.addEventListener("click", eliminarImagen);
  });
};

// Mostrar modal al hacer clic en una imagen
const activarImagenes = () => {
  document.querySelectorAll(".obra-card img").forEach((img) => {
    img.addEventListener("click", (e) => {
      const modalId = e.target.getAttribute("data-modal");
      if (modalId) mostrarModal(modalId);
      console.log("Imagen clickeada: " + img.alt);
    });
  });
};

// Activar botones "Ver más" para mostrar modales
const activarBotonesVerMas = () => {
  document.querySelectorAll(".btn-ver-mas").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const modalId = e.target.getAttribute("data-modal");
      if (modalId) mostrarModal(modalId);
    });
  });
};

// Activar botones de cerrar modal
const activarBotonesCerrarModal = () => {
  document.querySelectorAll(".btn-cerrar-modal").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const modalId = e.target.getAttribute("data-modal");
      if (modalId) cerrarModal(modalId);
    });
  });
};

const activarNavbarToggle = () => {
  const toggleBtn = document.getElementById("navbarToggler");
  const navbarNav = document.getElementById("navbarNav");
  if (toggleBtn && navbarNav) {
    toggleBtn.addEventListener("click", () => navbarNav.classList.toggle("show"));
  }
};

const inicializarEventos = () => {
  activarBotonesEliminar();
  activarImagenes();
  activarBotonesVerMas();
  activarBotonesCerrarModal();
  activarNavbarToggle();
};

document.addEventListener("DOMContentLoaded", inicializarEventos);