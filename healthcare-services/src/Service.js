import React, { useState } from "react";

const Service = ({ service, updateService, deleteService }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedService, setEditedService] = useState(service);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedService({ ...editedService, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateService(editedService);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            name="name"
            value={editedService.name}
            onChange={handleEditChange}
            required
          />
          <input
            name="description"
            value={editedService.description}
            onChange={handleEditChange}
            required
          />
          <input
            name="price"
            value={editedService.price}
            onChange={handleEditChange}
            required
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <p>Price: ${service.price}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteService(service.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Service;
