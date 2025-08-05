// Data Definitions
const planetIcons = {
    study: '📚',
    DSA: '💻',
    Development: '⚙️',
    project: '🚀',
    habit: '🌱',
    other: '🌌'
};

const motivationalQuotes = [
    'The journey of a thousand miles begins with a single step.',
    'Discipline is the bridge between goals and accomplishment.',
    'Your only limit is you.'
];

const bookQuotes = [
    { title: 'Atomic Habits', quote: 'You do not rise to the level of your goals. You fall to the level of your systems.', author: 'James Clear' },
    { title: 'Deep Work', quote: 'To produce at your peak level you need to work for extended periods with full concentration.', author: 'Cal Newport' }
];

const dsaTopics = [
    { title: 'Binary Search', content: 'A search algorithm that divides the search interval in half repeatedly.', code: 'function binarySearch(arr, target) {\n    let left = 0, right = arr.length - 1;\n    while (left <= right) {\n        let mid = Math.floor((left + right) / 2);\n        if (arr[mid] === target) return mid;\n        if (arr[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}', interviewTip: 'Explain how it reduces time complexity to O(log n).' }
];

const webDevTopics = [
    { title: 'Flexbox', content: 'A CSS layout model for arranging items in a container.', code: '.container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}', interviewTip: 'Discuss how Flexbox simplifies responsive design.' }
];

const cseTopics = [
    { title: 'Operating System', content: 'System software that manages computer hardware and software resources.', interviewTip: 'Explain process vs. thread in interviews.' }
];

const quizData = [
    { category: 'DSA', level: 1, question: 'What is the time complexity of binary search?', options: ['O(n)', 'O(log n)', 'O(n^2)', 'O(1)'], correct: 'O(log n)', explanation: 'Binary search divides the search space in half each step.' },
    { category: 'DSA', level: 2, question: 'What is the worst-case time complexity of quicksort?', options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'], correct: 'O(n^2)', explanation: 'Quicksort’s worst case occurs with a bad pivot choice.' },
    { category: 'Web Dev', level: 1, question: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Creative Style System', 'Computer Style Sheets', 'Colorful Style Syntax'], correct: 'Cascading Style Sheets', explanation: 'CSS styles web pages.' },
    { category: 'Web Dev', level: 2, question: 'What is the purpose of the z-index property in CSS?', options: ['Set font size', 'Control stacking order', 'Adjust margins', 'Change colors'], correct: 'Control stacking order', explanation: 'z-index controls element layering.' },
    { category: 'CSE', level: 1, question: 'What is an operating system?', options: ['A hardware component', 'A programming language', 'System software', 'A database'], correct: 'System software', explanation: 'It manages hardware and software resources.' },
    { category: 'CSE', level: 2, question: 'What is virtual memory?', options: ['Physical RAM', 'CPU cache', 'Memory abstraction using disk', 'GPU memory'], correct: 'Memory abstraction using disk', explanation: 'It uses disk space as an extension of RAM.' }
];

const achievementData = [
    { id: 'first_task', name: 'First Mission', description: 'Added your first mission!', icon: '🚀' },
    { id: 'perfect_day', name: 'Perfect Day', description: 'Completed all tasks in a day!', icon: '🌟' },
    { id: 'streak_5', name: 'Streak Starter', description: 'Achieved a 5-day streak!', icon: '🔥' },
    { id: 'focus_hour', name: 'Focus Master', description: 'Focused for an hour!', icon: '⏱️' },
    { id: 'quiz_level_1', name: 'Quiz Novice', description: 'Reached quiz level 1!', icon: '🧠' },
    { id: 'quiz_level_2', name: 'Quiz Adept', description: 'Reached quiz level 2!', icon: '🌟' },
    { id: 'quiz_ace', name: 'Quiz Master', description: 'Answered a quiz question correctly!', icon: '🏆' }
];

const constellationData = [
    { name: 'Orion', description: 'A prominent constellation symbolizing strength.' },
    { name: 'Ursa Major', description: 'The Great Bear, guiding you through the night.' }
];

const themes = [
    { id: 'nebula', name: 'Nebula', colors: { '--glow-cyan': '#22d3ee', '--glow-purple': '#c084fc' } },
    { id: 'galaxy', name: 'Galaxy', colors: { '--glow-cyan': '#06b6d4', '--glow-purple': '#8b5cf6' } },
    { id: 'aurora', name: 'Aurora', colors: { '--glow-cyan': '#10b981', '--glow-purple': '#d946ef' } }
];

// State Variables
let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
let completionHistory = JSON.parse(localStorage.getItem('completionHistory') || '{}');
let timeLog = JSON.parse(localStorage.getItem('timeLog') || '{}');
let achievements = JSON.parse(localStorage.getItem('achievements') || '[]');
let discoveredStreaks = JSON.parse(localStorage.getItem('discoveredStreaks') || '[]');
let userLevel = parseInt(localStorage.getItem('userLevel') || '1');
let currentStreak = 0;
let activeTimerTaskId = null;
let timerSeconds = 0;
let timerInterval = null;
let completionChartInstance = null;
let categoryChartInstance = null;
let quizState = {
    score: parseInt(localStorage.getItem('quizScore') || '0'),
    currentLevel: parseInt(localStorage.getItem('quizLevel') || '1'),
    currentQuestion: null,
    timeLeft: 20,
    timer: null
};
let unlockedThemes = JSON.parse(localStorage.getItem('unlockedThemes') || '["nebula"]');

// Save Data
function saveData() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('completionHistory', JSON.stringify(completionHistory));
    localStorage.setItem('timeLog', JSON.stringify(timeLog));
    localStorage.setItem('achievements', JSON.stringify(achievements));
    localStorage.setItem('discoveredStreaks', JSON.stringify(discoveredStreaks));
    localStorage.setItem('userLevel', userLevel);
}

// Starfield Animation
function initStarfield() {
    const canvas = document.getElementById('starfield-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const stars = Array.from({ length: 100 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.5 + 0.1
    }));
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
            star.y += star.speed;
            if (star.y > canvas.height) star.y = 0;
        });
        requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Utility Functions
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

