/* Global Colors */

window.themeColors = {
    themePrimaryAlpha: 'rgba(115, 119, 191, 0.3)',
    themePrimary: 'rgb(115, 119, 191)',
    themePrimaryDarkAlpha: 'rgba(115, 119, 191, 0.6)',
    themeSecondaryAlpha: 'rgba(77, 76, 114, 0.3)',
    themeSecondary: 'rgb(77, 76, 114)',
    themeTertiaryAlpha: 'rgba(116, 177, 191, 0.3)',
    themeTertiary: 'rgb(116, 177, 191)',
    themeQuadraryAlpha: 'rgba(129, 201, 143, 0.3)',
    themeQuadrary: 'rgb(129, 201, 143)',
    themeGray: 'rgb(178, 178, 178)',
    themeWhite: 'rgb(255, 255, 255)',
};

/* Global Configuration */

Chart.defaults.global.elements.line.tension = '0';
Chart.defaults.global.elements.line.fill = 'bottom';
Chart.defaults.global.elements.line.borderWidth = 1;
Chart.defaults.global.elements.point.pointStyle = 'circle';
Chart.defaults.global.elements.point.borderWidth = 2;
Chart.defaults.global.elements.point.radius = 6;


/* Global Object Variables */

var wtx = document.getElementById("webTraffic").getContext('2d');
var dtx = document.getElementById("dailyTraffic").getContext('2d');
var mtx = document.getElementById("mobileUsers").getContext('2d');



/* Traffic: Line Chart */
var wtChart = new Chart(wtx, {
    type: 'line',

// The data for our dataset
    data: {
	labels: ["0-2", "3-5", "6-9", "10-12", "13-15", "16-18", "19-21", "22-24"],
	datasets: [{
            label: "Weekly",
	    backgroundColor: window.themeColors.themePrimaryAlpha,
            borderColor: window.themeColors.themePrimaryDarkAlpha,
	    pointBackgroundColor: window.themeColors.themeWhite,
            data: [0, 1000, 750, 1500, 2250, 1500, 2100, 2750],
        }]
    },

    // Configuration options go here
    options: {
	responsive: true,
	maintainAspectRatio: true,
                scales: {
                    yAxes: [{
                        gridLines: {
                            drawBorder: false,
			    color: [window.themeColors.themeGray]
                        },
                        ticks: {
			    beginAtZero: true,
                            min: 0,
                            max: 3000,
                            stepSize: 500
                        }
                    }]
                }
            }
});
	


/* Daily Traffic: Bar Chart */

var dtChart = new Chart(dtx, {
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: "Weekly",
	    backgroundColor: window.themeColors.themePrimary,
            borderColor: window.themeColors.themePrimary,
            data: [50, 100, 225, 150, 325, 250, 175],
        }]
    },

    // Configuration options go here
    options: {
	responsive: true,
	maintainAspectRatio: true,
	legend: {
	    position: 'right',
	    display: false,
	},
        scales: {
            yAxes: [{
                gridLines: {
                    drawBorder: false,
		    color: [window.themeColors.themeGray]
                },
                ticks: {
		    beginAtZero: true,
                    min: 0,
                    max: 350,
                    stepSize: 50
                }
            }]
        }
    }
    
});



/* Mobile Users Traffic: Doughnut Chart */


var mtChart = new Chart(mtx, {
    type: 'doughnut',

// The data for our dataset
    data: {
	labels: ["Phones", "Tablets", "Desktop"],
	datasets: [{
	    label: "My First Dataset",
	    backgroundColor: [
		window.themeColors.themePrimary,
		window.themeColors.themeQuadrary,
		window.themeColors.themeTertiary
	    ],
	    data: ['65', '12', '12'],
            }],
        },
        options: {
            responsive: true,
	    rotation: 90 * Math.PI,
            legend: {
                position: 'right',
            },
            title: {
                display: false,
                text: 'Chart.js Doughnut Chart'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
});


