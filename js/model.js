const Model = (() => {
  const data = {
    name: "Tienda Express",
    slogan: "Tu solución rápida en línea",
    services: [
      "Diseño web en 24h",
      "Catálogo de productos",
      "Formulario de contacto con WhatsApp",
    ],
    whatsapp: "573001112233",
  };

  return {
    getData: () => data,
  };
})();