function showLoading() {
    document.getElementById('loadingSpinner').classList.add('show');
}

function hideLoading() {
    setTimeout(() => document.getElementById('loadingSpinner').classList.remove('show'), 500);
}

function showModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
}

function hideModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

// Task Management
function getDayOfYear() {
    return Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const categorySelect = document.getElementById('categorySelect');
    const prioritySelect = document.getElementById('prioritySelect');
    if (!taskInput.value.trim()) {
        showNotification('Please enter a mission name.');
        return;
    }
    showLoading();
    const task = {
        id: Date.now(),
        name: taskInput.value.trim(),
        category: categorySelect.value,
        priority: prioritySelect.value,
        completed: false,
        timeSpent: 0,
        createdAt: new Date().toDateString()
    };
    tasks.push(task);
    taskInput.value = '';
    renderTasks();
    updateStats();
    saveData();
    if (!achievements.some(a => a.id === 'first_task')) unlockAchievement('first_task');
    showNotification(`Mission "${task.name}" added!`);
    hideLoading();
}

function completeTask(taskId) {
    showLoading();
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        const today = new Date().toDateString();
        const todayTasks = tasks.filter(t => t.createdAt === today);
        const allComplete = todayTasks.every(t => t.completed);
        if (todayTasks.some(t => t.completed)) {
            completionHistory[today] = { completed: true, perfect: allComplete };
            if (allComplete && !achievements.some(a => a.id === 'perfect_day')) {
                unlockAchievement('perfect_day');
            }
        } else {
            delete completionHistory[today];
        }
        renderTasks();
        updateStats();
        renderCalendar();
        saveData();
        showNotification(task.completed ? `Mission "${task.name}" completed!` : `Mission "${task.name}" reopened.`);
        if (task.completed) playSound('taskComplete');
        checkDailyChallenge();
    }
    hideLoading();
}

