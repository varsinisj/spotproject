import React from 'react';

const Mapsss = () => {
  const handleOpenGoogleMaps = () => {
    // Replace with your desired destination coordinates
    const destinationLatitude = 13.0827; // Example: Marina Beach, Chennai
    const destinationLongitude = 80.2707;

    // Google Maps URL with directions
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destinationLatitude},${destinationLongitude}&travelmode=driving`;

    // Open Google Maps in a new tab
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Navigate to Parking Spot</h2>
      <p>Click the button below to open Google Maps with directions to your parking spot.</p>
      <button
        onClick={handleOpenGoogleMaps}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Open Google Maps
      </button>
    </div>
  );
};

export default Mapsss;