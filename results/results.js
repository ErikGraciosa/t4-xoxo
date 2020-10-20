import { renderHeader } from '../header/header.js';
import { wins, losses, ties } from '../data/data.js';
import arrayOfRounds from '../data/data.js';
import {getFromLocalStorage} from '../utils.js';

renderHeader();

const chartWins = getFromLocalStorage('Wins');
const chartLosses = getFromLocalStorage('Losses');
const chartTies = getFromLocalStorage('Ties');
const labels = ['Wins', 'Losses', 'Ties'];
const chartData = [chartWins, chartLosses, chartTies];
const mainChart = document.getElementById('myChart');
const noData = document.getElementById('no-data');

let ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {         //eslint-disable-line
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            label: 'Count of Games',
            data: chartData,
            backgroundColor: [
                'rgba(255, 255, 0, 0.2)',
                'rgba(255, 0, 0, 0.2)',
                'rgba(0, 255, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 255, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(0, 255, 255, 1)',
            ],
            borderWidth: 5
        }]
    },
    options: {
        scales: {
        }
    }
});

//Handing no data
if (chartLosses === null && chartWins === null && chartTies === null) {
    //if no data, hide chart, display instructions to play game
    mainChart.style.display = 'none';
    noData.textContent = 'Click \'Reset\' and play some games to populate game history.';
}
