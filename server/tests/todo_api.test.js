const request = require('supertest');
const app = require('../app');

describe('Todo API', () => {
  // Test creating a new Todo item
  it('should create a new Todo item', async () => {
    const todo = {
      title: 'Test Todo',
      description: 'This is a test Todo item',
    };

    const response = await request(app)
      .post('http://localhost:3001/api/todos')
      .send(todo);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe(todo.title);
    expect(response.body.description).toBe(todo.description);
  });

  // Test retrieving all Todo items
  it('should retrieve all Todo items', async () => {
    const response = await request(app).get('/api/todos');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  // Test updating a Todo item
  it('should update a Todo item', async () => {
    // Test case for updating a Todo item
  });

  // Test deleting a Todo item
  it('should delete a Todo item', async () => {
    // Test case for deleting a Todo item
  });
});
