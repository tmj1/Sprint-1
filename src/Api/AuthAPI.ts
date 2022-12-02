import { BaseAPI } from './BaseAPI';
import { Router as router } from '../core/Router';
import { RegisterType } from '../utils/types/types';

class AuthAPI extends BaseAPI {
    constructor() {
        super({ path: '/auth' });
    }
    public signup({ email, login, first_name, second_name, phone, password }: RegisterType) {
        return this.post('/register', {
            email,
            login,
            first_name,
            second_name,
            phone,
            password,
        })
            .then((response) => router.go('/'))
            .catch((error) => alert(error));
    }
}
export default new AuthAPI();