function deleteTask(taskId) {
    showLoading();
    const task = tasks.find(t => t.id === taskId);
    tasks = tasks.filter(t => t.id !== taskId);
    renderTasks();
    updateStats();
    renderCalendar();
    saveData();
    showNotification(`Mission "${task.name}" deleted.`);
    hideLoading();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    const todayTasks = tasks.filter(t => t.createdAt === new Date().toDateString());
    todayTasks.sort((a, b) => {
        const priorityOrder = { high: 1, medium: 2, low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    taskList.innerHTML = todayTasks.map(task => `
        <div class="task-item ${task.completed ? 'task-completed completed' : 'added'}">
            <div class="task-info">
                ${planetIcons[task.category] || planetIcons['other']}
                <span class="task-name">${task.name}</span>
                <span class="priority-label priority-${task.priority}">${task.priority}</span>
            </div>
            <div class="task-actions">
                <button class="btn-small btn-complete" onclick="startTimer(${task.id})">Engage</button>
                <button class="btn-small btn-complete" onclick="completeTask(${task.id})">${task.completed ? 'Done' : 'Complete'}</button>
                <button class="btn-small btn-delete" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        </div>`).join('');
}

// Stats and Calendar
function updateStats() {
    const today = new Date().toDateString();
    const todayTasks = tasks.filter(t => t.createdAt === today);
    const completedToday = todayTasks.filter(t => t.completed).length;
    const totalTasksCount = tasks.length;
    const completionRate = totalTasksCount ? Math.round((tasks.filter(t => t.completed).length / totalTasksCount) * 100) : 0;

    let streak = 0;
    let date = new Date();
    while (completionHistory[date.toDateString()]?.completed) {
        streak++;
        date.setDate(date.getDate() - 1);
    }
    currentStreak = streak;
    if (streak >= 5 && !achievements.some(a => a.id === 'streak_5')) {
        unlockAchievement('streak_5');
    }
    if (streak > 0 && !discoveredStreaks.includes(streak)) {
        discoveredStreaks.push(streak);
        showNotification(`🌌 Streak Milestone: ${streak} days! Earned "${constellationData[streak % constellationData.length].name}" badge!`);
    }

    const totalTime = Object.values(timeLog).reduce((sum, cat) => sum + cat, 0);
    if (totalTime >= 3600 && !achievements.some(a => a.id === 'focus_hour')) {
        unlockAchievement('focus_hour');
    }

    userLevel = Math.floor(tasks.filter(t => t.completed).length / 5) + 1;

    document.getElementById('totalTasks').textContent = totalTasksCount;
    document.getElementById('completedTasks').textContent = completedToday;
    document.getElementById('currentStreak').textContent = currentStreak;
    document.getElementById('completionRate').textContent = `${completionRate}%`;
    document.getElementById('streakDisplay').textContent = currentStreak;
    document.getElementById('fireIcon').classList.toggle('active', currentStreak > 0);
    document.getElementById('progressFill').style.width = `${completionRate}%`;
    document.getElementById('levelDisplay').textContent = `Level: ${userLevel}`;

    renderTimeAnalysis();
    updateMissionInsight();
}

function toggleCalendar() {
    const calendarGrid = document.getElementById('calendar');
    const toggleBtn = document.querySelector('.calendar-toggle');
    calendarGrid.classList.toggle('expanded');
    toggleBtn.textContent = calendarGrid.classList.contains('expanded') ? 'Hide Full Month' : 'Show Full Month';
}

function renderCalendar() {
    const calendar = document.getElementById('calendar');
    const svg = document.getElementById('constellation-svg');
    calendar.innerHTML = '';
    svg.innerHTML = '';
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    days.forEach(day => {
        const dayEl = document.createElement('div');
        dayEl.className = 'calendar-day header';
        dayEl.textContent = day;
        calendar.appendChild(dayEl);
    });

    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day inactive';
        calendar.appendChild(emptyDay);
    }

    const activeDays = [];
    for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(today.getFullYear(), today.getMonth(), i);
        const dateString = date.toDateString();
        const dayEl = document.createElement('div');
        dayEl.className = `calendar-day ${completionHistory[dateString]?.completed ? 'active' : 'inactive'}`;
        if (completionHistory[dateString]?.perfect) dayEl.classList.add('perfect-day');
        dayEl.innerHTML = `<span class="day-number">${i}</span>`;
        if (completionHistory[dateString]?.completed) {
            const star = document.createElement('div');
            star.className = 'day-star';
            dayEl.appendChild(star);
            activeDays.push({ x: (calendar.children.length % 7) * 50 + 25, y: Math.floor(calendar.children.length / 7) * 50 + 25 });
        }
        calendar.appendChild(dayEl);
    }

    if (activeDays.length > 1) {
        for (let i = 1; i < activeDays.length; i++) {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('class', 'constellation-line');
            line.setAttribute('x1', activeDays[i - 1].x);
            line.setAttribute('y1', activeDays[i - 1].y);
            line.setAttribute('x2', activeDays[i].x);
            line.setAttribute('y2', activeDays[i].y);
            svg.appendChild(line);
        }
    }
}

function renderTimeAnalysis() {
    const timeAnalysis = document.getElementById('timeAnalysis');
    const categories = ['study', 'DSA', 'Development', 'project', 'habit', 'other'];
    const totalTime = Object.values(timeLog).reduce((sum, cat) => sum + cat, 0) || 1;
    timeAnalysis.innerHTML = categories.map(category => {
        const time = timeLog[category] || 0;
        const percentage = ((time / totalTime) * 100).toFixed(1);
        return `
            <div class="category-time-bar">
                <div class="category-time-label">${category}</div>
                <div class="category-time-progress">
                    <div class="category-time-fill" style="width: ${percentage}%"></div>
                </div>
                <div class="category-time-value">${Math.floor(time / 60)} min</div>
            </div>`;
    }).join('');
}

function updateMissionInsight() {
    const insightEl = document.getElementById('missionInsight');
    const todayTasks = tasks.filter(t => t.createdAt === new Date().toDateString());
    let insight = "No missions yet today. Start by adding a new mission!";
    if (todayTasks.length > 0) {
        const completed = todayTasks.filter(t => t.completed).length;
        const highPriority = todayTasks.filter(t => t.priority === 'high').length;
        if (completed === todayTasks.length && todayTasks.length > 0) {
            insight = "All missions completed today! You're a productivity superstar!";
        } else if (highPriority > 0) {
            insight = `You have ${highPriority} high-priority mission${highPriority > 1 ? 's' : ''} left. Tackle them first!`;
        } else {
            insight = `You've completed ${completed}/${todayTasks.length} missions today. Keep pushing forward!`;
        }
    }
    insightEl.classList.add('fade-out');
    setTimeout(() => {
        insightEl.textContent = insight;
        insightEl.classList.remove('fade-out');
    }, 500);
}

// Timer Logic
function startTimer(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;
    activeTimerTaskId = taskId;
    timerSeconds = task.timeSpent;
    document.getElementById('timerMissionName').textContent = task.name;
    document.getElementById('focus-timer-modal').classList.remove('hidden');
    updateTimerDisplay();
    const timerControlBtn = document.getElementById('timerControlBtn');
    timerControlBtn.textContent = 'Pause';
    timerControlBtn.onclick = toggleTimer;
    document.getElementById('stopTimerBtn').onclick = stopTimer;
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            timerSeconds++;
            updateTimerDisplay();
            task.timeSpent = timerSeconds;
            timeLog[task.category] = (timeLog[task.category] || 0) + 1;
            saveData();
            if (timerSeconds >= 3600 && !achievements.some(a => a.id === 'focus_hour')) {
                unlockAchievement('focus_hour');
            }
        }, 1000);
    }
}

