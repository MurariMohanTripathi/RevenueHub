import React, { useState } from 'react';

const Leads = () => {
  const [leads, setLeads] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Contacted' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Interested' },
  ]);

  const [filter, setFilter] = useState('');
  const [newLead, setNewLead] = useState({ name: '', email: '', status: 'New' });

  const handleAddLead = (e) => {
    e.preventDefault();
    setLeads([...leads, { id: leads.length + 1, ...newLead }]);
    setNewLead({ name: '', email: '', status: 'New' });
  };

  const filteredLeads = leads.filter((lead) =>
    lead.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section
      id="Leads-section"
      className="min-h-screen pl-64 pr-6 pt-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-indigo-700 dark:text-indigo-400">📋 Leads</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300 text-lg">Track and manage potential clients</p>
        </div>

        {/* Search */}
        <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="🔍 Search Leads..."
            className="w-full sm:max-w-sm px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        {/* Add Lead Form */}
        <form
          onSubmit={handleAddLead}
          className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 mb-10 flex flex-col sm:flex-row gap-4"
        >
          <input
            type="text"
            placeholder="Name"
            value={newLead.name}
            onChange={(e) => setNewLead({ ...newLead, name: e.target.value })}
            required
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
          />
          <input
            type="email"
            placeholder="Email"
            value={newLead.email}
            onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
            required
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold shadow-md transition"
          >
            ➕ Add Lead
          </button>
        </form>

        {/* Leads Table */}
        <div className="overflow-x-auto rounded-xl shadow-md">
          <table className="min-w-full bg-white dark:bg-gray-800 text-sm rounded-xl overflow-hidden">
            <thead className="bg-indigo-100 dark:bg-indigo-700 text-gray-900 dark:text-white">
              <tr>
                <th className="text-left px-6 py-3">Name</th>
                <th className="text-left px-6 py-3">Email</th>
                <th className="text-left px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-6 py-4">{lead.name}</td>
                  <td className="px-6 py-4">{lead.email}</td>
                  <td className="px-6 py-4">{lead.status}</td>
                </tr>
              ))}
              {filteredLeads.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center px-6 py-4 text-gray-500">
                    No leads found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Leads;
