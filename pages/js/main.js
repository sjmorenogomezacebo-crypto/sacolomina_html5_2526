const productos = [
  {
    id: 1,
    nombre: "santis motor bike",
    descripcion: "la moto más rápida del mundo.",
    precio: 5900.99,
    moneda: "EUR",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Moby_AV-45.jpg"
  },
  {
    id: 2,
    nombre: "harley davidson",
    descripcion: "Te despeinara solo si tienes pelo.",
    precio: 3900.90,
    moneda: "EUR",
    imagen: "https://images.unsplash.com/photo-1558980664-2cd663cf8dde?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const contenedor = document.getElementById("products-grid");

if (contenedor) {
  productos.forEach(producto => {
    const card = document.createElement("article");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <span class="price">${producto.precio} ${producto.moneda}</span>
      <button class="btn-secondary">Añadir al carrito</button>
    `;

    contenedor.appendChild(card);
  });
}