function toggleTimer() {
    const timerControlBtn = document.getElementById('timerControlBtn');
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        timerControlBtn.textContent = 'Resume';
    } else {
        timerInterval = setInterval(() => {
            timerSeconds++;
            updateTimerDisplay();
            const task = tasks.find(t => t.id === activeTimerTaskId);
            if (task) {
                task.timeSpent = timerSeconds;
                timeLog[task.category] = (timeLog[task.category] || 0) + 1;
                saveData();
                if (timerSeconds >= 3600 && !achievements.some(a => a.id === 'focus_hour')) {
                    unlockAchievement('focus_hour');
                }
            }
        }, 1000);
        timerControlBtn.textContent = 'Pause';
    }
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    const task = tasks.find(t => t.id === activeTimerTaskId);
    if (task) {
        task.timeSpent = timerSeconds;
        timeLog[task.category] = (timeLog[task.category] || 0) + timerSeconds;
        saveData();
        showNotification(`Focus time logged for "${task.name}": ${Math.floor(timerSeconds / 60)} minutes.`);
    }
    activeTimerTaskId = null;
    timerSeconds = 0;
    document.getElementById('focus-timer-modal').classList.add('hidden');
    renderTimeAnalysis();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    document.getElementById('timerText').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const totalDuration = 25 * 60;
    const progress = timerSeconds / totalDuration;
    const dashOffset = 339.292 * (1 - Math.min(progress, 1));
    document.getElementById('timerRing').setAttribute('stroke-dashoffset', dashOffset);
}

