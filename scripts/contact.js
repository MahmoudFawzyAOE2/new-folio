// Function to get the query parameter value by name
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Set the subject input value based on the query parameter
document.addEventListener('DOMContentLoaded', () => {
    const subjectInput = document.getElementById('subject');
    const subject = getQueryParam('subject');
    if (subject) {
        subjectInput.value = subject;
    }
});