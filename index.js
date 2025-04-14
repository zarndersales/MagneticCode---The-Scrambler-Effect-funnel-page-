const ctaButtons = document.querySelectorAll('[data-cta-button]');
const salePopup = document.querySelector('[data-sale-popup]');

const LOCATIONS = ['in London', 'from New York', 'in Toronto', 'from Sydney', 'in Berlin'];
const INTERVALS = [8000, 12000, 15000, 20000];
const MALE_NAMES = [
    'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 
    'Thomas', 'Charles', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Donald', 
    'Mark', 'Paul', 'Steven', 'Andrew', 'Kenneth', 'Joshua', 'Kevin', 'Brian', 
    'George', 'Edward', 'Ronald', 'Timothy', 'Jason', 'Jeffrey', 'Ryan', 'Jacob', 
    'Gary', 'Nicholas', 'Eric', 'Jonathan', 'Stephen', 'Larry', 'Justin', 'Scott', 
    'Brandon', 'Benjamin'
];

// Utility function to get a random element from an array
const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

// Show CTA buttons after a delay
setTimeout(() => {
    ctaButtons.forEach(button => button.removeAttribute('hidden'));
}, 10000); // 10 seconds

// Function to display the sale popup
function showSalePopup() {
    const randomLocation = getRandomElement(LOCATIONS);
    const randomName = getRandomElement(MALE_NAMES);
    const randomNumber = Math.floor(Math.random() * 1000);
    const randomUsername = `${randomName}_${randomNumber}`;

    salePopup.textContent = `🔔 ${randomUsername} just purchased The Scrambler Effect ${randomLocation}!`;
    salePopup.classList.add('popup-sale--show');

    // Hide the popup after 5 seconds
    setTimeout(() => salePopup.classList.remove('popup-sale--show'), 5000);

    // Schedule the next popup
    const nextInterval = getRandomElement(INTERVALS);
    setTimeout(showSalePopup, nextInterval);
}

// Start showing sale popups after an initial delay
setTimeout(showSalePopup, 1000); // 10 seconds