// Chart.js dark theme setup
Chart.defaults.color = 'hsl(228, 8%, 65%)';
Chart.defaults.borderColor = 'hsl(228, 15%, 25%)';

// Data for each industry
const industryData = {
    ecommerce: {
        kpi1: { value: '€48.2K', label: 'Revenue', status: 'good' },
        kpi2: { value: '3.4%', label: 'Conversion', status: 'warning' },
        kpi3: { value: '€89', label: 'Avg Order', status: 'good' },
        kpi4: { value: '68%', label: 'Cart Abandon', status: 'bad' },
        insight: {
            en: '<strong>68% cart abandonment</strong> = €31K in uncaptured monthly revenue. Recovering just 10% of abandoned carts = +€3.1K with no additional acquisition spend.',
            es: '<strong>68% abandono de carrito</strong> = €31K en ingresos potenciales sin capturar cada mes. Recuperar un 10% equivale a +€3.1K sin gasto de adquisición adicional.'
        },
        action: {
            en: 'Build an automated cart recovery email trigger + real-time abandonment monitor integrated with your CRM.',
            es: 'Construir un trigger automático de recuperación de carrito + monitor de abandono en tiempo real integrado con CRM.'
        },
        trendLabel: 'Revenue Trend',
        trendData: [35.2, 38.1, 40.5, 42.3, 45.1, 47.8, 48.2, 46.9, 49.1, 51.2, 52.8, 48.2],
        trendCategories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        breakdownLabel: 'Traffic Sources',
        breakdownType: 'doughnut',
        breakdownLabels: ['Organic', 'Paid', 'Email', 'Direct', 'Social'],
        breakdownData: [35, 28, 18, 12, 7]
    },
    saas: {
        kpi1: { value: '€22.6K', label: 'MRR', status: 'good' },
        kpi2: { value: '2.1%', label: 'Churn', status: 'warning' },
        kpi3: { value: '€-476', label: 'Churned MRR', status: 'bad' },
        kpi4: { value: '4.2x', label: 'LTV/CAC', status: 'good' },
        insight: {
            en: '<strong>2.1% monthly churn</strong> ≈ 22% annually. With LTV/CAC of 4.2x the model is sustainable, but each 0.1% churn reduction = +€226/month in retained MRR.',
            es: '<strong>Churn de 2.1% mensual</strong> ≈ 22% anual. Con LTV/CAC de 4.2x el negocio es sostenible, pero cada 0.1% de reducción de churn = +€226/mes en MRR retenido.'
        },
        action: {
            en: 'Instrument churn prediction models per cohort + build automated win-back campaigns for at-risk customers.',
            es: 'Instrumentar modelos de predicción de churn por cohorte + construir campañas automatizadas de retención para clientes en riesgo.'
        },
        trendLabel: 'MRR Growth',
        trendData: [15.2, 15.8, 16.4, 17.1, 18.3, 19.7, 20.8, 21.2, 21.9, 22.1, 22.4, 22.6],
        trendCategories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        breakdownLabel: 'Revenue by Plan',
        breakdownType: 'bar',
        breakdownLabels: ['Starter', 'Growth', 'Pro', 'Enterprise'],
        breakdownData: [18, 45, 27, 10]
    },
    ops: {
        kpi1: { value: '94%', label: 'On-time', status: 'good' },
        kpi2: { value: '6.2h', label: 'Avg Processing', status: 'warning' },
        kpi3: { value: '4.2%', label: 'Returns', status: 'warning' },
        kpi4: { value: '47', label: 'Backlog Orders', status: 'bad' },
        insight: {
            en: '<strong>64% of delays are internal</strong> (stock + processing). Optimizing these two factors could raise on-time delivery from 94% to 97%+, reducing complaints and support costs.',
            es: '<strong>64% de retrasos son internos</strong> (stock + procesamiento). Optimizar estas dos causas podría elevar on-time del 94% al 97%+, reduciendo reclamaciones y costos.'
        },
        action: {
            en: 'Implement inventory forecasting + process mining to identify bottlenecks and automate stock alerts.',
            es: 'Implementar pronóstico de inventario + process mining para identificar cuellos de botella y alertas automáticas de stock.'
        },
        trendLabel: 'Volume & Cost Trend',
        trendDataLabel: 'Orders/Cost',
        trendData: [285, 298, 312, 328, 335, 340, 338, 342, 348, 345, 350, 340],
        trendCostData: [12.80, 12.65, 12.42, 12.15, 12.05, 12.40, 12.55, 12.35, 12.10, 12.25, 12.15, 12.40],
        trendCategories: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'],
        breakdownLabel: 'Delay Causes',
        breakdownType: 'doughnut',
        breakdownLabels: ['Carrier Delay', 'Stock Issues', 'Processing', 'Weather', 'Other'],
        breakdownData: [38, 26, 19, 11, 6]
    }
};

