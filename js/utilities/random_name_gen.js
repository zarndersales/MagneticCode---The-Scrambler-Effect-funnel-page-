export function randomNameGen(element){
    if(element) {
    
        const LOCATIONS = ['in London', 'from New York', 'in Toronto', 'from Sydney', 'in Berlin'];
        const INTERVALS = [18000, 12000, 15000, 20000];
        const MALE_NAMES = [
            'James', 'John', 'Robert', 'primemale', 'William', 'David', 'anal addict', 'Joseph', 
            'Thomas', 'Charles', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Donald', 
            'battyboy', 'Paul', 'Steven', 'Andrew', 'Kenneth', 'Joshua', 'bobby jones', 'Brian', 
            'George', 'Edward', 'Ronald', 'Timothy', 'Jason', 'Jeffrey', 'Ryan', 'Jacob', 
            'Gary', 'mackiie wanker', 'Eric', 'titty lips', 'Stephen', 'Larry', 'rabbit legg', 'Scott', 
            'sexman', 'Benjamin'
        ];
        
        // Utility function to get a random element from an array
        const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];
        
        // Function to display the sale popup
        function showSalePopup() {
            var { randomUsername, randomLocation } = nameGenAndLocation();
        
            element.textContent = `🔔 ${randomUsername} just purchased The Scrambler Effect ${randomLocation}!`;
            element.classList.add('popup-sale--show');
        
            // Hide the popup after 5 seconds
            setTimeout(() => element.classList.remove('popup-sale--show'), 5000);
        
            // Schedule the next popup
            const nextInterval = getRandomElement(INTERVALS);
            setTimeout(showSalePopup, nextInterval);
        }
        
        // Start showing sale popups after an initial delay
        setTimeout(showSalePopup, 10000); // 10 seconds
        
        function nameGenAndLocation() {
            const randomLocation = getRandomElement(LOCATIONS);
            const randomName = getRandomElement(MALE_NAMES);
            const randomNumberOrLetters = Math.random() < 0.5
                ? Math.random().toString(36).substring(2, 6) // Random letters
                : Math.floor(Math.random() * 1000); // Random numbers
            const includeUnderscore = Math.random() < 0.5; // 50% chance to include an underscore
            const underscorePosition = Math.random() < 0.5 ? 0 : 1; // Randomly decide underscore position
            let randomUsername;
        
            if (includeUnderscore) {
                randomUsername = underscorePosition === 0
                    ? `_${randomName}${randomNumberOrLetters}`
                    : `${randomName}_${randomNumberOrLetters}`;
            } else {
                randomUsername = `${randomName}${randomNumberOrLetters}`;
            }
            return { randomUsername, randomLocation };
        }
    }
}



