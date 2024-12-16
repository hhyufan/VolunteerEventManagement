import axios from 'axios';
const API_URL = '/api/volunteer';

// 登录
export const loginAdmin = async (username, password) => {
    try {
        const response = await axios.get(`${API_URL}/login`, {
            params: {
                username,
                password
            }
        });
        return response.data; // 返回包含 message 的 JSON 对象
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

// 注册
export const registerAdmin = async (username, password, phone, email) => {
    try {
        const response = await axios.post(`${API_URL}/register`, {
            name: username,  // 假设后端的 Volunteer 对象中使用 name 字段
            password,
            phone,
            email
        });
        return response.data; // 返回包含 message 的 JSON 对象
    } catch (error) {
        console.error('Error registering:', error);
        throw error;
    }
};

export const fetchEvents = async () => {
    try {
        const response = await axios.get("/api/events");
        return response.data;
    } catch (error) {
        console.error('Error fetching volunteers:', error);
        throw error;
    }
};

// 获取当前志愿者的所有活动记录
export const getAllEventRecordsByVolunteerId = async (volunteerId) => {
    try {
        const response = await axios.get(`/api/event-records/volunteer/${volunteerId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching event records:', error);
        throw error;
    }
};