// Initialize charts
let trendChart, breakdownChart;
const breakdownCtx = document.getElementById('chart-breakdown').getContext('2d');
let trendCtx = document.getElementById('chart-trend').getContext('2d');

function buildTrendChartConfig(data) {
    if (data.trendCostData) {
        // Dual axis for Operations
        return {
            type: 'line',
            data: {
                labels: data.trendCategories,
                datasets: [
                    {
                        label: 'Orders',
                        data: data.trendData,
                        borderColor: 'hsl(210, 100%, 70%)',
                        backgroundColor: 'hsla(210, 100%, 70%, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true,
                        pointBackgroundColor: 'hsl(210, 100%, 70%)',
                        pointBorderWidth: 0,
                        pointRadius: 4,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Cost €',
                        data: data.trendCostData,
                        borderColor: 'hsl(210, 56%, 35%)',
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        tension: 0.4,
                        pointBackgroundColor: 'hsl(210, 56%, 35%)',
                        pointBorderWidth: 0,
                        pointRadius: 3,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                interaction: { mode: 'index', intersect: false },
                plugins: {
                    legend: { display: true, position: 'top' }
                },
                scales: {
                    y: {
                        type: 'linear',
                        position: 'left',
                        grid: { color: 'hsl(228, 15%, 22%)' },
                        title: { display: true, text: 'Orders' }
                    },
                    y1: {
                        type: 'linear',
                        position: 'right',
                        grid: { drawOnChartArea: false },
                        title: { display: true, text: 'Cost €' }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        };
    } else {
        // Single axis for E-commerce & SaaS
        return {
            type: 'line',
            data: {
                labels: data.trendCategories,
                datasets: [{
                    label: 'Value',
                    data: data.trendData,
                    borderColor: 'hsl(210, 100%, 70%)',
                    backgroundColor: 'hsla(210, 100%, 70%, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'hsl(210, 100%, 70%)',
                    pointBorderWidth: 0,
                    pointRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: { color: 'hsl(228, 15%, 22%)' }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        };
    }
}

function buildBreakdownChartConfig(data) {
    const chartType = data.breakdownType;
    const config = {
        data: {
            labels: data.breakdownLabels,
            datasets: [{
                data: data.breakdownData,
                backgroundColor: [
                    'hsl(210, 100%, 70%)',
                    'hsl(210, 56%, 35%)',
                    'hsla(210, 100%, 70%, 0.6)',
                    'hsla(210, 56%, 35%, 0.6)',
                    'hsla(210, 100%, 70%, 0.4)'
                ].slice(0, data.breakdownData.length),
                borderColor: 'hsl(228, 15%, 15%)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label(ctx) {
                            const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                            const pct = ((ctx.parsed / total) * 100).toFixed(1);
                            return `${ctx.label}: ${pct}%`;
                        }
                    }
                },
                legend: {
                    display: chartType === 'doughnut',
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: { size: 12 }
                    }
                }
            }
        }
    };

    if (chartType === 'bar') {
        config.type = 'bar';
        config.options.indexAxis = 'y';
        config.options.plugins.legend.display = false;
    } else {
        config.type = 'doughnut';
    }

    return config;
}

function initCharts() {
    const data = industryData.ecommerce;

    trendCtx = document.getElementById('chart-trend').getContext('2d');
    trendChart = new Chart(trendCtx, buildTrendChartConfig(data));
    breakdownChart = new Chart(breakdownCtx, buildBreakdownChartConfig(data));
}

function switchIndustry(industry) {
    const data = industryData[industry];

    // Update KPIs with status
    const cards = document.querySelectorAll('.metric-card');
    for (let i = 0; i < 4; i++) {
        const kpiKey = `kpi${i+1}`;
        const kpiData = data[kpiKey];
        cards[i].querySelector('[data-metric]').textContent = kpiData.value;
        cards[i].querySelector('[data-metric-label]').textContent = kpiData.label;
        cards[i].dataset.status = kpiData.status;
    }

    // Update insight narrative and action
    document.getElementById('insight-text').innerHTML = data.insight[currentLang];
    document.getElementById('insight-action').innerHTML = data.action[currentLang];

    // Recreate trend chart (needed for dual axis in Operations)
    if (trendChart) {
        trendChart.destroy();
    }
    trendCtx = document.getElementById('chart-trend').getContext('2d');
    trendChart = new Chart(trendCtx, buildTrendChartConfig(data));

    // Recreate breakdown chart (needed for type change: doughnut vs bar)
    if (breakdownChart) {
        breakdownChart.destroy();
    }
    breakdownChart = new Chart(breakdownCtx, buildBreakdownChartConfig(data));

    // Update chart titles
    document.querySelectorAll('[data-chart-title]').forEach(el => {
        const type = el.dataset.chartTitle;
        if (type === 'trend') {
            el.textContent = data.trendLabel;
        } else if (type === 'breakdown') {
            el.textContent = data.breakdownLabel;
        }
    });

    // Update active button
    document.querySelectorAll('.industry-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-industry="${industry}"]`).classList.add('active');

    // Apply language to new labels
    applyLanguage(currentLang);
}

// Language handling
let currentLang = localStorage.getItem('lang') || 'en';

function applyLanguage(lang) {
    document.querySelectorAll('[data-lang-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-lang-${lang}`);
    });

    // Update insight action text
    const currentIndustry = document.querySelector('.industry-btn.active').dataset.industry;
    const actionEl = document.getElementById('insight-action');
    if (actionEl && industryData[currentIndustry]) {
        actionEl.innerHTML = industryData[currentIndustry].action[lang];
    }

    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
}

// Compare toggle
function toggleCompare() {
    const panel = document.getElementById('compare-panel');
    const btn = document.getElementById('compare-btn');
    panel.hidden = !panel.hidden;
    btn.classList.toggle('active');
}

// TOC scroll spy
function updateTOC() {
    const sections = ['dashboard', 'what-this-shows', 'how-it-works', 'insight'];
    let current = sections[0];

    for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top < window.innerHeight / 2) {
            current = section;
        }
    }

    document.querySelectorAll('.cs-toc__item--h2 > a').forEach(link => {
        link.classList.remove('toc-active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('toc-active');
        }
    });
}

// Event listeners
document.querySelectorAll('.industry-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        switchIndustry(btn.dataset.industry);
    });
});

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        applyLanguage(btn.dataset.lang);
    });
});

document.getElementById('compare-btn')?.addEventListener('click', toggleCompare);

window.addEventListener('scroll', updateTOC);

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
    initCharts();

    // Initialize insight with current language
    const currentIndustry = document.querySelector('.industry-btn.active').dataset.industry;
    document.getElementById('insight-text').innerHTML = industryData[currentIndustry].insight[currentLang];
    document.getElementById('insight-action').innerHTML = industryData[currentIndustry].action[currentLang];

    applyLanguage(currentLang);
    updateTOC();
});
