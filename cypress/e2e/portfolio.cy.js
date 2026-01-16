describe('Contact page tests', () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("Hire Me").click();
  });

  it("No email has been entered", () => {
    cy.get('[data-testid="contact-submit"]').click();

    cy.contains("Email is required").should("be.visible");
  });

  it("Wrong email has been entered", () => {
    cy.get('[data-testid="contact-email"]').type("wrongemail");
    cy.get('[data-testid="contact-submit"]').click();

    cy.contains("Please enter a valid email address").should("be.visible");
  });

  it("Form has been successfully submitted", () => {
    cy.get('[data-testid="contact-email"]').type("test@test.com");
    cy.get('[data-testid="contact-company"]').type("Lorem Ipsum");

    cy.get('[data-testid="contact-submit"]').click();

    cy.contains("Opening your mail client").should("be.visible");

    cy.location("pathname", { timeout: 5000 })
      .should("eq", "/thank-you");
  });
})

describe('Main page tests', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Dark mode toggle", () => {
    cy.get('[data-testid="theme-toggle"]').click();
    cy.get(".dark").should("exist");

    cy.get('[data-testid="theme-toggle"]').click();
    cy.get(".dark").should("not.exist");
  });

  it("Change the language of the site", () => {
    cy.get('[data-testid="language-toggle"]').click();
    cy.contains("İletişime Geç").should("be.visible");

    cy.get('[data-testid="language-toggle"]').click();
    cy.contains("Hire Me").should("be.visible");
  });

  it("Open a GitHub project link", () => {
    cy.get('[data-testid="project-github"]').first()
      .invoke("removeAttr", "target")
      .click();

    cy.url().should("include", "github.com");
  });
})