let currentQuote = 0;
const quotes = document.querySelectorAll('.quote');

// Show quote based on the index
function showQuote(index) {
    // Hide all quotes
    quotes.forEach(quote => {
        quote.style.opacity = 0;
        quote.style.transform = 'translateY(20px)';
    });
    // Show the current quote with animation
    quotes[index].style.opacity = 1;
    quotes[index].style.transform = 'translateY(0)';
}

// Move to next quote in the carousel
function nextQuote() {
    currentQuote = (currentQuote + 1) % quotes.length;
    showQuote(currentQuote);
}

// Initially show the first quote
showQuote(currentQuote);

// Show special message when the button is clicked
function showMessage() {
    const message = document.getElementById('specialMessage');
    message.style.display = 'block';
}
