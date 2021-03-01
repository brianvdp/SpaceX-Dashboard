
    var ctx = document.getElementById('myChart').getContext('2d');

    var myChart = new Chart(ctx, {
        
                type: "doughnut",
                data: {
                    labels: ["Fuel level"],
                    datasets: [{
                        label: ["#"],
                        data: [75, 25],
                        backgroundColor: ["#0369EF","#282D5E"],
                        borderWidth: 0
                    }]
                    },
                options: {
                    legend: {
                        labels: {
                            fontColor: 'white',
                            fontSize: 20
                        }
                    },
                aspectRatio: 1,
                cutoutPercentage: 75,

                }
            });


    var ctx = document.getElementById('myChart2').getContext('2d');

    var myChart2 = new Chart(ctx, {

        type:'bar', //bar
        data:{
            labels: ['G-force'],
            datasets: [{
                label:['G-force'],
                data:[3.6],
                backgroundColor:['#0369EF'],
                barThickness: 50
            }]
        },
        options: {
            scales:{
                yAxes: [{
                    gridLines:{
                        color:['#282D5E','#282D5E','#282D5E','#282D5E','#282D5E','#282D5E','#282D5E','#282D5E','#282D5E','#282D5E','#282D5E'],
                        lineWidth: 3
                    }

                }],

            },
            legend: {
                labels: {
                    fontColor: 'white',
                    fontSize: 20
                }
            },
            aspectRatio: 0.8
    }
});


    var ctx = document.getElementById('myChart3').getContext('2d');

    var myChart3 = new Chart(ctx, {

        type:'line', //bar
        data:{
            labels: ["0","5","10","15","20","25","30"],
            datasets: [{
                label:['snelheid'],
                borderColor:['#9494D7'],
                backgroundColor:['rgba(148, 148, 215, 0.23)'],
                pointBorderColor:['','white','white','white','white','white'],
                pointBackgroundColor:['','white','white','white','white','white'],
                pointHitRadius: 5,
                data:[
                    0,
                    5,
                    9,
                    10,
                    10.3,
                    10.4,
                    10.5
                ]

            }]
        },
        options: {
            scales:{
                yAxes: [{
                    gridLines:{
                        color:['#282D5E','#282D5E','#282D5E','#282D5E','#282D5E','#282D5E',],
                        lineWidth: 3
                    }

                }],

            },
            legend: {
                labels: {
                    fontColor: 'white',
                    fontSize: 20
                },

            },
            aspectRatio: 1.2
    }
});




