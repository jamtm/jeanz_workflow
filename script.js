document.addEventListener('DOMContentLoaded', function() {
    const priceElement = document.getElementById('price');

    // API URL
    const apiUrl = 'https://64dbcc20593f57e435b16e04.mockapi.io/jeans';

    // Fetch price from API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Parse the createdAt field into Date objects and find the object with the maximum createdAt value
            const maxCreatedAtItem = data.reduce((maxItem, currentItem) => {
                const maxDate = new Date(maxItem.createdAt);
                const currentDate = new Date(currentItem.createdAt);
                return currentDate > maxDate ? currentItem : maxItem;
            }, data[0]);

            // Display the price of the item with the maximum createdAt value
            priceElement.textContent = `$${maxCreatedAtItem.price.toFixed(2)}`;
        })
        .catch(error => {
            console.error('Error fetching price:', error);
            priceElement.textContent = 'Error fetching price';
        });
});
