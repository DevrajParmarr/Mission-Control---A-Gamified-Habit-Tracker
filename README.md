# Project Report: Mission Control – A Gamified Habit Tracker

---

## 1. Project Overview

Mission Control is a web-based application designed to transform the mundane task of tracking daily habits into an engaging, immersive, and motivating experience. By leveraging a rich space exploration theme, the application gamifies the process of building consistency. The core philosophy is to make progress feel like a rewarding journey of discovery, encouraging users to return daily not just to check boxes, but to expand their own personal galaxy.

---

## 2. Key Features

- **Thematic "Mission Control" UI:**  
  Fully themed interface with a dynamic, animated starfield background (gently rotating stars, occasional shooting stars). UI panels use a "glassmorphism" effect to appear as holographic displays on a starship bridge.

- **Gamified Progress – The Star Chart:**  
  The central gamification mechanic is the "Star Chart" (calendar).
    - **Ignite Stars:** Completing at least one mission on any given day ignites a pulsing star on the chart.
    - **Reveal Nebulae:** Completing all missions on a given day reveals a beautiful nebula behind the star, marking a day of perfect execution.
    - **Discover Constellations:** Maintaining streaks of 3, 5, or 7 days automatically connects the stars on the chart, forming and naming a new constellation to visually reward consistency.

- **Daily Content Hubs:**  
  To encourage daily engagement, the app provides two content sections that update automatically each day:
    - **Daily Briefing:** Short, insightful lessons on technical topics (DSA, Web Dev, Core CSE).
    - **Library:** A summary or powerful quote from a well-known self-help or productivity book.

- **Local Data Persistence:**  
  All user data, including missions, progress history, and discovered streaks, is saved directly in the user's browser via `localStorage`, ensuring their progress is always preserved between sessions.

---

## 3. System Architecture

- **Frontend Stack:**
  - **HTML5:** Core structure and semantics.
  - **CSS3:** Styling, layout, and animations. Uses CSS Grid, Flexbox, and CSS Variables for responsiveness and maintainability.
  - **Vanilla JavaScript (ES6+):** Application logic, DOM manipulation, event handling, and canvas animation. No external frameworks or libraries.
  - **Data Storage:** Uses the browser's `localStorage` API as the sole data store, making the application serverless and fully functional offline.

---
