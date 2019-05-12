import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create();
    this.api.defaults.baseURL = process.env.API_URL || 'http://localhost:8080';
  }

  async get(url, {headers, params} = {}) {
    const response = await this.api.get(url, {headers, params});
    return response.data;
  }

  async post(url, {body, headers, params}) {
    const response = await this.api.post(url, body, {
      headers,
      params,
    });

    return response.data;
  }
}

export default ApiService;
