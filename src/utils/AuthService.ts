import authAPI from '../api/AuthAPI';
import { RegisterType } from '../utils/types/types';

export class AuthService {
    public signup({ email, login, first_name, second_name, phone, password }: RegisterType) {
        authAPI.signup({ email, login, first_name, second_name, phone, password });
    }
}

export default new AuthService();