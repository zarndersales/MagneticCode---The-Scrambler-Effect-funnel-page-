const INITIAL_SALES_COUNT = 1678;
const MIN_INTERVAL = 15000;  // 2 seconds
const MAX_INTERVAL = 35000; // 15 seconds

const SALES_COUNT_KEY = 'remaining_sales_count';
const counterElement = document.querySelector('[data-promo-text-counter]');

if(counterElement){

    function getSavedSalesCount() {
        const stored = localStorage.getItem(SALES_COUNT_KEY);
        return stored !== null ? parseInt(stored, 10) : INITIAL_SALES_COUNT;
    }
    
    function saveSalesCount(count) {
        localStorage.setItem(SALES_COUNT_KEY, count.toString());
    }
    
    let salesCount = getSavedSalesCount();
    if (counterElement) counterElement.textContent = salesCount;
    
    function updateSalesCount() {
        if (salesCount <= 0) return;
    
        salesCount--;
        saveSalesCount(salesCount);
        if (counterElement) counterElement.textContent = salesCount;
    
        const nextUpdate = Math.floor(Math.random() * (MAX_INTERVAL - MIN_INTERVAL)) + MIN_INTERVAL;
        setTimeout(updateSalesCount, nextUpdate);
    }
    
    // Start the countdown updates
    setTimeout(updateSalesCount, Math.floor(Math.random() * 3000) + 2000); // Random initial delay
}

