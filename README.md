# Finance Control

Finance control is a self-hosted, privacy-focused personal finance application. The system allow users to track expenses, manage accounts, and automate data entry via imports and third-party integrations (Plaid/Simplefin). The application prioritizes a modern "Glassmorphism" UI, robust reporting, and flexible deployment options.

The core philosophy is "Manual Control with Automated Assistance": users retain full edit rights over every ledger entry, while automation features like Bank Sync (via Plaid/Simplefin), CSV imports, and Recurring Rules reduce the friction of daily logging.

## Installation & Setup

### 1. Clone the repository

```bash
git clone
```

### 2. Install Dependencies

```bash
npm install
npx prisma generate
```

### 3. Setup Environmental variables

create a `.env` or `.env.local` and a dev.db (if using local db) file in the project root directory

```plaintext
DATABASE_URL="your db url" or "file:./dev.db" for local
```

### 4. STart the Developmet Server

```bash
npm run dev
```
