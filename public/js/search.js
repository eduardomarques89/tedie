// Array to store the search inputs
let searchHistory = [];

// Function to handle the search button click
function handleSearch(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the input value
  const searchInput = document.getElementById('buscar').value;

  // Add the input value to the search history array
  searchHistory.push(searchInput);

  // Clear the input field
  document.getElementById('buscar').value = '';

  // Log the search history array to the console
  console.log(searchHistory);
}

// Add event listener to the search button
document.getElementById('searchButton').addEventListener('click', handleSearch);