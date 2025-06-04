# Berqurban Bersama UNP Peduli

## Project Overview
"Berqurban Bersama UNP Peduli" is an interactive web dashboard designed to provide users with a comprehensive view of the Qurban activities organized by UNP. The dashboard features various components that allow users to navigate through different sections, view statistics, and interact with the content.

## Features
- **Responsive Design**: The dashboard is built using Tailwind CSS, ensuring a responsive layout that works on various devices.
- **Interactive Components**: Includes a navigation bar, sidebar, and statistics cards that provide real-time data and animations.
- **Countdown Timer**: A countdown timer to the next Qurban event.
- **Reusable Components**: Utilizes shared components for buttons and cards to maintain consistency across the dashboard.

## Project Structure
```
berqurban-dashboard
├── src
│   ├── assets
│   │   ├── css
│   │   │   └── style.css
│   │   └── js
│   │       └── main.js
│   ├── components
│   │   ├── dashboard
│   │   │   ├── navbar.js
│   │   │   ├── sidebar.js
│   │   │   └── stats.js
│   │   └── shared
│   │       ├── button.js
│   │       └── card.js
│   ├── layouts
│   │   └── dashboard.html
│   ├── pages
│   │   ├── auth
│   │   │   ├── register.html
│   │   │   └── login.html
│   │   └── dashboard.html
│   └── utils
│       └── helpers.js
├── tailwind.config.js
├── package.json
├── index.html
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd berqurban-dashboard
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Usage
- Open `index.html` in your browser to view the dashboard.
- Use the navigation bar and sidebar to explore different sections of the dashboard.

## Acknowledgments
- This project utilizes Tailwind CSS for styling and various JavaScript libraries for enhanced functionality.
