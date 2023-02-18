import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, ArcElement, Legend } from 'chart.js'
import { Doughnut, Line } from 'react-chartjs-2'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, ArcElement, Legend)


export const Graph = () => {
    const labels = getLastYearMonths();
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Yearly Views',
            },
        },
    };

    const data = {
        labels, datasets: [
            { label: "Views", data: [1, 2, 3.5, 4], borderColor: "rgba(46, 255, 25, 0.8)", backgroundColor: "#6b46c1" }
        ]
    }

    return <Line option={options} data={data} />
}



export const DoughnutChart = ({ users = [] }) => {
    const data = {
        labels: ['Subscribed', 'Not Subscribed'],
        datasets: [
            {
                label: 'Views',
                // data: users,
                data: [6, 7],
                borderColor: ['rgb(62,12,171)', 'rgb(214,43,129)'],
                backgroundColor: ['rgba(62,12,171,0.3)', 'rgba(214,43,129,0.3)'],
                borderWidth: 1,
            },
        ],
    };

    return <Doughnut data={data} />;
};

function getLastYearMonths() {
    const labels = [];

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const currentMonth = new Date().getMonth();

    const remain = 11 - currentMonth;

    for (let i = currentMonth; i < months.length; i--) {
        const element = months[i];
        labels.unshift(element);
        if (i === 0) break;
    }
    console.log("labels1 : ", labels);
    for (let i = 11; i > 11 - remain; i--) {
        if (i === currentMonth) break;
        const element = months[i];
        labels.unshift(element);
    }
    console.log("labels2 : ", labels);

    return labels;
}
