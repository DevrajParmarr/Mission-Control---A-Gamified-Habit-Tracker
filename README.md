
---

# Discipline Yourself Buddy

**Discipline Yourself Buddy** is a productivity web application with a space-themed interface, designed to help users manage tasks, track progress, and stay motivated through gamification features like achievements, quizzes, daily challenges, and customizable themes. Built with HTML, CSS, and JavaScript, it offers a responsive design, a focus timer, a compact calendar, and analytics to boost productivity in an engaging way.

## Features

- **Task Management**:
  - Add, complete, or delete tasks with categories (Study, DSA, Development, Project, Habit, Other) and priority levels (High, Medium, Low).
  
- **Focus Timer**:
  - Engage with tasks using a Pomodoro-style timer to track focus time.
  - Time spent is logged per category and visualized in the analytics dashboard.
- **Compact Calendar**:
  - Displays a weekly view of task completion with a toggle to expand to a full-month view.
  - Visualizes streaks with constellation-like connections between active days.
- **Quiz System**:
  - Interactive quizzes on DSA, Web Development, and CSE topics with level progression and a 20-second timer per question.
  - Earn points for correct answers, with bonuses for quick responses.
- **Gamification**:
  - **Achievements**: Unlock badges for milestones like first task, perfect day, or 5-day streak.
  - **Daily Challenges**: Complete category-specific challenges to earn points and unlock themes.
  - **Themes**: Unlock and apply visual themes (Nebula, Galaxy, Aurora) for a personalized experience.
  - **Social Sharing**: Share achievements on Twitter.
  - **Motivational Nudges**: Hourly reminders to complete tasks if none are done.
- **Analytics Dashboard**:
  - Visualizes task completion rates and focus time by category using Chart.js.
- **Learning Resources**:
  - Displays random lessons on DSA, Web Dev, or CSE topics with code snippets and interview tips.
  - Shows motivational quotes from books like *Atomic Habits* and *Deep Work*.
- **Responsive Design**:
  - Optimized for both desktop and mobile devices with a clean, space-themed UI.
- **Sound Effects**:
  - Audio feedback for task completion, correct quiz answers, and achievement unlocks (placeholder URLs included).

## Demo


## Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, etc.).
- Optional: A local server (e.g., Live Server in VS Code) for development.
- No backend required; the app uses `localStorage` for data persistence.

### Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<devrajparmarr>/discipline-yourself-buddy.git
   cd discipline-yourself-buddy
   ```

2. **File Structure**:
   Ensure the following files are in your project directory:
   ```
   discipline-yourself-buddy/
   ├── index.html
   ├── styles.css
   ├── script.js
   ├── README.md
   ```

3. **Dependencies**:
   - The app uses external libraries included via CDN in `index.html`:
     - **Chart.js** (for analytics charts)
     - **Prism.js** (for code snippet highlighting)
   - No additional installations are required unless you want to host audio files locally (see Sound Effects below).

4. **Run the Application**:
   - Open `index.html` in a web browser directly, or
   - Use a local server (e.g., `Live Server` in VS Code) for a better development experience.

5. **Sound Effects**:
   - The app uses placeholder audio URLs from Freesound.org (`script.js`). To enable sound:
     - Replace URLs in the `playSound` function with local audio files or hosted URLs.
     - Example: Host `.mp3` files in a `/sounds` directory and update paths.
   - Alternatively, remove the `playSound` function if audio is not needed.

## Usage

1. **Add a Task**:
   - Enter a task name, select a category and priority, and click "Add Mission."
   - Tasks appear in the Mission Control section, sorted by priority.

2. **Engage with Tasks**:
   - Click "Engage" to start a focus timer for a task.
   - Use "Complete" to mark tasks as done or "Delete" to remove them.

3. **Track Progress**:
   - View task completion and streaks in the **Calendar** (toggle between week and month views).
   - Check focus time by category in the **Time Analysis** section.
   - Open the **Analytics Dashboard** for charts on completion rates and focus time.

4. **Learn and Quiz**:
   - Click "Lessons" to view a random lesson and take a quiz on DSA, Web Dev, or CSE.
   - Answer questions within 20 seconds to earn points and unlock achievements.

5. **Gamification**:
   - Complete tasks to unlock achievements and view them in the **Achievements** modal.
   - Complete daily challenges to earn points and unlock new themes.
   - Customize the app’s look by selecting a theme from the **Theme Selector**.

6. **Motivation**:
   - View random book quotes in the **Book Quotes** modal.
   - Check your streak and constellation badge in the **Constellation** modal.
   - Receive hourly nudge notifications if no tasks are completed.

7. **Weekly Report**:
   - Open the **Weekly Report** modal to review tasks, completion stats, and focus time for the week.

## File Structure

```
discipline-yourself-buddy/
├── index.html       # Main HTML file with structure and CDN dependencies
├── styles.css       # CSS for styling and responsive design
├── script.js        # JavaScript for logic, data, and interactivity
├── README.md        # Project documentation
```

### Key Files
- **index.html**: Defines the app’s structure, including modals, task input, calendar, and analytics.
- **styles.css**: Provides a space-themed, responsive design with animations and theme support.
- **script.js**: Contains all logic, including:
  - Data definitions (`quizData`, `achievementData`, etc.).
  - Task management, timer, calendar, quiz, and analytics functions.
  - Gamification features (achievements, daily challenges, themes).
  - Event listeners for UI interactions.

## Technologies Used

- **HTML5**: For the app’s structure.
- **CSS3**: For styling, animations, and responsive design.
- **JavaScript (ES6)**: For interactivity, state management, and `localStorage`.
- **Chart.js**: For rendering analytics charts.
- **Prism.js**: For syntax highlighting in lesson code snippets.
- **Freesound.org**: Placeholder audio for sound effects (replaceable).

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make changes and commit:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request with a detailed description of your changes.

### Ideas for Contributions
- Add new quiz questions or categories.
- Implement additional themes or animations.
- Enhance the analytics dashboard with more metrics.
- Add support for offline audio files or new sound effects.
- Improve accessibility (e.g., ARIA labels, keyboard navigation).

## Known Issues

- **Sound Effects**: Placeholder URLs from Freesound.org may not work reliably. Replace with local or hosted audio files for production.
- **Data Persistence**: The app uses `localStorage`, which has size limits. Consider a backend for larger datasets in future versions.
- **Mobile Testing**: While responsive, some mobile devices may need further CSS tweaks for optimal layout.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it.

## Acknowledgements

- Inspired by productivity apps like Todoist and Habitica.
- Uses [Chart.js](https://www.chartjs.org/) for analytics visualizations.
- Uses [Prism.js](https://prismjs.com/) for code syntax highlighting.
- Placeholder audio from [Freesound.org](https://freesound.org/).

## Contact

For questions or feedback, open an issue on GitHub or contact the maintainer at `<your-email>`.

---

### Notes
- **GitHub Hosting**: If you plan to host this on GitHub Pages, ensure the repository is public, and enable GitHub Pages in the repository settings (use the `main` branch and root directory).
- **Customization**: Update the repository URL, email, and any placeholders (e.g., `<your-username>`, `<your-email>`) with your actual details.
- **Audio Files**: The `playSound` function uses placeholder URLs. For production, host audio files in a `/sounds` directory or use a CDN, and update the paths in `script.js`.
- **Enhancements**: If you want to add features (e.g., user authentication, backend storage, or more quizzes), let me know, and I can guide you on implementing them.
