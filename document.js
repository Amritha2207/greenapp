document.addEventListener('DOMContentLoaded', function() {
    const challengeButton = document.getElementById('sustainability-challenge-button');
    const challengesContainer = document.getElementById('challenges-container');

    challengeButton.addEventListener('click', function() {
        challengesContainer.style.display = 'flex'; // Show the challenges
    });
});