// Achievements
function unlockAchievement(achievementId) {
    const achievement = achievementData.find(a => a.id === achievementId);
    if (achievement && !achievements.some(a => a.id === achievementId)) {
        achievements.push(achievement);
        saveData();
        showNotification(`Achievement Unlocked: ${achievement.name}!`);
        renderAchievements();
        playSound('achievement');
        shareAchievement(achievement);
    }
}

function renderAchievements() {
    const achievementsModalBody = document.getElementById('achievementsModalBody');
    achievementsModalBody.innerHTML = achievements.length > 0 ? achievements.map(a => `
        <div class="achievement-item">
            <span class="achievement-icon">${a.icon}</span>
            <div>
                <div class="achievement-name">${a.name}</div>
                <div class="achievement-desc">${a.description}</div>
            </div>
        </div>
    `).join('') : '<p>No achievements unlocked yet. Keep pushing!</p>';
}

// Modals
function renderLessonsModal() {
    const category = ['DSA', 'Web Dev', 'CSE'][Math.floor(Math.random() * 3)];
    const topics = { 'DSA': dsaTopics, 'Web Dev': webDevTopics, 'CSE': cseTopics }[category];
    const topic = topics[Math.floor(Math.random() * topics.length)];
    const modalBody = document.getElementById('lessonsModalBody');
    modalBody.innerHTML = `
        <div class="lesson-category">
            <h3>${category}: ${topic.title}</h3>
            <p>${topic.content}</p>
            ${topic.code ? `<pre class="code-snippet"><code class="${category === 'Web Dev' && topic.title.includes('CSS') ? 'language-css' : 'language-javascript'}">${topic.code}</code></pre>` : ''}
            <p><strong>Interview Tip:</strong> ${topic.interviewTip}</p>
            <a href="https://en.wikipedia.org/wiki/${topic.title.replace(/ /g, '_')}" target="_blank" class="learn-more-link">Learn More</a>
        </div>
    `;
    Prism.highlightAll();
    renderQuiz(category);
    showModal('lessonsModal');
}

function renderQuiz(category) {
    const quizContainer = document.getElementById('quizContainer');
    const levelQuestions = quizData.filter(q => q.category === category && q.level === quizState.currentLevel);
    if (levelQuestions.length === 0) {
        quizContainer.innerHTML = '<p>No more questions at this level. Try another category!</p>';
        return;
    }
    quizState.currentQuestion = levelQuestions[Math.floor(Math.random() * levelQuestions.length)];
    quizState.timeLeft = 20;
    
    quizContainer.innerHTML = `
        <div class="quiz-header">
            <span>Level: ${quizState.currentLevel}</span>
            <span>Score: ${quizState.score}</span>
            <span id="quizTimer">Time: ${quizState.timeLeft}s</span>
        </div>
        <div class="quiz-question">${quizState.currentQuestion.question}</div>
        <div class="quiz-options">
            ${quizState.currentQuestion.options.map((option, i) => `<div class="quiz-option" data-index="${i}">${option}</div>`).join('')}
        </div>
        <div class="quiz-feedback" id="quizFeedback"></div>
    `;
    
    const timerEl = document.getElementById('quizTimer');
    quizState.timer = setInterval(() => {
        quizState.timeLeft--;
        timerEl.textContent = `Time: ${quizState.timeLeft}s`;
        if (quizState.timeLeft <= 0) {
            clearInterval(quizState.timer);
            handleQuizAnswer(quizState.currentQuestion, -1);
        }
    }, 1000);
    
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', () => handleQuizAnswer(quizState.currentQuestion, option.dataset.index));
    });
}

