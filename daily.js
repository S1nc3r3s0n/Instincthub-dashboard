const ctx = document.getElementById('daily').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [],
        datasets: [{
            label: '# of Votes',
            data: [70,30],
            backgroundColor: [
                'Purple',
                'Green',
            ],
            
            borderWidth: 1,
            cutout: '80%'
        }]
    },

});
