# Nairobi Prime Homes

A real estate portfolio management dashboard for listing, browsing, and managing premium properties across Nairobi's most sought-after neighborhoods — Westlands, Kilimani, Runda, and Lavington.

---

## Features

- **Dashboard** — portfolio overview with hero section, key stats (total listings, available count, portfolio value), and featured properties
- **Property Listings** — browse all properties with search by title, location, or type, and filter by status
- **Property Detail** — full property view with image, specs, description, agent info, and delete action
- **Add / Edit Listing** — form to create or update a property with all fields (title, location, price, type, status, beds, baths, area, image, agent, description)
- **REST API** — powered by `json-server` with a local `db.json` file

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite 8 |
| Routing | React Router DOM 7 |
| Styling | Plain CSS (Manrope + Playfair Display) |
| API | json-server 1.0 |
| Linting | ESLint 10 |

---

## Project Structure

```
real-estate-app/
├── real-estate/
│   ├── db.json                  # json-server database
│   ├── utils.js                 # shared utility functions
│   └── src/
│       ├── App.jsx              # root component with router and state
│       ├── App.css              # global styles
│       ├── index.css            # base resets
│       ├── main.jsx             # React entry point
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Dashboard.jsx
│       │   ├── Properties.jsx
│       │   ├── PropertyCard.jsx
│       │   ├── PropertyDetail.jsx
│       │   └── PropertyForm.jsx
│       └── services/
│           └── propertiesApi.js # all API calls (getAll, getOne, create, update, delete)
├── package.json
└── vite.config.js
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/kerryopiyo1-stack/real-estate-app.git
cd real-estate-app
npm install
```

### Running the App

You need **two terminals** running simultaneously:

**Terminal 1 — Start the API server:**
```bash
npm run server
```
Runs `json-server` on `http://localhost:3001`

**Terminal 2 — Start the dev server:**
```bash
npm run dev
```
Opens the app at `http://localhost:5173`

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run server` | Start json-server API on port 3001 |
| `npm run lint` | Run ESLint |

---

## API Endpoints

The app uses `json-server` watching `real-estate/db.json` on port `3001`.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/properties` | Fetch all properties |
| GET | `/properties/:id` | Fetch a single property |
| POST | `/properties` | Create a new property |
| PUT | `/properties/:id` | Update a property |
| DELETE | `/properties/:id` | Delete a property |

---

## Property Data Shape

```json
{
  "id": "1",
  "title": "Modern Villa",
  "location": "Nairobi, Karen",
  "price": 25000000,
  "type": "Sale",
  "status": "Available",
  "beds": 4,
  "baths": 3,
  "area": 320,
  "image": "https://...",
  "agent": "Kerry Opiyo",
  "description": "A stunning modern villa in Karen."
}
```

**Type** — `Sale` | `Rent`

**Status** — `Available` | `Sold` | `Rented`

---


## Author

**Kerry Opiyo** — [GitHub](https://github.com/kerryopiyo1-stack)