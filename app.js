/*
 * Fake JavaScript bundle for educational purposes.
 * Contains a hard‑coded API key for Challenge 2.
 */

// Challenge 2: Hard‑coded API key (do not use in real projects!)
const API_KEY = 'FAKE-API-KEY-1234-SECRET';

// Just a dummy function to simulate using the API key
function fetchFakeData() {
  console.log('Using API key:', API_KEY);
  return { data: 'fake weather data' };
}

// Expose the function globally for potential use in the console
window.fetchFakeData = fetchFakeData;
