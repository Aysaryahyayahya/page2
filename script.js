// Track the time the participant spends on the website
let startTime = Date.now(); // Store the time when the page loads

// When the page is closed or the user navigates away, calculate the time spent
window.addEventListener('beforeunload', function () {
    let endTime = Date.now();
    let timeSpent = (endTime - startTime) / 1000; // Time spent in seconds
    console.log('Time spent on the site:', timeSpent, 'seconds');

    // Redirect back to the survey with the timeSpent and consentChoice as URL parameters
    let consentChoice = 'No Choice'; // Default value in case consent is not selected
    let returnTo = 'https://docs.google.com/forms/d/e/1FAIpQLSeKokknrjvk8q1OZRTtoLUEMDtpEjcQHm_YwI_FFxrHWVWNyw/viewform?usp=pp_url'; // Your pre-filled form URL
    
    // Create the pre-filled URL for Google Forms with timeSpent and consentChoice
    let url = new URL(returnTo);
    url.searchParams.set('entry.822237019', timeSpent); // 'entry.822237019' is the field ID for "Time Spent"
    url.searchParams.set('entry.1218982656', consentChoice); // 'entry.1218982656' is the field ID for "Consent Choice"
    
    // Redirect the participant to the pre-filled form
    window.location.href = url;
});

// Function to handle the user's cookie consent choices
function handleConsent(choice) {
    let consentChoice = choice; // The user's consent choice: 'accept', 'reject', or 'customize'
    let returnTo = 'https://docs.google.com/forms/d/e/1FAIpQLSeKokknrjvk8q1OZRTtoLUEMDtpEjcQHm_YwI_FFxrHWVWNyw/viewform?usp=pp_url'; // Your pre-filled form URL
    
    // Create the pre-filled URL for Google Forms with timeSpent and consentChoice
    let url = new URL(returnTo);
    url.searchParams.set('entry.822237019', timeSpent); // 'entry.822237019' is the field ID for "Time Spent"
    url.searchParams.set('entry.1218982656', consentChoice); // 'entry.1218982656' is the field ID for "Consent Choice"
    
    // Redirect the participant to the pre-filled form
    window.location.href = url;
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
