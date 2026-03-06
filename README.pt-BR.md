[🇺🇸 English version](README.md)

# 📝 CRUD Tasks — Node.js

API REST para gerenciamento de tarefas construída **sem nenhum framework**, utilizando apenas os módulos nativos do Node.js.

> Desenvolvido para aprofundar o entendimento de como o HTTP funciona internamente em frameworks como Express e Fastify — implementando manualmente roteamento, body parsing e middlewares.

---

## 🚀 Funcionalidades

- ✅ Criar tarefa
- ✅ Listar todas as tarefas
- ✅ Atualizar título e/ou descrição de uma tarefa
- ✅ Marcar/desmarcar tarefa como concluída
- ✅ Deletar tarefa
- ✅ Importação de tarefas via arquivo CSV

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| **Node.js** (nativo) | Servidor HTTP com `node:http` |
| **node:crypto** | Geração de UUIDs únicos |
| **node:fs** | Leitura do arquivo CSV |
| **csv-parse** | Parse do arquivo CSV |

> Nenhum framework foi utilizado. Roteamento, leitura de body e middlewares foram implementados do zero.

---

## 📋 Endpoints

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/tasks` | Lista todas as tarefas |
| `POST` | `/tasks` | Cria uma nova tarefa |
| `PUT` | `/tasks/:id` | Atualiza título e/ou descrição |
| `PATCH` | `/tasks/:id/complete` | Alterna status de conclusão |
| `DELETE` | `/tasks/:id` | Remove uma tarefa |

---

## 📦 Estrutura da Tarefa

```json
{
  "id": "uuid-gerado-automaticamente",
  "title": "Título da tarefa",
  "description": "Descrição da tarefa",
  "completed_at": null,
  "created_at": "2024-01-01T00:00:00.000Z",
  "updated_at": "2024-01-01T00:00:00.000Z"
}
```

---

## ▶️ Como executar

### Pré-requisitos

- Node.js 18+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/niltonjrdev/crud-tasks-nodejs.git

# Acesse a pasta
cd crud-tasks-nodejs

# Instale as dependências
npm install
```

### Rodando o servidor

```bash
node src/server.js
```

O servidor estará disponível em `http://localhost:3333`

### Importando tarefas via CSV

Com o servidor rodando, execute em outro terminal:

```bash
node src/import-csv.js
```

O arquivo `src/tasks.csv` segue o formato:

```csv
title,description
Minha tarefa,Descrição da tarefa
```

---

## 🔍 Exemplos de uso

### Criar tarefa
```http
POST /tasks
Content-Type: application/json

{
  "title": "Estudar Node.js",
  "description": "Entender como o HTTP funciona sem frameworks"
}
```

### Atualizar tarefa
```http
PUT /tasks/:id
Content-Type: application/json

{
  "title": "Novo título"
}
```

### Marcar como concluída
```http
PATCH /tasks/:id/complete
```

---

## 💡 O que foi aprendido

- Como o Node.js lida com requisições HTTP no nível mais baixo
- Leitura de body como **stream** de dados (`req.on('data')`)
- Implementação de **roteamento manual** com expressões regulares
- Criação de **middlewares** sem dependências externas
- Processamento de arquivos CSV com streams

---

## 👨‍💻 Autor

Feito por **Nilton Junior** — [LinkedIn](https://linkedin.com/in/niltonjrdev) · [GitHub](https://github.com/niltonjrdev)