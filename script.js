// Baseball Training Program - JavaScript

// Exercise data with 10+ baseball-specific exercises
const exercises = [
    {
        id: 1,
        title: "Push-ups",
        description: "Build upper body strength for throwing and hitting power. Focus on proper form with hands shoulder-width apart.",
        category: "strength",
        sets: 3,
        reps: "10-15",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "💪"
    },
    {
        id: 2,
        title: "Squats",
        description: "Develop leg strength for base running and fielding. Keep feet shoulder-width apart and go parallel to ground.",
        category: "strength",
        sets: 3,
        reps: "12-15",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🏋️‍♂️"
    },
    {
        id: 3,
        title: "Plank Hold",
        description: "Strengthen core muscles essential for throwing accuracy and hitting power. Hold position with straight body.",
        category: "strength",
        sets: 3,
        reps: "30-45 seconds",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🧘‍♂️"
    },
    {
        id: 4,
        title: "Lunges",
        description: "Improve balance and leg strength for fielding and base running. Step forward and lower back knee.",
        category: "strength",
        sets: 3,
        reps: "10 each leg",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🚶‍♂️"
    },
    {
        id: 5,
        title: "High Knees",
        description: "Enhance running speed and coordination. Run in place bringing knees up to waist level.",
        category: "agility",
        sets: 3,
        reps: "30 seconds",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🏃"
    },
    {
        id: 6,
        title: "Ladder Drills",
        description: "Improve foot speed and agility for fielding. Practice quick feet through agility ladder.",
        category: "agility",
        sets: 3,
        reps: "2-3 patterns",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🪜"
    },
    {
        id: 7,
        title: "Cone Weaves",
        description: "Develop quick direction changes for fielding. Weave through cones in zigzag pattern.",
        category: "agility",
        sets: 3,
        reps: "5-6 cones",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🔸"
    },
    {
        id: 8,
        title: "Burpees",
        description: "Full body conditioning combining strength and cardio. Squat, push-up, jump sequence.",
        category: "combo",
        sets: 3,
        reps: "8-10",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "⚡"
    },
    {
        id: 9,
        title: "Medicine Ball Throws",
        description: "Build throwing power and core strength. Throw medicine ball against wall or to partner.",
        category: "combo",
        sets: 3,
        reps: "10-12",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🏐"
    },
    {
        id: 10,
        title: "Jump Rope",
        description: "Improve coordination and endurance. Practice basic jumps and variations.",
        category: "combo",
        sets: 3,
        reps: "1 minute",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🔄"
    },
    {
        id: 11,
        title: "Arm Circles",
        description: "Warm up shoulder muscles and improve flexibility. Small and large circles forward and backward.",
        category: "cooldown",
        sets: 2,
        reps: "10 each direction",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🔄"
    },
    {
        id: 12,
        title: "Static Stretches",
        description: "Improve flexibility and prevent injury. Hold each stretch for 20-30 seconds.",
        category: "cooldown",
        sets: 1,
        reps: "20-30 seconds each",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🧘‍♀️"
    }
];

// Global variables
let currentFilter = 'all';
let currentSection = 'home';

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupMobileMenu();
});

// Initialize the application
function initializeApp() {
    loadProgress();
    renderExercises();
    updateProgressDisplay();
    showSection('home');
}

// Setup mobile menu toggle
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
}

// Navigation functions
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.classList.add('active');
    }
    
    // Update navigation active states
    document.querySelectorAll('.nav-link, .nav-link-mobile').forEach(link => {
        link.classList.remove('active');
    });
    
    // Update current section
    currentSection = sectionName;
    
    // Update content based on section
    if (sectionName === 'progress') {
        renderProgressView();
    }
    
    // Close mobile menu
    document.getElementById('mobile-menu').classList.add('hidden');
}

// Filter exercises by category
function filterExercises(category) {
    currentFilter = category;
    
    // Update filter button states
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Find and activate the clicked button
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if (btn.textContent.toLowerCase().includes(category) || 
            (category === 'all' && btn.textContent === 'All')) {
            btn.classList.add('active');
        }
    });
    
    renderExercises();
}

