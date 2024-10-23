import React, { useState } from 'react';
import './Leads.css';

const Leads = () => {
  const [leads, setLeads] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Contacted' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Interested' },
    // Add more leads as needed
  ]);

  const [filter, setFilter] = useState('');
  const [newLead, setNewLead] = useState({ name: '', email: '', status: 'New' });

  const handleAddLead = (e) => {
    e.preventDefault();
    setLeads([...leads, { id: leads.length + 1, ...newLead }]);
    setNewLead({ name: '', email: '', status: 'New' }); // Reset form
  };

  const filteredLeads = leads.filter((lead) =>
    lead.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className='leads-container' id='Leads-section'>
      <h1 className='leads-heading'>Leads</h1>

      {/* Search Bar */}
      <div className='filter-section'>
        <input
          type='text'
          placeholder='Search Leads...'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {/* Add New Lead Form */}
      <form className='add-lead-form' onSubmit={handleAddLead}>
        <input
          type='text'
          placeholder='Name'
          value={newLead.name}
          onChange={(e) => setNewLead({ ...newLead, name: e.target.value })}
          required
        />
        <input
          type='email'
          placeholder='Email'
          value={newLead.email}
          onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
          required
        />
        <button type='submit'>Add Lead</button>
      </form>

      {/* Leads List */}
      <table className='leads-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredLeads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leads;
