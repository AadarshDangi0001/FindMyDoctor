export default function DoctorCard({ doctor }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4">
      <img src={doctor.image} alt={doctor.name} className="rounded-full w-24 h-24 mx-auto" />
      <h3 className="text-lg font-bold text-center mt-3">{doctor.name}</h3>
      <p className="text-center text-gray-600">{doctor.specialty}</p>
      <p className="text-center text-gray-500">{doctor.location}</p>
      <button className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl">
        Book Appointment
      </button>
    </div>
  );
}
