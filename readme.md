# 📒 Todo App Server (Express + TypeScript + MongoDB)

This is a simple **Todo App backend** built with **Express**, **TypeScript**, and **MongoDB**.  
It provides RESTful API endpoints to create, read, update, and delete todo items.

---

## 🚀 Live Link

Since this is a backend-only project, you can run it locally using the instructions below.  
If deployed, update this section with the live link.

---

## 🛠 Technologies Used

- **Node.js**
- **Express.js (v5)**
- **TypeScript**
- **MongoDB**
- **Nodemon** (for development)
- **@types/express** (TypeScript type support)

---

## 🌟 Core Features

✅ Create a new todo  
✅ Retrieve all todos  
✅ Retrieve a single todo by ID  
✅ Update a todo  
✅ Delete a todo  
✅ Global error handling  
✅ 404 Route handling  
✅ Clean project structure with modular routing

---

## 📦 Dependencies

| **Dependency**       | **Purpose**                              |
| -------------------- | ---------------------------------------- |
| express              | Web framework for Node.js                |
| mongodb              | MongoDB Node.js driver                   |
| nodemon (dev)        | Automatically restarts server on changes |
| typescript (dev)     | Adds TypeScript support                  |
| @types/express (dev) | Type definitions for Express             |

---

## ⚙️ Project Structure

/src  
├── app.ts → Express app setup  
├── server.ts → Server bootstrap  
├── config/  
│ └── mongodb.ts → MongoDB connection config  
└── todos/  
└── todo.routers.ts → Todo route handlers

---

## 💾 Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/todo-app-server.git
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure MongoDB

In `src/config/mongodb.ts`, the MongoDB URI is already set:

```bash
mongodb+srv://todo:todo@cluster0.0m3jt.mongodb.net/todoDB
```

If you want to use your own database:

- Replace the `uri` value with your MongoDB connection string.

### 4️⃣ Build (optional, if you set up TypeScript build)

```bash
npx tsc
```

### 5️⃣ Start the server

```bash
npm run dev
```

The server will start at:

```bash
[http://localhost:5000](http://localhost:5000)
```

---

## 🔑 API Endpoints

| Method | Endpoint                 | Description         |
| ------ | ------------------------ | ------------------- |
| GET    | `/`                      | Welcome message     |
| GET    | `/todos`                 | Get all todos       |
| POST   | `/todos/create-todo`     | Create a new todo   |
| GET    | `/todos/:id`             | Get a todo by ID    |
| PATCH  | `/todos/update-todo/:id` | Update a todo by ID |
| DELETE | `/todos/delete-todo/:id` | Delete a todo by ID |

---

## 🖥️ Example Request Payloads

### ✅ Create Todo

**POST** `/todos/create-todo`

```json
{
  "title": "Finish homework",
  "body": "Math and Science",
  "isCompleted": false
}
```

### ✅ Update Todo

**PATCH** `/todos/update-todo/:id`

```json
{
  "title": "Finish homework updated",
  "body": "Math, Science, English",
  "isCompleted": true
}
```

---

## 🚨 Error Handling

- Global error handler: Catches application-level errors.

- 404 route handler: Catches undefined routes.

## 📋 Scripts

npm run dev → Run with nodemon (dev mode)  
npm test → Test script (currently placeholder)

---

### 👨‍💻 Author

Obidy Hasan Naim
GitHub: [https://github.com/obidyhasan](https://github.com/obidyhasan)

---

### 💡 Future Improvements

- Add unit tests

- Add user authentication (login/register)

- Add filtering and pagination on todos

- Deploy to cloud platforms (Render, Railway, etc.)

✅ Happy coding!
