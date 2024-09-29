// src/components/ServiceList.js
import React, { useState } from "react";

function ServiceList({ services, updateService, deleteService }) {
  const [isEditing, setIsEditing] = useState(null);
  const [editedService, setEditedService] = useState({ name: "", description: "", price: "" });

  const handleEdit = (service) => {
    setIsEditing(service.id);
    setEditedService(service);
  };

  const handleUpdate = (id) => {
    updateService(id, editedService);
    setIsEditing(null);
  };

  return (
    <div>
      <h2>Service List</h2>
      <ul>
        {services.length === 0 ? (
          <li>No services available</li>
        ) : (
          services.map((service) => (
            <li key={service.id}>
              {isEditing === service.id ? (
                <div>
                  <input
                    type="text"
                    value={editedService.name}
                    onChange={(e) => setEditedService({ ...editedService, name: e.target.value })}
                  />
                  <input
                    type="text"
                    value={editedService.description}
                    onChange={(e) => setEditedService({ ...editedService, description: e.target.value })}
                  />
                  <input
                    type="number"
                    value={editedService.price}
                    onChange={(e) => setEditedService({ ...editedService, price: e.target.value })}
                  />
                  <button onClick={() => handleUpdate(service.id)}>Save</button>
                </div>
              ) : (
                <div>
                  <strong>{service.name}</strong> - {service.description} (${service.price})
                  <button onClick={() => handleEdit(service)}>UPDATE SERVICE</button>
                  <button onClick={() => deleteService(service.id)}>DELETE SERVICE</button>
                </div>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ServiceList;
