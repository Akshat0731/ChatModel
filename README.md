# Mini WhatsApp

A simple **Mini WhatsApp** web application built using **Node.js, Express.js, MongoDB, Mongoose, EJS, and HTML/CSS**. The application allows users to create, view, edit, and delete chat messages.

## Features

* **View all chats**
* **Create a new chat**
* **Edit an existing chat**
* **Delete a chat**
* Displays sender and receiver names
* Displays chat message
* Displays chat date and time
* Uses MongoDB for storing chat data
* Uses Mongoose for schema definition and database operations
* Uses EJS for dynamic rendering

## Technologies Used

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **EJS**
* **HTML**
* **CSS**
* **Method Override**

## Chat Schema

Each chat contains the following fields:

* **from** — Name of the sender
* **to** — Name of the receiver
* **msg** — Chat message
* **created_at** — Date and time when the chat was created

The `msg` field has a maximum length of **50 characters**.

## Routes

* **GET `/chats`** — Displays all chats
* **GET `/chats/new`** — Opens the form to create a new chat
* **POST `/chats`** — Creates and saves a new chat
* **GET `/chats/:id/edit`** — Opens the edit form for a chat
* **PUT `/chats/:id`** — Updates an existing chat message
* **DELETE `/chats/:id`** — Deletes a chat

## Database

The application connects to a MongoDB database named **whatsapp** using Mongoose.

Chat documents are stored in MongoDB and retrieved using the Mongoose `Chat` model.

## CRUD Operations

The application demonstrates complete **CRUD operations**:

* **Create** — Add a new chat
* **Read** — Display all chats
* **Update** — Edit a chat message
* **Delete** — Remove a chat

## Validation

The Mongoose schema defines the expected data types for chat fields and applies validation such as:

* Required sender
* Required receiver
* Required creation date
* Maximum message length of 50 characters
