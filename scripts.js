
document.addEventListener('DOMContentLoaded', () => {
    const data = {
        supervisors: [
            'Sandra Lopez', 'Oscar Estrada', 'No Reportado', 'Berenice Savin',
            'Rosalio Landin', 'Jaen Delgado', 'Julio Salas', 'Maria Ramirez',
            'Nery Arevalo', 'Jorge Hernandez', 'Luis Diaz', 'Antonio Zepeda',
            'Ricardo Rueda', 'Noe Garces', 'Jorge Ponce'
        ],
        percentages: [
            100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00,
            98.97, 98.56, 97.70, 97.06, 89.67, 86.60, 75.00
        ]
    };

    const colors = data.percentages.map(percentage => {
        if (percentage >= 90) {
            return '#28a745'; // Verde para porcentaje de 90% a 100%
        } else if (percentage >= 80) {
            return '#ffc107'; // Naranja para porcentaje de 80% a 89%
        } else {
            return '#dc3545'; // Rojo para porcentaje de 0% a 79%
        }
    });

    const chartConfig = {
        type: 'bar',
        data: {
            labels: data.supervisors,
            datasets: [{
                data: data.percentages,
                backgroundColor: colors,
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return '% Codigo Verificador: ' + context.parsed.y.toFixed(2) + '%';
                        }
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false // Oculta las líneas de cuadrícula en el eje X
                    }
                }
            },
            legend: {
                display: false
            },
            title: {
                display: true,
                text: '% Codigo Verificador de cada supervisor',
                font: {
                    size: 16,
                    weight: 'bold'
                }
            }
        }
    };

    const ctx = document.getElementById('codigoVerificadorChart').getContext('2d');
    new Chart(ctx, chartConfig);
});

document.addEventListener('DOMContentLoaded', () => {
    const data = {
        supervisors: [
            'Jorge Ponce', 'Rosalio Landin', 'Nery Arevalo', 'Antonio Zepeda',
            'Oscar Estrada', 'Ricardo Rueda', 'Noe Garces', 'Berenice Savin',
            'Luis Diaz', 'Jorge Hernandez', 'Sandra Lopez', 'Jaen Delgado',
            'Julio Salas', 'Maria Ramirez'
        ],
        percentages: [
            28.99, 21.43, 14.63, 12.30, 11.46, 9.74, 8.74, 8.70,
            7.81, 7.51, 7.14, 5.26, 4.00, 0.00
        ]
    };

    const colors = data.percentages.map(percentage => {
        if (percentage <= 5.5) {
            return '#28a745'; // Verde para porcentaje de 0% a 5.5%
        } else if (percentage <= 6.5) {
            return '#ffc107'; // Naranja para porcentaje de 5.6% a 6.5%
        } else {
            return '#dc3545'; // Rojo para porcentaje de 6.6% a 100%
        }
    });

    const chartConfig = {
        type: 'bar',
        data: {
            labels: data.supervisors,
            datasets: [{
                data: data.percentages,
                backgroundColor: colors,
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return '% FPD M1: ' + context.parsed.y.toFixed(2) + '%';
                        }
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false // Oculta las líneas de cuadrícula en el eje X
                    }
                }
            },
            legend: {
                display: false
            },
            title: {
                display: true,
                text: '% FPD M1 de cada supervisor',
                font: {
                    size: 16,
                    weight: 'bold'
                }
            }
        }
    };

    const ctx = document.getElementById('channelSessionsChart').getContext('2d');
    new Chart(ctx, chartConfig);
});

