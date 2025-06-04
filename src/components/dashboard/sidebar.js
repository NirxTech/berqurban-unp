// src/components/dashboard/sidebar.js

export function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.className = 'bg-gray-800 text-white w-64 h-full p-5';

    const title = document.createElement('h2');
    title.className = 'text-lg font-bold mb-4';
    title.textContent = 'Dashboard Menu';
    sidebar.appendChild(title);

    const menuItems = [
        { name: 'Home', link: 'index.html' },
        { name: 'Dashboard', link: 'dashboard.html' },
        { name: 'Statistics', link: 'stats.html' },
        { name: 'Settings', link: 'settings.html' },
    ];

    const ul = document.createElement('ul');
    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'my-2';
        const a = document.createElement('a');
        a.href = item.link;
        a.className = 'text-gray-300 hover:text-white';
        a.textContent = item.name;
        li.appendChild(a);
        ul.appendChild(li);
    });

    sidebar.appendChild(ul);
    return sidebar;
}