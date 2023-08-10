describe('Form Submission', () => {
    it('should successfully submit the form', () => {
      cy.visit('/contact'); // Assuming '/contact' is the URL of your form page
  
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('johndoe@example.com');
      cy.get('textarea[name="message"]').type('This is a test message.');
  
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/thank-you'); // Assuming '/thank-you' is the URL after form submission
      cy.contains('Thank you for your submission!'); // Assuming this message appears on the thank you page
    });
  
    it('should display an error message for invalid input', () => {
      cy.visit('/contact');
  
      cy.get('input[name="name"]').type(''); // Leaving name field empty intentionally
      cy.get('input[name="email"]').type('invalid-email'); // Providing an invalid email
  
      cy.get('button[type="submit"]').click();
  
      cy.contains('Please fill out this field.').should('have.length', 1); // Assuming validation error message appears
      cy.contains('Please enter a valid email address.').should('have.length', 1); // Assuming email validation error message appears
    });
  });
  