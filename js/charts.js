// Chart.js configuration and initialization
document.addEventListener('DOMContentLoaded', function() {
    // Common chart options
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: '#f3f4f6'
                },
                ticks: {
                    color: '#6b7280'
                }
            },
            x: {
                grid: {
                    color: '#f3f4f6'
                },
                ticks: {
                    color: '#6b7280'
                }
            }
        }
    };

    // Growing Two-Wheeler Demand Chart
    const demandCtx = document.getElementById('demandChart');
    if (demandCtx) {
        new Chart(demandCtx, {
            type: 'line',
            data: {
                labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
                datasets: [{
                    label: 'Market Growth (%)',
                    data: [8, 12, 15, 18, 22, 28],
                    borderColor: '#1e40af',
                    backgroundColor: 'rgba(30, 64, 175, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    ...commonOptions.scales,
                    y: {
                        ...commonOptions.scales.y,
                        title: {
                            display: true,
                            text: 'Growth %',
                            color: '#6b7280'
                        }
                    }
                }
            }
        });
    }

    // Service Market Growth Chart
    const serviceCtx = document.getElementById('serviceChart');
    if (serviceCtx) {
        new Chart(serviceCtx, {
            type: 'doughnut',
            data: {
                labels: ['Unorganized', 'Organized', 'Opportunity'],
                datasets: [{
                    data: [70, 20, 10],
                    backgroundColor: [
                        '#ef4444',
                        '#10b981',
                        '#f97316'
                    ],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            color: '#6b7280',
                            padding: 15
                        }
                    }
                }
            }
        });
    }

    // Spare Parts Demand Chart
    const partsCtx = document.getElementById('partsChart');
    if (partsCtx) {
        new Chart(partsCtx, {
            type: 'bar',
            data: {
                labels: ['2022', '2023', '2024', '2025', '2026'],
                datasets: [{
                    label: 'Market Size (₹ Crores)',
                    data: [1200, 1350, 1500, 1680, 1880],
                    backgroundColor: '#3b82f6',
                    borderColor: '#1e40af',
                    borderWidth: 2,
                    borderRadius: 4
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    ...commonOptions.scales,
                    y: {
                        ...commonOptions.scales.y,
                        title: {
                            display: true,
                            text: 'Market Size (₹ Crores)',
                            color: '#6b7280'
                        }
                    }
                }
            }
        });
    }

    // Accessories Market Potential Chart
    const accessoriesCtx = document.getElementById('accessoriesChart');
    if (accessoriesCtx) {
        new Chart(accessoriesCtx, {
            type: 'radar',
            data: {
                labels: ['Urban', 'Semi-Urban', 'Rural', 'Tier-2', 'Tier-3', 'Villages'],
                datasets: [{
                    label: 'Current Penetration %',
                    data: [80, 45, 20, 35, 25, 15],
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    borderWidth: 2
                }, {
                    label: 'Potential %',
                    data: [90, 75, 60, 70, 65, 50],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            color: '#6b7280',
                            padding: 15
                        }
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: '#f3f4f6'
                        },
                        pointLabels: {
                            color: '#6b7280'
                        },
                        ticks: {
                            color: '#6b7280',
                            backdropColor: 'transparent'
                        }
                    }
                }
            }
        });
    }

    // Revenue Streams Visualization (if needed)
    const revenueData = {
        'Service Revenue': 35,
        'Spare Parts Sales': 30,
        'Bike Sales': 25,
        'Manufacturing': 10
    };

    // Add hover effects to revenue stream cards
    const streamCards = document.querySelectorAll('.stream-card');
    streamCards.forEach((card, index) => {
        const colors = ['#1e40af', '#3b82f6', '#60a5fa', '#93c5fd'];
        
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = colors[index];
            this.style.color = '#ffffff';
            this.style.transform = 'translateY(-4px) scale(1.05)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#f9fafb';
            this.style.color = '';
            this.style.transform = 'translateY(-2px) scale(1)';
        });
    });

    // Animate charts when they come into view
    const chartElements = document.querySelectorAll('.chart-container');
    
    const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.3
    });

    chartElements.forEach(chart => {
        chart.style.opacity = '0';
        chart.style.transform = 'translateY(30px)';
        chart.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        chartObserver.observe(chart);
    });
});