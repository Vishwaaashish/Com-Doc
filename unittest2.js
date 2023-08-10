describe('Navigation and Authentication', () => {
    it('should navigate to the dashboard after successful login', () => {
      cy.visit('/login'); // Assuming '/login' is the URL of your login page
  
      cy.get('input[name="username"]').type('user123');
      cy.get('input[name="password"]').type('password123');
  
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/dashboard'); // Assuming '/dashboard' is the URL of the dashboard page
      cy.contains('Welcome to the Dashboard'); // Assuming this message appears on the dashboard
    });
  
    it('should display an error message for invalid login', () => {
      cy.visit('/login');
  
      cy.get('input[name="username"]').type('invalidUser');
      cy.get('input[name="password"]').type('wrongPassword');
  
      cy.get('button[type="submit"]').click();
  
      cy.contains('Invalid username or password.').should('be.visible'); // Assuming error message appears on failed login
      cy.url().should('include', '/login'); // Staying on the login page after failed login attempt
    });
  
    it('should log out and redirect to the home page', () => {
      cy.login('user123', 'password123'); // Assuming you have a custom Cypress command for login
  
      cy.get('button[data-testid="logout"]').click(); // Assuming a logout button with a 'data-testid' attribute
  
      cy.url().should('include', '/home'); // Assuming '/home' is the URL of the home page
      cy.contains('Welcome to our website'); // Assuming this message appears on the home page
    });
  });
  