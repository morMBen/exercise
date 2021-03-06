var ctx = document.getElementById('myChart').getContext('2d');
const canvas = document.querySelector('canvas');
const div = document.querySelector('div');
canvas.style.height = window.getComputedStyle(document.querySelector('div')).height;





var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ['Israel', 'lebanon', 'adfada', 'April', 'May', 'June', 'July', 'Israel', 'lebanon', 'adfada', 'April', 'May', 'June', 'July', 'Israel', 'lebanon', 'adfada', 'April', 'May', 'June', 'July', 'Israel', 'lebanon', 'adfada', 'April', 'May', 'June', 'July'],
        datasets: [{

            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 30, 45]//push here covid statistic when presing on the region.
        }]
    },

    // Configuration options go here
    options: {}
});