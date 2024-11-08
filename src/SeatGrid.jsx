import React, { useState } from 'react';

const SeatGrid = () => {
  const rows = 5;
  const cols = 5;

  // State to track which seats are selected
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Generate a 5x5 array of seats
  const seats = Array.from({ length: rows }, (_, row) =>
    Array.from({ length: cols }, (_, col) => `${row}-${col}`)
  );

  // Handle seat selection
  const toggleSeatSelection = (seat) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seat)) {
        return prevSelectedSeats.filter((s) => s !== seat);
      } else {
        return [...prevSelectedSeats, seat];
      }
    });
  };

  return (
    <div>
      <h2>Select Your Seats</h2>
      <div style={{ display: 'inline-block' }}>
        {seats.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex' }}>
            {row.map((seat) => (
              <button
                key={seat}
                style={{
                  padding: '10px',
                  margin: '5px',
                  backgroundColor: selectedSeats.includes(seat) ? 'green' : 'gray',
                  color: 'white',
                  cursor: 'pointer',
                }}
                onClick={() => toggleSeatSelection(seat)}
              >
                {seat}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>Selected Seats:</h3>
        <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}</p>
      </div>
    </div>
  );
};

export default SeatGrid;
