// pages/Home.jsx
import { Link } from 'react-router-dom';
import doctors from '../data/doctors.json';

export default function Home() {
  const topDoctors = doctors.slice(0, 3);

  return (
    <div className="p-4 sm:p-6 flex flex-col items-center gap-6 sm:gap-[5vh] max-w-6xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-center">Welcome to FindMyDoctor</h1>

      <div className="max-w-xl px-4 text-center space-y-2">
        <p className="text-gray-600">
          We help you find trusted and experienced doctors near you in just a few clicks.
        </p>
        <p className="text-gray-600">
          Search by specialty, location, or browse on our interactive map to book appointments.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-4">
        {topDoctors.map((doc) => (
          <Link
            to={`/doctor/${doc.id}`}
            key={doc.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="rounded-full w-24 h-24 mb-3 object-cover"
            />
            <h3 className="text-center font-semibold">{doc.name}</h3>
            <p className="text-center text-sm text-gray-600">{doc.specialty}</p>
            <p className="text-center text-xs text-gray-400">{doc.location}</p>
          </Link>
        ))}
      </div>

      <div className="max-w-xl px-4 text-center space-y-2">
        <p className="text-gray-600">
          All our listed doctors are verified and come from diverse specialties.
        </p>
        <p className="text-gray-600">
          Start exploring now and take a step toward better healthcare!
        </p>
      </div>
    </div>
  );
}
