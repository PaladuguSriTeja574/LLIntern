document.addEventListener('DOMContentLoaded', () => {
    const orderList = document.getElementById('order-list');
    const totalDisplay = document.getElementById('total');
    const placeOrderButton = document.getElementById('placeOrderButton');
    const reservationForm = document.getElementById('reservationForm');
    const submitFeedbackButton = document.getElementById('submitFeedback');
    const feedbackList = document.getElementById('feedbackList');
    let total = 0;
    let orderItems = [];

    window.addToOrder = (item, price) => {
        orderItems.push({ item, price });
        total += price;
        renderOrder();
    };

    const renderOrder = () => {
        orderList.innerHTML = '';
        orderItems.forEach((orderItem, index) => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${orderItem.item} - $${orderItem.price.toFixed(2)}`;
            orderList.appendChild(itemElement);
        });
        totalDisplay.textContent = total.toFixed(2);
    };

    placeOrderButton.addEventListener('click', () => {
        const specialInstructions = document.getElementById('specialInstructions').value;
        alert(`Order placed!\n\nItems:\n${orderItems.map(item => item.item).join(', ')}\nTotal: $${total.toFixed(2)}\nInstructions: ${specialInstructions}`);
        orderItems = [];
        total = 0;
        renderOrder();
    });

    reservationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        alert(`Reservation confirmed for ${name}.\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`);
        reservationForm.reset();
    });

    submitFeedbackButton.addEventListener('click', () => {
        const feedbackText = document.getElementById('feedbackText').value;
        const rating = document.getElementById('rating').value;
        const feedbackElement = document.createElement('div');
        feedbackElement.textContent = `Rating: ${rating} - ${feedbackText}`;
        feedbackList.appendChild(feedbackElement);
        document.getElementById('feedbackText').value = '';
        document.getElementById('rating').value = '';
    });
});
