# Autotests TypeScript Cypress

End-to-end test automation suite for IMDb using Cypress, TypeScript, and the Page Object Model design pattern.

## 📋 Project Overview

This project provides comprehensive E2E testing for web applications using:
- **Cypress** - Modern E2E testing framework
- **TypeScript** - Type-safe testing code
- **Page Object Model** - Maintainable test structure
- **Auth0 Integration** - Automated authentication support

## 📁 Project Structure

```
cypress/
├── e2e/                           # Test specifications
│   ├── accountMenu.spec.ts
│   ├── header.spec.ts
│   └── userProfile.spec.ts
├── fixtures/                      # Test data
│   └── example.json
├── page-obj/                      # Page Object Models
│   ├── base.ts                    # Base page class with common methods
│   ├── loginPage.ts
│   └── header/
│       ├── header.ts             # Header page object
│       └── accountMenu.ts        # Account menu page object
│   └── profile/
│       ├── profilePage.ts
│       └── editProfilePage.ts
├── support/                       # Configuration and utilities
│   ├── e2e.ts                    # Global E2E setup
│   ├── commands.ts               # Custom Cypress commands
│   ├── auth0.ts                  # Auth0 authentication
│   └── env.ts                    # Environment variables
├── fixtures/                      # Test data files
└── cypress.config.ts             # Cypress configuration

```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:
```bash
git clone https://github.com/VanoTheOne/Autotests_TypeScript_Cypress.git
cd Autotests_TypeScript_Cypress
```

2. Install dependencies:
```bash
npm install
```

### Configuration

Update credentials in `cypress/support/env.ts`:
```typescript
export const env = {
  login: 'your-email@example.com',
  password: 'your-password'
}
```

## 🧪 Running Tests

### Open Cypress Test Runner
```bash
npm test
```

### Run Tests Headlessly
```bash
npx cypress run
```

### Run Specific Test File
```bash
npx cypress run --spec "cypress/e2e/header.spec.ts"
```

### Run with Specific Browser
```bash
npx cypress run --browser chrome
npx cypress run --browser firefox
```

## 🛠 Development Scripts

| Command | Description |
|---------|-------------|
| `npm test` | Opens Cypress interactive test runner |
| `npm run lint` | Run ESLint with debug output and auto-fix |
| `npm run lint:write` | Run ESLint and Prettier formatting |
| `npm run pretty` | Format code with Prettier |

## 📖 Test Structure

Tests follow the **Page Object Model (POM)** pattern for maintainability and reusability:

### Example Test Structure
```typescript
import Base from '../page-obj/base';
import Header from '../page-obj/header/header';

describe('Header tests', function () {
  let base: Base;
  let header: Header;

  beforeEach(() => {
    base = new Base();
    header = new Header();
    
    cy.login();
    base.navigate('https://www.imdb.com/');
  });

  it('Should check watchlist functionality', () => {
    header.openWatchlist();
    cy.title().should('eq', 'Your Watchlist');
  });
});
```

## 🏗 Page Object Model

All page objects extend the `Base` class which provides common functionality:

```typescript
export default class Base {
  navigate(url: string) {
    return cy.visit(url);
  }

  reloadPage() {
    return cy.reload();
  }
}
```

Create new page objects by extending `Base`:
```typescript
import Base from '../base';

export default class MyPage extends Base {
  // Define page elements
  myElement = () => cy.get('[data-cy=element]');
  
  // Define page actions
  performAction() {
    this.myElement().click();
  }
}
```

## 🔐 Authentication

The project includes Auth0 integration for handling authentication in `cypress/support/auth0.ts`. Custom Cypress commands are defined in `cypress/support/commands.ts`.

### Using Custom Login Command
```typescript
cy.login(); // Logs in with credentials from env.ts
```

## ⚙️ Configuration

### cypress.config.ts
- **Viewport**: 1920x1280
- **Browser**: Runs in incognito mode for Chromium browsers
- **Spec Pattern**: `cypress/e2e/**/*.spec.{js,jsx,ts,tsx}`
- **Support File**: `cypress/support/e2e.ts`

### TypeScript Configuration
- **Target**: ES2020+
- **Module**: nodenext
- **Strict Mode**: Enabled
- **Types**: Cypress & Node.js

## 📦 Dependencies

### Main Dependencies
- **cypress** - E2E testing framework
- **cypress-xpath** - XPath support for Cypress
- **typescript** - TypeScript compiler

### Dev Dependencies
- **eslint** - Code linting
- **prettier** - Code formatting
- **@types/node** - Node.js type definitions

## 🧬 Testing Best Practices

1. **Keep Tests Isolated** - Each test should be independent and not rely on other tests
2. **Use Page Objects** - Encapsulate element selectors in page object methods
3. **Clear Naming** - Use descriptive test names that explain what is being tested
4. **Data Setup** - Use fixtures for test data
5. **No Hard Waits** - Use Cypress built-in waiting mechanisms instead of `cy.wait()`

## 🐛 Troubleshooting

### Tests Fail with Authentication Error
- Verify credentials in `cypress/support/env.ts`
- Check if Auth0 service is available
- Ensure browser cookies are properly cleared between runs

### Element Not Found
- Check element selectors in page objects
- Verify element is visible before interaction
- Use `cy.debug()` or `cy.pause()` to inspect state

### Viewport Issues
- Adjust viewport dimensions in `cypress.config.ts`
- Test responsive design by changing viewport settings

## 📚 Resources

- [Cypress Documentation](https://docs.cypress.io)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Page Object Model Pattern](https://docs.cypress.io/guides/core-concepts/interacting-with-elements#Locators)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📝 License

ISC

## 👤 Author

VanoTheOne

---

**Repository**: [Autotests_TypeScript_Cypress](https://github.com/VanoTheOne/Autotests_TypeScript_Cypress)
