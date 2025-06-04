// src/components/shared/button.js

export function createButton(label, onClick) {
    const button = document.createElement('button');
    button.textContent = label;
    button.className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
    button.onclick = onClick;
    return button;
}