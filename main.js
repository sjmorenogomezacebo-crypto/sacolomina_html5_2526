const productos = [
  {
    id: 1,
    nombre: "Auriculares inalámbricos",
    descripcion: "Auriculares Bluetooth con cancelación de ruido.",
    precio: 59.99,
    moneda: "EUR",
    imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  {
    id: 2,
    nombre: "Mochila urbana",
    descripcion: "Mochila moderna con compartimento para portátil.",
    precio: 39.90,
    moneda: "EUR",
    imagen: "https://images.unsplash.com/photo-1514474959185-147d6f8f0f07"
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