import React, { useState } from 'react';

const Availability = () => {
  const [city, setCity] = useState('');
  const [place, setPlace] = useState('');
  const [parkingSlots, setParkingSlots] = useState([]);
  const [showAvailability, setShowAvailability] = useState(false);

  const locations = {
    Chennai: ["VGP", "Marina", "Express Avenue", "Phoenix Mall"],
    Delhi: ["Connaught Place", "India Gate", "Red Fort", "Sarojini Nagar"],
    Mumbai: ["Marine Drive", "Gateway of India", "Juhu Beach", "Bandra"],
    Bengaluru: ["MG Road", "Lalbagh", "Cubbon Park", "Forum Mall"],
    Kolkata: ["Park Street", "Howrah Bridge", "Victoria Memorial", "Salt Lake"],
    Hyderabad: ["Charminar", "Hussain Sagar", "Gachibowli", "Banjara Hills"],
    Pune: ["Shivaji Nagar", "FC Road", "Koregaon Park", "Viman Nagar"],
  };

  const handleLocationSelection = () => {
    setShowAvailability(true);
    generateRandomParkingSlots();
  };

  const generateRandomParkingSlots = () => {
    const slots = Array.from({ length: Math.floor(Math.random() * 4) + 3 }, (_, i) => ({
      number: i + 1,
      status: Math.random() > 0.5 ? 'Available' : 'Occupied',
      carNumber: null, // Initialize car number as null
    }));
    setParkingSlots(slots);
  };

  const handleBooking = (slotNumber) => {
    const carNumber = prompt("Enter your car number:");
    if (!carNumber) {
      alert("Car number is required to book a slot.");
      return;
    }

    alert(`You have booked slot number ${slotNumber} at ${place} for car number ${carNumber}.`);
    setParkingSlots((prevSlots) =>
      prevSlots.map((slot) =>
        slot.number === slotNumber ? { ...slot, status: 'Occupied', carNumber: carNumber } : slot
      )
    );
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      backgroundImage: 'linear-gradient(to bottom, #000000, #333333, #000000)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '20px',
      color: '#2c3e50'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '40px auto',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: '10px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
        transition: 'transform 0.3s ease',
      }}>
        <h2 style={{
          textAlign: 'center',
          color: 'Black',
          marginBottom: '20px',
          textShadow: '1px 1px 5px rgba(0, 0, 0, 0.6)'
        }}>
          Spot Saver
        </h2>

        {/* Location Selection */}
        <div>
          <label style={{ display: 'block', margin: '15px 0 5px', fontWeight: 'bold', color: '#333' }}>
            City:
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '16px',
                border: '2px solid #ddd',
                borderRadius: '5px',
                outline: 'none',
                transition: 'border-color 0.3s ease'
              }}
            >
              <option value="">Select City</option>
              {Object.keys(locations).map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </label>

          {city && (
            <label style={{ display: 'block', margin: '15px 0 5px', fontWeight: 'bold', color: '#333' }}>
              Place:
              <select
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '16px',
                  border: '2px solid #ddd',
                  borderRadius: '5px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
              >
                <option value="">Select Place</option>
                {locations[city].map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </label>
          )}

          <button
            onClick={handleLocationSelection}
            disabled={!city || !place}
            style={{
              display: 'block',
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              color: '#fff',
              backgroundColor: city && place ? '#007bff' : '#ccc',
              border: 'none',
              borderRadius: '6px',
              cursor: city && place ? 'pointer' : 'not-allowed',
              marginTop: '20px',
              transition: 'background-color 0.3s ease, transform 0.3s ease',
              boxShadow: city && place ? '0 3px 6px rgba(0, 0, 0, 0.15)' : 'none'
            }}
          >
            Show Availability
          </button>
        </div>

        {/* Parking Availability */}
        {showAvailability && (
          <div>
            <h3 style={{ color: 'Black', marginTop: '30px', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}>
              Parking Availability in {place}
            </h3>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
              {parkingSlots.map((slot) => (
                <li
                  key={slot.number}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px',
                    margin: '8px 0',
                    backgroundColor: slot.status === 'Available' ? '#d4edda' : '#f8d7da',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  Parking Number {slot.number} - {slot.status}
                  {slot.status === 'Available' && (
                    <button
                      onClick={() => handleBooking(slot.number)}
                      style={{
                        padding: '6px 12px',
                        color: '#fff',
                        backgroundColor: '#28a745',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      Book Slot
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Availability;