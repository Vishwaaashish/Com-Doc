// cypress/support/seedTestData.js

Cypress.Commands.add('seedTestData', () => {
  // Define your test data here
  const testUsers = [
    { name: 'User 1', email: 'user1@example.com' },
    { name: 'User 2', email: 'user2@example.com' },
    // Add more test data as needed
  ];

  // Use the API endpoints provided by your backend to seed the test data
  testUsers.forEach(user => {
    cy.request('POST', '/api/create-user', user); // Adjust the API endpoint
  });

  // You can seed other types of data similarly

  // Wait for the data to be seeded before proceeding with tests
  cy.log('Test data seeded successfully');
});
