# ⚾ Baseball Training Program - 13U Player

A responsive web application designed specifically for 13-year-old baseball players to track their strength and agility training progress. Built with HTML, CSS, and JavaScript, this app provides a comprehensive workout plan with progress tracking and a modern, mobile-friendly interface.

## 🏋️‍♂️ Features

### Exercise Categories
- **💪 Strength Training**: Build core strength and power for hitting and throwing
- **🏃 Agility Drills**: Improve speed, quickness, and fielding ability  
- **⚡ Combo Drills**: Combine multiple skills for game-like scenarios
- **🧊 Cool-down**: Proper recovery and flexibility maintenance

### Core Functionality
- **12+ Baseball-Specific Exercises**: Carefully selected exercises for young athletes
- **Progress Tracking**: Checkbox system for tracking completed sets
- **Visual Progress Indicators**: Progress bars and completion status
- **Category Filtering**: Filter exercises by type
- **Local Storage**: Saves progress automatically in the browser
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Clean, intuitive interface with smooth animations

### Navigation
- **🏠 Home**: Browse and complete exercises
- **📊 My Progress**: View overall progress and statistics
- **ℹ️ About**: Learn about the program and training tips

## 🚀 Deployment

### GitHub Pages Deployment

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit: Baseball Training Program"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Access Your App**:
   - Your app will be available at: `https://yourusername.github.io/repository-name`

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/repository-name.git
   cd repository-name
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     ```

## 📱 Usage

### Getting Started
1. Open the app in your web browser
2. Browse exercises by category using the filter buttons
3. Click on individual set checkboxes to mark them complete
4. Track your progress in the "My Progress" section
5. Reset progress if needed using the reset button

### Exercise Structure
Each exercise includes:
- **Title and Description**: Clear instructions for proper form
- **Video Demo**: Placeholder links to YouTube videos (replace with actual videos)
- **Sets and Reps**: Specific workout parameters
- **Progress Tracking**: Visual indicators of completion

### Progress Tracking
- **Individual Sets**: Check off each set as you complete it
- **Exercise Completion**: Visual confirmation when all sets are done
- **Overall Statistics**: View total exercises, completion rate, and sets completed
- **Persistent Storage**: Progress is saved automatically in your browser

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styles with Tailwind CSS framework
- **JavaScript (ES6+)**: Interactive functionality and data management
- **Local Storage**: Client-side data persistence
- **Font Awesome**: Icons and visual elements

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

### File Structure
```
Baseballtrainingplan/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎯 Exercise List

### Strength Training (4 exercises)
1. **Push-ups** - Upper body strength for throwing and hitting
2. **Squats** - Leg strength for base running and fielding
3. **Plank Hold** - Core strength for throwing accuracy
4. **Lunges** - Balance and leg strength

### Agility Drills (3 exercises)
5. **High Knees** - Running speed and coordination
6. **Ladder Drills** - Foot speed and agility
7. **Cone Weaves** - Quick direction changes

### Combo Drills (3 exercises)
8. **Burpees** - Full body conditioning
9. **Medicine Ball Throws** - Throwing power and core strength
10. **Jump Rope** - Coordination and endurance

### Cool-down (2 exercises)
11. **Arm Circles** - Shoulder warm-up and flexibility
12. **Static Stretches** - Flexibility and injury prevention

## 🔧 Customization

### Adding New Exercises
To add new exercises, edit the `exercises` array in `script.js`:

```javascript
{
    id: 13,
    title: "New Exercise",
    description: "Exercise description",
    category: "strength", // or "agility", "combo", "cooldown"
    sets: 3,
    reps: "10-15",
    videoUrl: "https://youtube.com/watch?v=...",
    icon: "🏋️‍♂️"
}
```

### Styling Changes
- Modify `styles.css` for custom styling
- Update Tailwind classes in `index.html` for layout changes
- Customize colors, fonts, and animations

### Video Integration
Replace placeholder YouTube URLs with actual exercise demonstration videos:
1. Find appropriate exercise videos on YouTube
2. Update the `videoUrl` property in the exercises array
3. Ensure videos are age-appropriate and demonstrate proper form

## 📊 Data Management

### Local Storage
The app uses browser localStorage to save progress:
- **Key**: `exerciseProgress`
- **Format**: JSON object with exercise IDs and completion data
- **Persistence**: Data remains until browser cache is cleared or reset

### Reset Functionality
- Use the "Reset Progress" button in the Progress section
- Confirms before clearing all saved data
- Useful for starting fresh or testing

## 🎨 Design Features

### Visual Elements
- **Emojis and Icons**: Fun, engaging visual elements
- **Color-coded Categories**: Easy identification of exercise types
- **Progress Bars**: Visual representation of completion
- **Smooth Animations**: Enhanced user experience
- **Responsive Grid**: Adapts to different screen sizes

### Accessibility
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Semantic HTML structure
- **High Contrast Support**: CSS media queries for accessibility
- **Reduced Motion Support**: Respects user preferences

## 🤝 Contributing

Feel free to contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🏆 Support

For questions or support:
- Create an issue on GitHub
- Check the About section in the app for training tips
- Ensure you're using a modern web browser

---

**Built with ❤️ for young baseball players! ⚾** 