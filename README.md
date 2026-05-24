# 📝 Notes App

A full-stack productivity-focused notes application built with React, Node.js, Express, and MongoDB. Write, organize, search, and manage your notes — all in one place.

> **Status:** 🚧 Work in progress — Authentication UI is complete. Core notes features are actively being built.

---

## ✨ Features

- 🔐 **User Authentication** — Secure signup and login flow (UI complete)
- 📄 **Create, Edit & Delete Notes** — Full CRUD functionality *(coming soon)*
- 🔍 **Search & Filter** — Quickly find what you're looking for *(coming soon)*
- 🏷️ **Tags & Categories** — Organize notes your way *(coming soon)*

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Backend | Node.js, Express |
| Database | MongoDB |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:

- [Node.js](https://nodejs.org/) (v18 or above)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/notes-app.git
cd notes-app

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd frontend
npm install
```

### Environment Variables

Create a `.env` file in the `/server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Run the App

```bash
# Start the backend
cd server
npm run dev

# Start the frontend (in a new terminal)
cd client
npm start
```

The app should be running at `http://localhost:3000`

---

## 📁 Project Structure

```
notes-app/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
├── server/          # Express backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── index.js
└── README.md
```

---

## 🗺️ Roadmap

- [x] Project setup
- [x] Signup & Login UI
- [ ] Auth backend (JWT + cookies)
- [ ] Create, edit, delete notes
- [ ] Search and filter
- [ ] Tags and categories
- [ ] Deployment

---

## 🤝 Contributing

This is a personal project currently under development. Feel free to fork and experiment — PRs are welcome once the core features are in place.

---

built by Goutham with ❤️

---

*Built with focus. More features shipping after sem exams. 😄*
