const year = document.getElementById('yearly').getContext('2d');
const yearly = new Chart(year, {
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
