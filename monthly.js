const month = document.getElementById('monthly').getContext('2d');
const monthly = new Chart(month, {
    type: 'doughnut',
    data: {
        labels: [],
        datasets: [{
            label: '# of Votes',
            data: [20,80],
            backgroundColor: [
                'Purple',
                'Green',
            ],
            
            borderWidth: 1,
            cutout: '80%'
        }]
    },

});
