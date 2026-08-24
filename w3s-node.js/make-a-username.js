const firstName = "Blair";
const lastName = "Woldrof";

// Create username (lowercase, no space)
const username = (firstName + lastName).toLowerCase();

// Create initials (uppercase first letters)
const initials = firstName[0].toUpperCase() + lastName[0].toUpperCase();

// Print results
console.log("Username: " + username);
console.log("Initials: " + initials);
