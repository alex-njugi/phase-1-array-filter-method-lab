// Code your solution here
// Function to find matching drivers (case insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to find drivers whose names start with given letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  // Function to match drivers by name property in an object array
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  // Export the functions for testing
  module.exports = { findMatching, fuzzyMatch, matchName };
  
