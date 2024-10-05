const ctx = document.getElementById('trafficChart').getContext('2d');

const data = {
    labels: ['Social Media', 'Search Engines', 'Email Marketing', 'Referrals', 'Direct'],
    datasets: [{
        label: 'Traffic Sources',
        data: [30, 40, 15, 10, 5],
        backgroundColor: [
            'rgba(255, 159, 64, 0.6)', 
            'rgba(75, 192, 192, 0.6)', 
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 99, 132, 0.6)', 
            'rgba(54, 162, 235, 0.6)'
        ],
        borderColor: [
            'rgba(255, 159, 64, 1)', 
            'rgba(75, 192, 192, 1)', 
            'rgba(153, 102, 255, 1)',
            'rgba(255, 99, 132, 1)', 
            'rgba(54, 162, 235, 1)' 
        ],
        borderWidth: 4
    }]
};

const config = {
    type: 'pie',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
            }
        }
    },
};

const trafficChart = new Chart(ctx, config);
