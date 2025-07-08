import { useParams } from 'react-router-dom';
import doctors from '../data/doctors.json';
import BookingForm from '../components/BookingForm';

export default function DoctorPage() {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === parseInt(id));

  if (!doctor) return <p className="p-6">Doctor not found.</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-6">
        <img src={doctor.image} alt={doctor.name} className="w-32 h-32 rounded-full" />
        <div>
          <h2 className="text-2xl font-bold">{doctor.name}</h2>
          <p className="text-gray-600">{doctor.specialty} • {doctor.location}</p>
          <p className="text-sm text-green-600">{doctor.verified && "✔ Verified Doctor"}</p>
          <p className="mt-2 text-sm"><strong>Experience:</strong> {doctor.experience}</p>
          <p className="text-sm"><strong>Education:</strong> {doctor.education}</p>
          <p className="text-sm"><strong>Languages:</strong> {doctor.languages.join(', ')}</p>
          <p className="text-sm"><strong>Fees:</strong> ₹{doctor.fees}</p>
        </div>
      </div>

      <hr className="my-6" />

      <BookingForm doctor={doctor} />
    </div>
  );
}
