var ctx = document.getElementById("chartLine").getContext("2d");

var gradient = ctx.createLinearGradient(2, 10, 10, 120);
gradient.addColorStop(0, "rgba(93, 135, 255, 0.3)");
gradient.addColorStop(1, "rgba(93, 135, 255, 0)");

const chartLine = new Chart(ctx, {
    type: "line",
    data: {
    labels: [
        "Usia 1-10",
        "Usia 11-20",
        "Usia 21-30",
        "Usia 30-55",
        "Lansia",
    ],
    datasets: [
        {
        label: "Laki -laki",
        data: [
            450, 300, 600, 400, 600,
        ],
        backgroundColor: gradient,
        borderColor: "rgba(93, 135, 255, 1)",
        borderWidth: 1,
        fill: true,
        tension: 0.4,
        },
        {
        label: "Perempuan",
        data: [
            350, 400, 500, 300, 500,
        ],
        backgroundColor: gradient,
        borderColor: "rgba(255, 93, 220, 1)",
        borderWidth: 1,
        fill: true,
        tension: 0.4,
        },
    ],
    },
    options: {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
        point: {
        radius: 0,
        hitRadius: 10,
        },
    },
    plugins: {
        legend: {
        display: false,
        },
    },
    scales: {
        y: {
        grid: {
            color: "rgb(209 213 219)",
            display: true,
        },
        border: {
            dash: [2, 4],
        },
        ticks: {
            color: "rgb(51 65 85)",
            beginAtZero: true,
        },
        },
        x: {
        grid: {
            color: "rgb(209 213 219)",
            display: false,
        },
        border: {
            dash: [2, 4],
        },
        ticks: {
            color: "rgb(51 65 85)",
            beginAtZero: true,
        },
        },
    },
    },
});