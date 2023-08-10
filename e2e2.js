describe('Shopping Cart Checkout', () => {
    it('should add items to the cart and complete the checkout process', () => {
      cy.visit('https://conduit.com'); // Replace with your website's URL
  
      // Add items to the cart
      cy.contains('Products').click();
      cy.get('.product-item').eq(0).find('button').click();
      cy.get('.product-item').eq(1).find('button').click();
  
      // Go to the cart
      cy.contains('Cart').click();
  
      // Verify items in the cart
      cy.get('.cart-item').should('have.length', 2);
  
      // Proceed to checkout
      cy.contains('Checkout').click();
  
      // Fill out shipping information
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="address"]').type('123 Main St');
      cy.get('input[name="city"]').type('City');
      cy.get('input[name="zip"]').type('12345');
      cy.get('button[type="submit"]').click();
  
      // Assert successful checkout
      cy.contains('Thank you for your order!').should('be.visible');
    });
  });
  