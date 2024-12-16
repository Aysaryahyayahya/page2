// Track the time the participant spends on the website
let startTime = Date.now(); // Store the time when the page loads

// When the page is closed or the user navigates away, calculate the time spent
window.addEventListener('beforeunload', function () {
    let endTime = Date.now();
    let timeSpent = (endTime - startTime) / 1000; // Time spent in seconds
    console.log('Time spent on the site:', timeSpent, 'seconds');

    // Send this data to your survey page
    let returnTo = 'https://forms.gle/B3oJvxfaR5sVVwGH6'; // Your survey URL
    let url = new URL(returnTo);
    url.searchParams.set('timeSpent', timeSpent); // Append the timeSpent as a query param
    window.location.href = url;
});

// Function to handle the user's cookie consent choices
function handleConsent(choice) {
    let consentChoice = choice; // The user's consent choice: 'accept', 'reject', or 'customize'
    let returnTo = 'https://forms.gle/B3oJvxfaR5sVVwGH6'; // Your survey URL
    let url = new URL(returnTo);
    url.searchParams.set('consentChoice', consentChoice); // Add the consent choice as a query param
    window.location.href = url; // Redirect the participant back to the survey page
}

// Example: When the user clicks 'Accept'
document.getElementById('acceptButton').addEventListener('click', function() {
    handleConsent('accept');
});

// Example: When the user clicks 'Reject'
document.getElementById('rejectButton').addEventListener('click', function() {
    handleConsent('reject');
});

// Example: When the user clicks 'Customize'
document.getElementById('customizeButton').addEventListener('click', function() {
    handleConsent('customize');
});
