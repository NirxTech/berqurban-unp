// src/components/shared/card.js

export function createCard(title, content) {
    const card = document.createElement('div');
    card.className = 'bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105';

    const cardTitle = document.createElement('h3');
    cardTitle.className = 'text-lg font-semibold mb-2';
    cardTitle.textContent = title;

    const cardContent = document.createElement('p');
    cardContent.className = 'text-gray-700';
    cardContent.textContent = content;

    card.appendChild(cardTitle);
    card.appendChild(cardContent);

    return card;
}