function handleQuizAnswer(quiz, selectedIndex) {
    clearInterval(quizState.timer);
    const feedbackEl = document.getElementById('quizFeedback');
    const options = document.querySelectorAll('.quiz-option');
    const correctIndex = quiz.options.indexOf(quiz.correct);
    options.forEach((opt, i) => {
        opt.classList.add(i == correctIndex ? 'correct' : 'incorrect');
        opt.style.pointerEvents = 'none';
    });
    
    if (selectedIndex == correctIndex) {
        quizState.score += quizState.currentLevel * 10;
        feedbackEl.textContent = `Correct! +${quizState.currentLevel * 10} points! ${quiz.explanation}`;
        playSound('quizCorrect');
        if (quizState.score >= quizState.currentLevel * 50 && !achievements.some(a => a.id === `quiz_level_${quizState.currentLevel}`)) {
            unlockAchievement(`quiz_level_${quizState.currentLevel}`);
            quizState.currentLevel++;
        }
        unlockAchievement('quiz_ace');
    } else {
        feedbackEl.textContent = `Incorrect. ${quiz.explanation}`;
    }
    
    localStorage.setItem('quizScore', quizState.score);
    localStorage.setItem('quizLevel', quizState.currentLevel);
    
    document.querySelector('.quiz-header span:nth-child(2)').textContent = `Score: ${quizState.score}`;
    
    if (selectedIndex == correctIndex && quizState.timeLeft > 10) {
        quizState.score += 5;
        showNotification('Time Bonus: +5 points!');
    }
    
    setTimeout(() => {
        renderLessonsModal();
    }, 2000);
}

function renderBookQuoteModal() {
    const quote = bookQuotes[Math.floor(Math.random() * bookQuotes.length)];
    document.getElementById('bookQuoteModalBody').innerHTML = `
        <div class="lesson-category">
            <h3>${quote.title}</h3>
            <p>"${quote.quote}"</p>
            <p class="source">— ${quote.author}</p>
        </div>
    `;
    showModal('bookQuoteModal');
}

function renderConstellationModal() {
    const streakIndex = Math.min(currentStreak, constellationData.length - 1);
    const constellation = constellationData[streakIndex];
    document.getElementById('constellationModalBody').innerHTML = `
        <div class="lesson-category">
            <h3>${constellation.name}</h3>
            <p>${constellation.description}</p>
            <p class="source">Current Streak: ${currentStreak} days</p>
        </div>
    `;
    showModal('constellationModal');
}

function renderWeeklyReportModal() {
    const today = new Date();
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay());
    const weekTasks = tasks.filter(t => new Date(t.createdAt) >= weekStart);
    const completedTasks = weekTasks.filter(t => t.completed).length;
    const totalTime = Object.values(timeLog).reduce((sum, cat) => sum + cat, 0);
    const categoryBreakdown = Object.entries(timeLog).map(([cat, time]) => `${cat}: ${Math.floor(time / 60)} min`).join(', ');
    const report = `
        <h3>Weekly Mission Report</h3>
        <p><strong>Tasks Logged:</strong> ${weekTasks.length}</p>
        <p><strong>Tasks Completed:</strong> ${completedTasks}</p>
        <p><strong>Total Focus Time:</strong> ${Math.floor(totalTime / 60)} minutes</p>
        <p><strong>Category Breakdown:</strong> ${categoryBreakdown || 'None'}</p>
        <p><strong>Insight:</strong> ${completedTasks === weekTasks.length && weekTasks.length > 0 ? 'Perfect week! All missions accomplished!' : 'Keep pushing to complete all missions!'}</p>
    `;
    document.getElementById('weeklyReportBody').innerHTML = report;
    showModal('weeklyReportModal');
}

