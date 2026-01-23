const productos = [
  {
    id: 1,
    nombre: "Santis motor bike",
    descripcion: "La moto más rápida del mundo.",
    precio: 5900.99,
    moneda: "EUR",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Moby_AV-45.jpg"
  },
  {
    id: 2,
    nombre: "Kawasaki Ninja h2r",
    descripcion: "Superbike de alto rendimiento.",
    precio: 55000.0,
    moneda: "EUR",
    imagen: "https://www.mundomotero.com/wp-content/uploads/2022/10/kawasaki-h2r-2023.jpg"
  },
  {
    id: 3,
    nombre: "Jesus motor bike",
    descripcion: "Te despeinara solo si tienes pelo.",
    precio: 3900.00,
    moneda: "EUR",
    imagen: "https://electyum.com/wp-content/uploads/2024/09/moto-electrica-horwin-ht5.webp"
  },
  {
    id: 4,
    nombre: "Fatimas motor bike",
    descripcion: "Ideal para ciudad y carretera.",
    precio: 3900.90,
    moneda: "EUR",
    imagen: "https://images.unsplash.com/photo-1558980664-2cd663cf8dde?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    nombre: "Torrot power",
    descripcion: "Veloz como el viento.",
    precio: 3000.90,
    moneda: "EUR",
    imagen: "https://www.mundomotero.com/wp-content/uploads/2025/11/bsa-bantam-350-port.jpg"
  },
  {
    id: 6,
    nombre: "fast motor bike",
    descripcion: "8 cilindros en linea.",
    precio: 5000.90,
    moneda: "EUR",
    imagen: "https://motissimo.es/wp-content/uploads/2025/03/e79eda7a7c034dd3879ddb81fdcd9bff-1-600x360.jpg"
  },
   {
    id: 7,
    nombre: "Ducati Panigale",
    descripcion: "La moto deportiva definitiva.",
    precio: 38750.90,
    moneda: "EUR",
    imagen: "https://images.ctfassets.net/x7j9qwvpvr5s/2TvZT71640MzivRgP4qSp2/f615d076cf8f85a937d2a12847aa8e37/MY23-Panigale-V4R-Model-Blocks-630x390.png"
  },
  {
    id: 8,
    nombre: "Aprilia RS660",
    descripcion: "Potencia y agilidad en una sola moto.",
    precio: 11898.90,
    moneda: "EUR",
    imagen: "https://www.motofichas.com/images/cache/10-aprilia-rs-660-2025-estudio-azul-01-739-a.jpg"
  },

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