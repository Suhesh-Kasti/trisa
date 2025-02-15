document.addEventListener('DOMContentLoaded', function() {
  // Day filter functionality
  const dayButtons = document.querySelectorAll('.day-filters button');
  const exerciseCards = document.querySelectorAll('.exercise-card');
  const userSelect = document.getElementById('user-select');
  
  function filterExercises() {
    const selectedDay = document.querySelector('.day-filters button.active').dataset.day;
    const selectedUser = userSelect.value;
    
    exerciseCards.forEach(card => {
      const days = JSON.parse(card.dataset.days);
      const users = JSON.parse(card.dataset.users);
      
      const dayMatch = selectedDay === 'all' || days.includes(selectedDay);
      const userMatch = users.includes('both') || users.includes(selectedUser) || selectedUser === 'both';
      
      if (dayMatch && userMatch) {
        card.classList.remove('d-none');
      } else {
        card.classList.add('d-none');
      }
    });
  }
  
  dayButtons.forEach(button => {
    button.addEventListener('click', function() {
      dayButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      filterExercises();
    });
  });
  
  userSelect.addEventListener('change', filterExercises);
  
  // Initialize filters
  filterExercises();
  
  // Duration slider functionality
  const durationSliders = document.querySelectorAll('.duration-slider');
  
  durationSliders.forEach(slider => {
    const durationBadgeSelector = slider.dataset.durationBadge;
    const durationBadge = slider.closest('.card').querySelector(durationBadgeSelector);
    
    slider.addEventListener('input', function() {
      durationBadge.textContent = this.value + 's';
    });
  });
  
  // Reset duration button functionality
  const resetDurationButtons = document.querySelectorAll('.reset-duration-btn');
  
  resetDurationButtons.forEach(button => {
    button.addEventListener('click', function() {
      const defaultDuration = this.dataset.defaultDuration;
      const sliderId = this.dataset.sliderId;
      const slider = document.getElementById(sliderId);
      const durationBadgeSelector = slider.dataset.durationBadge;
      const durationBadge = slider.closest('.card').querySelector(durationBadgeSelector);
      
      // Reset slider value
      slider.value = defaultDuration;
      
      // Update badge text
      durationBadge.textContent = defaultDuration + 's';
    });
  });
  
  // Timer functionality
  const startButtons = document.querySelectorAll('.start-timer-btn');
  
  startButtons.forEach(button => {
    let timerInterval;
    const resetButton = button.parentElement.querySelector('.reset-timer-btn');
    const card = button.closest('.exercise-card');
    const timerOverlay = card.querySelector('.timer-overlay');
    const timerDisplay = card.querySelector('.timer-display');
    const durationBadge = card.querySelector('.badge.bg-primary');
    
    button.addEventListener('click', function() {
      // Get the current duration value from the badge
      let timeLeft = parseInt(durationBadge.textContent);
      
      // Show overlay and reset button
      timerOverlay.classList.remove('d-none');
      button.classList.add('d-none');
      resetButton.classList.remove('d-none');
      
      // Update timer display
      updateTimerDisplay();
      
      // Start countdown
      timerInterval = setInterval(() => {
        timeLeft -= 1;
        if (timeLeft < 0) {
          clearInterval(timerInterval);
          timeLeft = 0;
          timerDisplay.classList.add('completed');
          timerDisplay.textContent = "DONE!";
        } else {
          updateTimerDisplay();
        }
      }, 1000);
      
      function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      }
    });
    
    resetButton.addEventListener('click', function() {
      // Clear interval
      clearInterval(timerInterval);
      
      // Hide overlay and reset button
      timerOverlay.classList.add('d-none');
      resetButton.classList.add('d-none');
      button.classList.remove('d-none');
      
      // Reset timer display
      timerDisplay.classList.remove('completed');
    });
  });
});
