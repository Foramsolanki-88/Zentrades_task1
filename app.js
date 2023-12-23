document.addEventListener("DOMContentLoaded", function () {
    // Fetch JSON data
    fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
        .then(response => response.json())
        .then(data => {
            // Extract products from the JSON data
            const products = Object.values(data.products);

            // Sort products based on descending popularity
            products.sort((a, b) => b.popularity - a.popularity);

            // Display the sorted data in the table
            displayProducts(products);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayProducts(products) {
    const tableBody = document.getElementById('productTableBody');

    // Iterate through products and create table rows
    products.forEach(product => {
        const row = tableBody.insertRow();
        const titleCell = row.insertCell(0);
        const priceCell = row.insertCell(1);
        const popularityCell = row.insertCell(2);

        // Populate cells with product data
        titleCell.textContent = product.title;
        priceCell.textContent = product.price;
        popularityCell.textContent = product.popularity;
    });
}
