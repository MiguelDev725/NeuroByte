const Controller = (() => {
  const init = () => {
    const data = Model.getData();
    View.renderBusinessInfo(data);
    View.renderServices(data.services);
  };

  const contactWhatsApp = () => {
    const number = Model.getData().whatsapp;
    window.open(`https://wa.me/${number}`, "_blank");
  };

  // Inicializa la app
  window.onload = init;

  return {
    contactWhatsApp,
  };
})();
