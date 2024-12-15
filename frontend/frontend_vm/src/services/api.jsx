import axios from 'axios';
const API_URL = '/api/volunteer';

// 登录
export const loginAdmin = async (username, password) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                action: 'login',
                username,
                password
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

// 注册
export const registerAdmin = async (username, password, invitationCode, phone, email) => {
    try {
        console.log(invitationCode)
        const response = await axios.get(API_URL, {
            params: {
                action: 'register',
                username,
                password,
                invitationCode,
                phone,
                email
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error registering:', error);
        throw error;
    }
};
