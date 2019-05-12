import ApiService from './api';

class AuthService extends ApiService {
  async signin({email, password}) {
    const headers = {authorization: `Basic ${btoa(email)}:${btoa(password)}`};
    const data = await this.post('/users/authenticate', {headers});

    return data;
  }

  async signup({email, username, password}) {
    const body = {email, username, password};
    const data = await this.post('users/create', {body});

    return data;
  }
}

export default new AuthService();
