
describe('First Sample test', () => {
    it('should assert that true is equal to true', () => {
        expect(true).to.equal(true);
    });
});

describe('Render App', () => {
    it('should render the app link', () => {
        cy.visit('https://www.sortinghat.tech/');
    });

    it('should visit local host', () => {
        cy.visit('/');
    });

    it('finds the appropriate elements for Landing Page', () => {
        cy.visit('/');

        // cy.get('h2').should('contian', 'Discover the Tech Career for You');
        cy.contains('Discover the Tech Career for You');
        cy.contains('Take our 5 minute survey to discover which tech field would be right for you. Discover the opportunity at your fingertips.');
        cy.contains('Start Quiz');
    });

    it('Button onclick should work', () => {
        cy.visit('/');

        cy.get('.z-10.w-full').click();
        cy.contains('Question 1');
    });
});

