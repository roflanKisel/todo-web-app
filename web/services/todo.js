import ApiService from './api';

import tokenStorage from './tokenStorage';

class TodoService extends ApiService {
  async getTodos() {
    const response = await this.get('/todos', {
      headers: {
        'x-user-token': tokenStorage.get(),
      },
    });

    return response.todos;
  }

  async createTodo({title, description}) {
    const response = await this.post('/todos/create', {
      body: {
        title,
        description,
      },
      headers: {
        'x-user-token': tokenStorage.get(),
      },
    });

    return response.todo;
  }
}

export default new TodoService();
