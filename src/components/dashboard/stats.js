// src/components/dashboard/stats.js

export function createStats() {
    const statsContainer = document.createElement('div');
    statsContainer.className = 'grid grid-cols-1 md:grid-cols-3 gap-4 p-4';

    const statsData = [
        { title: 'Participants', value: 120, animation: 'countUp' },
        { title: 'Total Cost', value: '$5,000', animation: 'countUp' },
        { title: 'Events Held', value: 15, animation: 'countUp' }
    ];

    statsData.forEach(stat => {
        const statCard = document.createElement('div');
        statCard.className = 'bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105';
        
        const statTitle = document.createElement('h3');
        statTitle.className = 'text-lg font-semibold text-gray-700';
        statTitle.textContent = stat.title;

        const statValue = document.createElement('p');
        statValue.className = 'text-2xl font-bold text-blue-600';
        statValue.textContent = stat.value;

        statCard.appendChild(statTitle);
        statCard.appendChild(statValue);
        statsContainer.appendChild(statCard);
    });

    return statsContainer;
}