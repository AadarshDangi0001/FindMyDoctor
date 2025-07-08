import { useState } from 'react';

export default function BookingForm({ doctor }) {
  const [selectedSlot, setSelectedSlot] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleBooking = () => {
    if (!selectedSlot) return alert("Please select a slot");
    setConfirmed(true);
  };

  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <h3 className="font-semibold mb-2">Book Appointment</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {doctor.slots.map((slot, index) => (
          <button
            key={index}
            onClick={() => setSelectedSlot(slot)}
            className={`px-4 py-2 rounded border ${selectedSlot === slot ? 'bg-blue-600 text-white' : 'bg-white'}`}
          >
            {slot}
          </button>
        ))}
      </div>

      <button onClick={handleBooking} className="bg-green-600 text-white px-4 py-2 rounded">
        Confirm Booking
      </button>

      {confirmed && (
        <p className="mt-3 text-green-600 font-semibold">
          ✅ Appointment booked for {selectedSlot}
        </p>
      )}
    </div>
  );
}
