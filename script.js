function calculateRevenue() {
    // Get input values
    const price = parseFloat(document.getElementById('price').value);
    const units = parseFloat(document.getElementById('units').value);
    const growthRate = parseFloat(document.getElementById('growth').value);

    // Calculate initial revenue
    let revenue = price * units;

    // Display the result
    document.getElementById('revenueResult').innerText = `$${revenue.toFixed(2)}`;

    // Project revenue growth for the next 12 months
    let projectedRevenue = [];
    for (let i = 0; i < 12; i++) {
        projectedRevenue.push(revenue);
        revenue *= (1 + growthRate / 100);
    }

    // Create a dynamic chart
    createChart(projectedRevenue);
}

function createChart(data) {
    const ctx = document.getElementById('revenueChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7', 'Month 8', 'Month 9', 'Month 10', 'Month 11', 'Month 12'],
            datasets: [{
                label: 'Projected Revenue ($)',
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
