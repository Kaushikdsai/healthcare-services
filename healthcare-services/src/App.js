// src/App.js
import React, { useState } from "react";
import ServiceList from "./components/ServiceList";
import ServiceForm from "./components/ServiceForm";
import './index.css';

function App() {
  const [services, setServices] = useState([]);

  // Add new service
  const addService = (service) => {
    setServices([...services, { ...service, id: Date.now() }]);
  };

  // Update existing service
  const updateService = (id, updatedService) => {
    setServices(
      services.map((service) =>
        service.id === id ? { ...updatedService, id } : service
      )
    );
  };

  // Delete service
  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Healthcare Services Management</h1>
      <ServiceForm addService={addService} />
      <ServiceList
        services={services}
        updateService={updateService}
        deleteService={deleteService}
      />
    </div>
  );
}

export default App;

