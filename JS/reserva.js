function toggleSeat(seat) {
    seat.classList.toggle('selected');
}

function confirmReservation() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    const movie = document.getElementById('movie').value;
    const seatNumbers = Array.from(selectedSeats).map(seat => seat.textContent);

    if (seatNumbers.length === 0) {
        const message = ('Por favor, selecciona al menos un asiento.');
        document.getElementById('message').textContent = message;
    } else {
        const message = `Has reservado los asientos: ${seatNumbers.join(', ')} para la película "${movie}".`;
        document.getElementById('message').textContent = message;
    }
}

