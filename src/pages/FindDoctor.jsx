


import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import doctors from '../data/doctors.json';

export default function Home() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');

  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.specialty.toLowerCase().includes(search.toLowerCase()) &&
      doc.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Search Doctors</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
        <input
          className="p-3 border rounded w-full sm:w-1/3"
          placeholder="Search specialty (e.g. Dentist)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          className="p-3 border rounded w-full sm:w-1/3"
          placeholder="Search location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
        {filteredDoctors.map((doc) => (
          <Link to={`/doctor/${doc.id}`} key={doc.id} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <img src={doc.image} alt={doc.name} className="rounded-full w-24 h-24 mx-auto mb-2" />
            <h3 className="text-center font-semibold">{doc.name}</h3>
            <p className="text-center text-sm text-gray-600">{doc.specialty}</p>
            <p className="text-center text-xs text-gray-400">{doc.location}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}