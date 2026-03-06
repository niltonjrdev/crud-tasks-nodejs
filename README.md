[🇧🇷 Versão em Português](README.pt-BR.md)

# 📝 CRUD Tasks — Node.js

REST API for task management built **without any framework**, using only Node.js native modules.

> Developed to deepen the understanding of how HTTP works under the hood of frameworks like Express and Fastify — manually implementing routing, body parsing, and middlewares.
---

## 🚀 Features

- ✅ Create a task
- ✅ List all tasks
- ✅ Update a task's title and/or description
- ✅ Mark/unmark a task as completed
- ✅ Delete a task
- ✅ Bulk import tasks via CSV file

---

## 🛠️ Technologies

| Technology | Usage |
|---|---|
| **Node.js** (native) | HTTP server using `node:http` |
| **node:crypto** | Unique UUID generation |
| **node:fs** | CSV file reading |
| **csv-parse** | CSV file parsing |

> No framework was used. Routing, body reading, and middlewares were all implemented from scratch.

---

## 📋 Endpoints

| Method | Route | Description |
|---|---|---|
| `GET` | `/tasks` | List all tasks |
| `POST` | `/tasks` | Create a new task |
| `PUT` | `/tasks/:id` | Update title and/or description |
| `PATCH` | `/tasks/:id/complete` | Toggle completion status |
| `DELETE` | `/tasks/:id` | Delete a task |

---

## 📦 Task Structure

```json
{
  "id": "auto-generated-uuid",
  "title": "Task title",
  "description": "Task description",
  "completed_at": null,
  "created_at": "2024-01-01T00:00:00.000Z",
  "updated_at": "2024-01-01T00:00:00.000Z"
}
```

---

## ▶️ Getting Started

### Prerequisites

- Node.js 18+

### Installation

```bash
# Clone the repository
git clone https://github.com/niltonjrdev/crud-tasks-nodejs.git

# Navigate to the project folder
cd crud-tasks-nodejs

# Install dependencies
npm install
```

### Running the server

```bash
node src/server.js
```

The server will be available at `http://localhost:3333`

### Importing tasks via CSV

With the server running, execute in another terminal:

```bash
node src/import-csv.js
```

The `src/tasks.csv` file follows this format:

```csv
title,description
My task,Task description
```

---

## 🔍 Usage Examples

### Create a task
```http
POST /tasks
Content-Type: application/json

{
  "title": "Study Node.js",
  "description": "Understand how HTTP works without frameworks"
}
```

### Update a task
```http
PUT /tasks/:id
Content-Type: application/json

{
  "title": "New title"
}
```

### Mark as completed
```http
PATCH /tasks/:id/complete
```

---

## 💡 What I Learned

- How Node.js handles HTTP requests at the lowest level
- Reading request body as a **data stream** (`req.on('data')`)
- Implementing **manual routing** with regular expressions
- Building **middlewares** without external dependencies
- Processing CSV files with streams

---

## 👨‍💻 Author

Made by **Nilton Junior** — [LinkedIn](https://linkedin.com/in/niltonjrdev) · [GitHub](https://github.com/niltonjrdev)