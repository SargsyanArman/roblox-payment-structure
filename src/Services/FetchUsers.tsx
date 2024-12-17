import axios from 'axios';
import { User } from '../Types/User';


const API_URL = 'http://localhost:3001/users';
export const fetchUsers = async (): Promise<User[]> => {
    try {
        const response = await axios.get<User[]>(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};
