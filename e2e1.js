describe('User Registration and Login', () => {
    it('should register a new user and then log in', () => {
      cy.visit('https://conduit.com'); // Replace with your website's URL
  
      // Click on the "Sign Up" link
      cy.contains('Sign Up').click();
  
      // Fill out the registration form
      cy.get('input[name="username"]').type('testuser');
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('input[name="password"]').type('password123');
      cy.get('button[type="submit"]').click();
  
      // Assert successful registration
      cy.contains('Registration successful').should('be.visible');
  
      // Log out
      cy.contains('Log Out').click();
  
      // Log in with the new user
      cy.contains('Log In').click();
      cy.get('input[name="username"]').type('testuser');
      cy.get('input[name="password"]').type('password123');
      cy.get('button[type="submit"]').click();
  
      // Assert successful login
      cy.contains('Welcome, testuser').should('be.visible');
    });
  });
  