// src/components/ServiceForm.js
import React, { useState } from "react";

function ServiceForm({ addService }) {
  const [service, setService] = useState({ name: "", description: "", price: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!service.name || !service.description || !service.price) {
      alert("PLEASE FILL OUT ALL THE FIELDS");
      return;
    }
    addService(service);
    setService({ NAME: "", DESCRIPTION: "", PRICE: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="SERVICE NAME"
        value={service.name}
        onChange={(e) => setService({ ...service, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="DESCRIPTION"
        value={service.description}
        onChange={(e) => setService({ ...service, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="PRICE"
        value={service.price}
        onChange={(e) => setService({ ...service, price: e.target.value })}
      />
      <button type="SUBMIT">Add Service</button>
    </form>
  );
}

export default ServiceForm;