// Render exercises based on current filter
function renderExercises() {
    const container = document.getElementById('exercises-container');
    const filteredExercises = currentFilter === 'all' 
        ? exercises 
        : exercises.filter(exercise => exercise.category === currentFilter);
    
    container.innerHTML = '';
    
    filteredExercises.forEach(exercise => {
        const exerciseCard = createExerciseCard(exercise);
        container.appendChild(exerciseCard);
    });
}

// Create exercise card element
function createExerciseCard(exercise) {
    const card = document.createElement('div');
    card.className = `exercise-card fade-in ${isExerciseCompleted(exercise.id) ? 'completed' : ''}`;
    card.dataset.exerciseId = exercise.id;
    
    const progress = getExerciseProgress(exercise.id);
    const completedSets = progress.completedSets;
    const isCompleted = completedSets >= exercise.sets;
    
    card.innerHTML = `
        <div class="p-6">
            <div class="flex items-center justify-between mb-3">
                <span class="text-2xl">${exercise.icon}</span>
                <span class="category-badge category-${exercise.category}">${getCategoryName(exercise.category)}</span>
            </div>
            
            <h3 class="exercise-title text-xl font-bold text-gray-800 mb-2">${exercise.title}</h3>
            <p class="text-gray-600 text-sm mb-4">${exercise.description}</p>
            
            <div class="video-placeholder mb-4">
                <div class="text-center">
                    <i class="fas fa-play-circle text-4xl mb-2"></i>
                    <p class="text-sm">Demo Video</p>
                    <a href="${exercise.videoUrl}" target="_blank" class="text-blue-500 hover:text-blue-700 text-xs mt-1 block">
                        Watch on YouTube
                    </a>
                </div>
            </div>
            
            <div class="mb-4">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-sm font-semibold text-gray-700">Progress: ${completedSets}/${exercise.sets} sets</span>
                    <span class="text-sm text-gray-500">${exercise.reps} reps</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${(completedSets / exercise.sets) * 100}%"></div>
                </div>
            </div>
            
            <div class="space-y-2">
                ${generateSetCheckboxes(exercise.id, exercise.sets, completedSets)}
            </div>
            
            ${isCompleted ? '<div class="mt-3 text-center"><span class="text-green-600 font-semibold">✅ Exercise Complete!</span></div>' : ''}
        </div>
    `;
    
    // Add event listeners to checkboxes
    const checkboxes = card.querySelectorAll('.progress-checkbox');
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function() {
            toggleSet(exercise.id, index + 1, this.checked);
            updateProgressDisplay();
            
            // Add success animation
            if (this.checked) {
                card.classList.add('success-animation');
                setTimeout(() => card.classList.remove('success-animation'), 600);
            }
        });
    });
    
    return card;
}

// Generate set checkboxes
function generateSetCheckboxes(exerciseId, totalSets, completedSets) {
    let checkboxes = '';
    for (let i = 1; i <= totalSets; i++) {
        const isChecked = i <= completedSets;
        checkboxes += `
            <label class="set-counter cursor-pointer">
                <input type="checkbox" class="progress-checkbox" ${isChecked ? 'checked' : ''}>
                <span class="text-sm font-medium">Set ${i}</span>
            </label>
        `;
    }
    return checkboxes;
}

// Progress tracking functions
function toggleSet(exerciseId, setNumber, completed) {
    let progress = JSON.parse(localStorage.getItem('exerciseProgress') || '{}');
    
    if (!progress[exerciseId]) {
        progress[exerciseId] = { completedSets: 0, sets: {} };
    }
    
    if (completed) {
        progress[exerciseId].sets[setNumber] = true;
    } else {
        delete progress[exerciseId].sets[setNumber];
    }
    
    // Count completed sets
    progress[exerciseId].completedSets = Object.keys(progress[exerciseId].sets).length;
    
    localStorage.setItem('exerciseProgress', JSON.stringify(progress));
    
    // Update the card appearance
    updateExerciseCard(exerciseId);
}

// Get exercise progress
function getExerciseProgress(exerciseId) {
    const progress = JSON.parse(localStorage.getItem('exerciseProgress') || '{}');
    return progress[exerciseId] || { completedSets: 0, sets: {} };
}

