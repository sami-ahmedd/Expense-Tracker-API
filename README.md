# Expense Tracker API

A RESTful Node.js and Express-based backend for managing personal or organizational expenses.  
It provides secure CRUD operations, user authentication, and date-filtered reporting.  
Data is persisted via MongoDB using Mongoose models.

---

## 🧩 Features

- User registration and authentication (JWT-based)
- Create, update, and delete expense records
- Retrieve expenses with date-based filters (e.g., last week, month, 3 months)
- Secure request validation and error handling
- Environment configuration via `.env`

---

## ⚙️ Setup

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/Expense-Tracker-API.git

# 2. Navigate into the project
cd Expense-Tracker-API/src

# 3. Install dependencies
npm install

# 4. Configure environment variables
cp .env.example .env
# Set MongoDB URI, JWT secret, and other variables

# 5. Start the server
npm run dev
```

The API will run on `http://localhost:5000` by default.

---

## 📁 Project Structure

```bash
Expense-Tracker-API/
    Expense-Tracker-API/
        src/
            app.js
            .env
            constants/
            controllers/
            models/
            node_modules/
```

**Notable directories:**
- `controllers/` — Route handlers for users and expenses  
- `models/` — Mongoose schema definitions  
- `constants/` — Application-wide constants  
- `src/app.js` — Main Express server setup  

---

## 🧠 Models

| Model | File | Fields |
|-------|------|--------|
| **User** | [models/users.js](src/models/users.js) | `name`, `email`, `password`, `createdAt` |
| **Expense** | [models/expenseModel.js](src/models/expenseModel.js) | `title`, `amount`, `category`, `date`, `user_id` |

---

## 🔌 API Endpoints

### **Expenses**

| Method | Endpoint | Description | Auth | Request Body | Response |
|--------|-----------|--------------|------|---------------|-----------|
| `POST` | `/api/expenses` | Create a new expense | ✅ | `{ title, amount, category, date }` | `{ expense: {...} }` |
| `GET` | `/api/expenses` | Get all expenses or filtered by date | ✅ | `?filter=last-week` / `last-month` / `last-3-months` | `{ allExpenses: [...] }` |
| `PUT` | `/api/expenses/:id` | Update an expense | ✅ | Partial expense object | `{ expense: {...} }` |
| `DELETE` | `/api/expenses/:id` | Delete an expense | ✅ | — | `{ msg: "Deleted successfully" }` |

### **Users**

| Method | Endpoint | Description | Auth | Request Body | Response |
|--------|-----------|-------------|------|---------------|-----------|
| `POST` | `/api/users/register` | Register a new user | ❌ | `{ name, email, password }` | `{ user, token }` |
| `POST` | `/api/users/login` | Authenticate and receive JWT | ❌ | `{ email, password }` | `{ token }` |
| `GET` | `/api/users/profile` | Get user info | ✅ | — | `{ user: {...} }` |

---

## 📦 Notable Dependencies

| Library | Purpose |
|----------|----------|
| **express-validator** | Request validation middleware |
| **bcrypt** | Password hashing |
| **jsonwebtoken (JWT)** | Secure authentication |
| **mongoose** | MongoDB ORM |
| **dotenv** | Environment management |
| **express-session** | Session management (optional for persistent login) |

---

## 🧰 Development Notes

- Input validation is centralized in the controllers.
- Error handling is performed per-route using consistent response structures.
- The app supports query-based filtering for dynamic reports.
- Uses standard Express middleware pattern for modularity.
