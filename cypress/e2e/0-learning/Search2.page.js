const URL = 'http://zero.webappsecurity.com/';
const SRCBOX = '#searchTerm';

class SearchBox {
    static visit() {
        cy.visit(URL);
    }

    static src() {
        cy.get('#searchTerm').type('online {enter}');
    }
}

export default SearchBox;