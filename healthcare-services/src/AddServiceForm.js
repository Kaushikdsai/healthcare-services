import React, { useState } from 'react';

function AddServiceForm({ addService }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addService(formData);
    setFormData({ name: '', description: '', price: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Service</h2>
      <input
        type="text"
        name="name"
        placeholder="Service Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Service Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Service Price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Service</button>
    </form>
  );
}

export default AddServiceForm;
