document.addEventListener('DOMContentLoaded', () => {
    // Check authentication first
    checkAuth();
    
    // Initialize components
    initializeStats();
    initializeCharts();
    initializeCountdown();
    loadRecentParticipants();
});

function initializeStats() {
    // Animate participant count
    new CountUp('pesertaCount', 0, 56, 0, 2.5, {
        separator: ''
    }).start();

    // Animate total amount
    new CountUp('biayaCount', 0, 112000000, 0, 2.5, {
        prefix: 'Rp ',
        separator: '.'
    }).start();
}

function initializeCharts() {
    // Monthly contributions chart
    const ctx = document.getElementById('potonganChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'],
            datasets: [{
                label: 'Total Potongan Gaji (Juta Rupiah)',
                data: [9.3, 9.3, 9.3, 9.3, 9.3, 9.3, 9.3, 9.3, 9.3, 9.3, 9.3, 9.3],
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
                borderColor: 'rgb(59, 130, 246)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            }
        }
    });
}

function initializeCountdown() {
    const targetDate = new Date('2025-06-17T00:00:00');

    function updateCountdown() {
        const now = new Date();
        const difference = targetDate - now;

        document.getElementById('days').textContent = Math.floor(difference / (1000 * 60 * 60 * 24));
        document.getElementById('hours').textContent = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('minutes').textContent = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('seconds').textContent = Math.floor((difference % (1000 * 60)) / 1000);
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
}

function loadRecentParticipants() {
    const participants = [
        { name: 'Dr. Ahmad Syafiq', position: 'Dosen', amount: 'Rp 2.000.000' },
        { name: 'Siti Aminah, M.Pd', position: 'Dosen', amount: 'Rp 2.000.000' },
        { name: 'Budi Santoso', position: 'Karyawan', amount: 'Rp 1.500.000' },
        { name: 'Dewi Kartika', position: 'Staff TU', amount: 'Rp 1.500.000' },
    ];

    const tbody = document.getElementById('participantsList');
    participants.forEach(participant => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${participant.name}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${participant.position}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${participant.amount}</td>
        `;
        tbody.appendChild(row);
    });
}