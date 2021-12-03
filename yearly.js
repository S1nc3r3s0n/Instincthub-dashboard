const ctx = document.getElementById('yearly').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [],
        datasets: [{
            label: '# of Votes',
            data: [12,88],
            backgroundColor: [
                'Purple',
                'Green',
            ],
            
            borderWidth: 1,
            cutout: '80%'
        }]
    },

});