function renderAnalyticsDashboard() {
    if (completionChartInstance) completionChartInstance.destroy();
    if (categoryChartInstance) categoryChartInstance.destroy();

    const completionData = [];
    const labels = [];
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const dateString = date.toDateString();
        const dailyTasks = tasks.filter(t => t.createdAt === dateString);
        const completed = dailyTasks.filter(t => t.completed).length;
        const total = dailyTasks.length || 1;
        completionData.push((completed / total) * 100);
        labels.push(date.toLocaleDateString('en-US', { weekday: 'short' }));
    }

    const ctx1 = document.getElementById('completionChart').getContext('2d');
    completionChartInstance = new Chart(ctx1, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label: 'Completion Rate (%)',
                data: completionData,
                borderColor: 'rgba(100, 255, 218, 0.8)',
                backgroundColor: 'rgba(100, 255, 218, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: { y: { beginAtZero: true, max: 100 } },
            plugins: { legend: { labels: { color: 'var(--star-white)' } } }
        }
    });

    const categoryData = Object.entries(timeLog).map(([cat, time]) => Math.floor(time / 60));
    const categoryLabels = Object.keys(timeLog);
    const ctx2 = document.getElementById('categoryChart').getContext('2d');
    categoryChartInstance = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: categoryLabels,
            datasets: [{
                label: 'Focus Time (min)',
                data: categoryData,
                backgroundColor: 'rgba(100, 255, 218, 0.5)',
                borderColor: 'rgba(100, 255, 218, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: { y: { beginAtZero: true } },
            plugins: { legend: { labels: { color: 'var(--star-white)' } } }
        }
    });

    showModal('analyticsModal');
}

// Theme System
function unlockTheme(themeId) {
    if (!unlockedThemes.includes(themeId)) {
        unlockedThemes.push(themeId);
        localStorage.setItem('unlockedThemes', JSON.stringify(unlockedThemes));
        showNotification(`New theme unlocked: ${themes.find(t => t.id === themeId).name}!`);
        renderThemeSelector();
    }
}

function applyTheme(themeId) {
    const theme = themes.find(t => t.id === themeId);
    if (theme) {
        Object.entries(theme.colors).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value);
        });
        localStorage.setItem('currentTheme', themeId);
    }
}

function renderThemeSelector() {
    const modalBody = document.getElementById('themeSelectorModalBody');
    modalBody.innerHTML = `
        <h3>Choose Your Theme</h3>
        ${unlockedThemes.map(themeId => `
            <button class="btn theme-btn" onclick="applyTheme('${themeId}')">${themes.find(t => t.id === themeId).name}</button>
        `).join('')}
        <p>Complete more tasks to unlock new themes!</p>
    `;
    showModal('themeSelectorModal');
}

// Daily Challenges
function generateDailyChallenge() {
    const categories = ['study', 'DSA', 'Development', 'project', 'habit', 'other'];
    const challenge = {
        id: Date.now(),
        category: categories[Math.floor(Math.random() * categories.length)],
        description: `Complete 3 tasks in ${categories[Math.floor(Math.random() * categories.length)]} today!`,
        completed: false
    };
    localStorage.setItem('dailyChallenge', JSON.stringify(challenge));
    renderDailyChallenge();
}

function renderDailyChallenge() {
    const challenge = JSON.parse(localStorage.getItem('dailyChallenge') || '{}');
    if (!challenge.id) return;
    const challengeEl = document.getElementById('dailyChallenge');
    challengeEl.innerHTML = `
        <h3>Daily Mission</h3>
        <p>${challenge.description}</p>
        ${challenge.completed ? '<p>Completed! +50 points!</p>' : ''}
    `;
    checkDailyChallenge();
}

function checkDailyChallenge() {
    const challenge = JSON.parse(localStorage.getItem('dailyChallenge') || '{}');
    if (challenge.id && !challenge.completed) {
        const today = new Date().toDateString();
        const todayTasks = tasks.filter(t => t.createdAt === today && t.category === challenge.category && t.completed);
        if (todayTasks.length >= 3) {
            challenge.completed = true;
            quizState.score += 50;
            localStorage.setItem('quizScore', quizState.score);
            localStorage.setItem('dailyChallenge', JSON.stringify(challenge));
            showNotification('Daily Mission Completed! +50 points!');
            if (unlockedThemes.length < themes.length) {
                unlockTheme(themes[unlockedThemes.length].id);
            }
        }
    }
}