document.addEventListener('DOMContentLoaded', () => {
    const data = {
        supervisors: [
            'Ricardo Rueda', 'Noe Garces', 'Nery Arevalo', 'Jorge Hernandez',
            'Luis Diaz', 'Jaen Delgado', 'Antonio Zepeda', 'Oscar Estrada',
            'Jorge Ponce', 'Berenice Savin', 'Sandra Lopez', 'Rosalio Landin',
            'Julio Salas', 'Sergio Sanchez', 'Maria Ramirez'
        ],
        shared: [
            12, 6, 4, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0
        ]
    };

    const colors = data.shared.map(shared => {
        if (shared <= 1) {
            return '#28a745'; // Verde para compartidos de 0 a 1
        } else if (shared <= 4) {
            return '#ffc107'; // Naranja para compartidos de 2 a 4
        } else {
            return '#dc3545'; // Rojo para compartidos de 5 a 100
        }
    });

    const chartConfig = {
        type: 'bar',
        data: {
            labels: data.supervisors,
            datasets: [{
                data: data.shared,
                backgroundColor: colors,
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Compartidos: ' + context.parsed.y;
                        }
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                },
                x: {
                    grid: {
                        display: false // Oculta las líneas de cuadrícula en el eje X
                    }
                }
            },
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Usuarios compartidos por supervisor',
                font: {
                    size: 16,
                    weight: 'bold'
                }
            }
        }
    };

    const ctx = document.getElementById('sessionsChart').getContext('2d');
    new Chart(ctx, chartConfig);
});
document.addEventListener('DOMContentLoaded', () => {
    const data = {
        supervisors: [
            'Rosalio Landin', 'Maria Ramirez', 'Antonio Zepeda', 'Oscar Estrada',
            'Nery Arevalo', 'Jorge Hernandez', 'Luis Diaz', 'Ricardo Rueda',
            'Jaen Delgado', 'Julio Salas', 'Noe Garces', 'Jorge Ponce', 'Sandra Lopez'
        ],
        notDone: [
            100.00, 100.00, 92.31, 87.50, 85.90, 81.58, 81.25, 72.89,
            67.05, 66.67, 64.74, 54.55, 50.00
        ]
    };

    const colors = data.notDone.map(notDone => {
        if (notDone <= 79) {
            return '#dc3545'; // Rojo para Not Done de 0% a 79%
        } else if (notDone <= 85) {
            return '#ffc107'; // Naranja para Not Done de 80% a 85%
        } else {
            return '#28a745'; // Verde para Not Done de 90% a 100%
        }
    });

    const chartConfig = {
        type: 'bar',
        data: {
            labels: data.supervisors,
            datasets: [{
                data: data.notDone,
                backgroundColor: colors,
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return '% Not Done: ' + context.parsed.y.toFixed(2) + '%';
                        }
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false // Oculta las líneas de cuadrícula en el eje X
                    }
                }
            },
            legend: {
                display: false
            },
            title: {
                display: true,
                text: '% Not Done de cada supervisor',
                font: {
                    size: 16,
                    weight: 'bold'
                }
            }
        }
    };

    const ctx = document.getElementById('pageviewsChart').getContext('2d');
    new Chart(ctx, chartConfig);
});

document.addEventListener('DOMContentLoaded', () => {
    const data = {
        supervisors: [
            'Ricardo Rueda', 'Nery Arevalo', 'Noe Garces', 'Jorge Hernandez',
            'Jaen Delgado', 'Luis Diaz', 'Antonio Zepeda', 'Rosalio Landin',
            'Jorge Ponce', 'Julio Salas'
        ],
        noFirmo: [
            87, 22, 12, 12, 9, 4, 3, 1, 1, 1
        ]
    };

    const colors = data.noFirmo.map(noFirmo => {
        if (noFirmo <= 2) {
            return '#28a745'; // Verde para No Firmo de 1 a 2
        } else if (noFirmo <= 5) {
            return '#ffc107'; // Naranja para No Firmo de 3 a 5
        } else {
            return '#dc3545'; // Rojo para No Firmo de 6 a 100
        }
    });

    const chartConfig = {
        type: 'bar',
        data: {
            labels: data.supervisors,
            datasets: [{
                data: data.noFirmo,
                backgroundColor: colors,
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'No Firmo: ' + context.parsed.y;
                        }
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                },
                x: {
                    grid: {
                        display: false // Oculta las líneas de cuadrícula en el eje X
                    }
                }
            },
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'No Firmo en Redes Sociales por supervisor',
                font: {
                    size: 16,
                    weight: 'bold'
                }
            }
        }
    };

    const ctx = document.getElementById('sessionsByDeviceChart').getContext('2d');
    new Chart(ctx, chartConfig);
});