// Check if exercise is completed
function isExerciseCompleted(exerciseId) {
    const exercise = exercises.find(e => e.id === exerciseId);
    const progress = getExerciseProgress(exerciseId);
    return progress.completedSets >= exercise.sets;
}

// Update exercise card appearance
function updateExerciseCard(exerciseId) {
    const card = document.querySelector(`[data-exercise-id="${exerciseId}"]`);
    if (card) {
        const exercise = exercises.find(e => e.id === exerciseId);
        const progress = getExerciseProgress(exerciseId);
        const isCompleted = progress.completedSets >= exercise.sets;
        
        if (isCompleted) {
            card.classList.add('completed');
        } else {
            card.classList.remove('completed');
        }
        
        // Update progress bar
        const progressFill = card.querySelector('.progress-fill');
        if (progressFill) {
            progressFill.style.width = `${(progress.completedSets / exercise.sets) * 100}%`;
        }
        
        // Update progress text
        const progressText = card.querySelector('.text-sm.font-semibold');
        if (progressText) {
            progressText.textContent = `Progress: ${progress.completedSets}/${exercise.sets} sets`;
        }
    }
}

// Load progress from localStorage
function loadProgress() {
    // Progress is loaded automatically when needed
}

// Update progress display
function updateProgressDisplay() {
    const totalExercises = exercises.length;
    let completedExercises = 0;
    let totalSetsCompleted = 0;
    
    exercises.forEach(exercise => {
        const progress = getExerciseProgress(exercise.id);
        if (progress.completedSets >= exercise.sets) {
            completedExercises++;
        }
        totalSetsCompleted += progress.completedSets;
    });
    
    const completionRate = totalExercises > 0 ? Math.round((completedExercises / totalExercises) * 100) : 0;
    
    document.getElementById('total-exercises').textContent = totalExercises;
    document.getElementById('completed-exercises').textContent = completedExercises;
    document.getElementById('completion-rate').textContent = `${completionRate}%`;
    document.getElementById('total-sets').textContent = totalSetsCompleted;
}

// Render progress view
function renderProgressView() {
    const container = document.getElementById('progress-exercises');
    container.innerHTML = '';
    
    exercises.forEach(exercise => {
        const progressCard = createProgressCard(exercise);
        container.appendChild(progressCard);
    });
    
    updateProgressDisplay();
}

// Create progress card for progress view
function createProgressCard(exercise) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-md p-6 fade-in';
    
    const progress = getExerciseProgress(exercise.id);
    const isCompleted = progress.completedSets >= exercise.sets;
    
    card.innerHTML = `
        <div class="flex items-center justify-between mb-3">
            <span class="text-2xl">${exercise.icon}</span>
            <span class="category-badge category-${exercise.category}">${getCategoryName(exercise.category)}</span>
        </div>
        
        <h3 class="text-lg font-bold text-gray-800 mb-2">${exercise.title}</h3>
        <p class="text-gray-600 text-sm mb-3">${exercise.description}</p>
        
        <div class="mb-3">
            <div class="flex justify-between items-center mb-1">
                <span class="text-sm font-semibold text-gray-700">${progress.completedSets}/${exercise.sets} sets completed</span>
                <span class="text-sm text-gray-500">${exercise.reps} reps</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${(progress.completedSets / exercise.sets) * 100}%"></div>
            </div>
        </div>
        
        <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">${getCategoryName(exercise.category)}</span>
            ${isCompleted ? 
                '<span class="text-green-600 font-semibold">✅ Complete</span>' : 
                '<span class="text-orange-600 font-semibold">🔄 In Progress</span>'
            }
        </div>
    `;
    
    return card;
}

// Reset all progress
function resetProgress() {
    if (confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
        localStorage.removeItem('exerciseProgress');
        updateProgressDisplay();
        renderExercises();
        renderProgressView();
        
        // Show success message
        showNotification('Progress reset successfully!', 'success');
    }
}

// Get category name
function getCategoryName(category) {
    const names = {
        'strength': 'Strength',
        'agility': 'Agility',
        'combo': 'Combo Drills',
        'cooldown': 'Cool-down'
    };
    return names[category] || category;
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transition-all duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Export functions for global access
window.showSection = showSection;
window.filterExercises = filterExercises;
window.resetProgress = resetProgress; 