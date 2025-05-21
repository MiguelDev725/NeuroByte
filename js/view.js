const View = (() => {
  const renderBusinessInfo = (info) => {
    document.getElementById("business-name").textContent = info.name;
    document.getElementById("slogan").textContent = info.slogan;
    document.getElementById("year").textContent = new Date().getFullYear();
  };

  const renderServices = (services) => {
    const list = document.getElementById("services-list");
    list.innerHTML = "";
    services.forEach((service) => {
      const li = document.createElement("li");
      li.textContent = service;
      list.appendChild(li);
    });
  };

  return {
    renderBusinessInfo,
    renderServices,
  };
})();