// Social Sharing
function shareAchievement(achievement) {
    const text = `I just unlocked the "${achievement.name}" achievement on Discipline Yourself Buddy! 🚀 #Productivity`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

// Sound Effects
function playSound(type) {
    const sounds = {
        taskComplete: new Audio('https://freesound.org/data/previews/171/171671_2437358-lq.mp3'),
        quizCorrect: new Audio('https://freesound.org/data/previews/171/171672_2437358-lq.mp3'),
        achievement: new Audio('https://freesound.org/data/previews/171/171673_2437358-lq.mp3')
    };
    if (sounds[type]) sounds[type].play();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize State
    tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    completionHistory = JSON.parse(localStorage.getItem('completionHistory') || '{}');
    timeLog = JSON.parse(localStorage.getItem('timeLog') || '{}');
    achievements = JSON.parse(localStorage.getItem('achievements') || '[]');
    discoveredStreaks = JSON.parse(localStorage.getItem('discoveredStreaks') || '[]');
    userLevel = parseInt(localStorage.getItem('userLevel') || '1');
    unlockedThemes = JSON.parse(localStorage.getItem('unlockedThemes') || '["nebula"]');

    // Initialize UI
    initStarfield();
    renderTasks();
    updateStats();
    renderCalendar();
    renderAchievements();
    renderDailyChallenge();
    applyTheme(localStorage.getItem('currentTheme') || 'nebula');

    // Motivational Quote
    document.getElementById('motivationalQuote').textContent = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

    // Theme Toggle
    document.getElementById('themeToggle').addEventListener('click', () => {
        document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    });

    // Theme Selector
    document.getElementById('themeSelectorBtn').addEventListener('click', renderThemeSelector);

    // Modal Close Buttons
    document.getElementById('closeLessonsModal').addEventListener('click', () => hideModal('lessonsModal'));
    document.getElementById('closeBookQuoteModal').addEventListener('click', () => hideModal('bookQuoteModal'));
    document.getElementById('closeConstellationModal').addEventListener('click', () => hideModal('constellationModal'));
    document.getElementById('closeTimerModal').addEventListener('click', stopTimer);
    document.getElementById('closeWeeklyReportModal').addEventListener('click', () => hideModal('weeklyReportModal'));
    document.getElementById('closeAchievementsModal').addEventListener('click', () => hideModal('achievementsModal'));
    document.getElementById('closeAnalyticsModal').addEventListener('click', () => hideModal('analyticsModal'));

    // Modal Triggers
    document.getElementById('lessonsTrigger').addEventListener('click', renderLessonsModal);
    document.getElementById('bookQuoteTrigger').addEventListener('click', renderBookQuoteModal);
    document.getElementById('constellationTrigger').addEventListener('click', renderConstellationModal);
    document.getElementById('achievementsTrigger').addEventListener('click', () => showModal('achievementsModal'));
    document.getElementById('analyticsTrigger').addEventListener('click', renderAnalyticsDashboard);
    document.getElementById('weeklyReportTrigger').addEventListener('click', renderWeeklyReportModal);

    // Welcome Overlay
    setTimeout(() => {
        document.getElementById('welcomeOverlay').classList.add('hidden');
    }, 3000);

    // Daily Challenge Check
    setInterval(() => {
        const lastChallenge = JSON.parse(localStorage.getItem('dailyChallenge') || '{}');
        if (lastChallenge.id && new Date(lastChallenge.id).toDateString() !== new Date().toDateString()) {
            generateDailyChallenge();
        }
    }, 60000);

    // Motivational Nudges
    setInterval(() => {
        const today = new Date().toDateString();
        const todayTasks = tasks.filter(t => t.createdAt === today);
        if (todayTasks.length > 0 && todayTasks.every(t => !t.completed)) {
            showNotification('Your missions are waiting, astronaut! Complete one to keep your streak alive! 🌌');
        }
    }, 3600000);
});