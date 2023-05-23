# PERN Todo App

A simple todo application built using the PERN stack.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)

## Introduction

This project is a todo application that allows users to create, update, and delete tasks. It is built using the PERN stack, which consists of PostgreSQL as the database, Express as the backend framework, React as the frontend library, and Node.js as the runtime environment.

## Features

- Create todo: Users can create new todo tasks with a title and description.
- Update todo: Users can edit and update the details of their existing todo tasks.
- Delete todo: Users can delete their todo tasks when they are completed.
- Mark as complete: Users can mark their tasks as completed or incomplete.

## Installation

To run this application locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/mike-ninja/Todo_app.git
   ```

2. Navigate to the project directory:

   ```shell
   cd Todo_app
   ```

3. Install the client dependencies:

   ```shell
   cd client/ && npm install && cd ..
   ```

4. Install the server dependencies:

   ```shell
   cd server/ && npm install && cd ..
   ```
   
5. Set up the PostgreSQL database:
   - Create a new database in PostgreSQL.
   - Configure the database connection settings in `server/db_config/db.js`.
   - Create the table as shown in `server/db_config/database.sql`.

5. Build and start app:

   ```shell
   ./start_app.sh
   ```

6. Open your browser and visit `http://localhost:3001` to access the application.

## Usage

- Create a new todo task by clicking on the "Add Todo" button.
- Edit a todo task by clicking on the task's "Edit" button.
- Mark a task as completed by checking the checkbox.
- Delete a task by clicking on the task's "Delete" button.

## Technologies

- PostgreSQL: Relational database management system.
- Express: Web application framework for building APIs.
- React: JavaScript library for building user interfaces.
- Node.js: JavaScript runtime environment.
