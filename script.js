// ======================================================
// "CLOSED GATES" SCREENSAVER LOGIC
// ======================================================

(function() {
    // Configuration
    const inactivityTime = 10000; // 10 seconds in milliseconds
    
    // DOM Elements
    const screensaver = document.getElementById('screensaver');
    
    // Timer variable
    let inactivityTimer;

    // --- Functions ---

    /**
     * Shows the screensaver.
     * The CSS 'display: flex' is used to show it and center content.
     */
    function showScreensaver() {
        if (screensaver) {
            screensaver.style.display = 'flex';
        }
    }

    /**
     * Hides the screensaver and resets the timer.
     * This is the main "activity" function.
     */
    function resetTimer() {
        // Hide the screensaver
        if (screensaver) {
            screensaver.style.display = 'none';
        }
        
        // Clear the existing timer (if any)
        clearTimeout(inactivityTimer);
        
        // Start a new timer
        inactivityTimer = setTimeout(showScreensaver, inactivityTime);
    }

    // --- Event Listeners ---
    
    // Listen for any of these events to reset the timer
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);
    window.addEventListener('scroll', resetTimer);
    window.addEventListener('click', resetTimer);

    // --- Initial Start ---
    
    // Start the timer for the first time when the page loads
    resetTimer();

})();
