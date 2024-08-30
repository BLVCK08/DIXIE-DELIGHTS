function orderCake(cakeName) {
    document.getElementById('cake-name').value = cakeName;
    window.location.href = '#order';
}

document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Order placed successfully!');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent successfully!');
});

