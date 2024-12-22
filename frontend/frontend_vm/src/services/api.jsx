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

export const getVolunteerByName = async (name) => {
    try {
        const response = await axios.get(`${API_URL}/findByName`, {
            params: { name }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching volunteer by name:', error);
        throw error;
    }
};

export const getGradeByName = async (name) => {
    try {
        const response = await axios.get(`${API_URL}/grade`, {
            params: { name }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching volunteer by name:', error);
        throw error;
    }
};

export const getGrade = async () => {
    try {
        const response = await axios.get(`/api/events/grade`);
        return response.data;
    } catch (error) {
        console.error('Error fetching volunteer by name:', error);
        throw error;
    }
};

// 获取当前志愿者的所有活动记录
export const getAllEventRecordsByVolunteerName = async (volunteerName) => {
    try {
        const response = await axios.get(`/api/event-records/volunteer/${volunteerName}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching event records:', error);
        throw error;
    }
};

// 获取当前志愿者的所有活动记录
export const getAllCompletedEventRecordsByVolunteerName = async (volunteerName) => {
    try {
        const response = await axios.get(`/api/event-records//completed/volunteer/${volunteerName}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching event records:', error);
        throw error;
    }
};

// 创建新的活动记录
export const createEventRecord = async (volunteerName, eventName) => {
    try {
        const requestBody = {
            eventName: eventName,
            volunteerName: volunteerName
        };
        await axios.post("/api/event-records", requestBody);
    } catch (error) {
        console.error('Error creating event record:', error);
        throw error; // 抛出错误以便调用者处理
    }
};

// 删除活动记录
export const deleteEventRecord = async (volunteerName, eventName) => {
    try {
        const encodedVolunteerName = encodeURIComponent(volunteerName);
        const encodedEventName = encodeURIComponent(eventName);
        await axios.delete(`/api/event-records/${encodedVolunteerName}/${encodedEventName}`);
    } catch (error) {
        console.error('Error deleting event record:', error);
        throw error; // 抛出错误以便调用者处理
    }
};

export const setEventCompletionStatus = async (volunteerName, eventName, completed) => {
    try {
        const encodedVolunteerName = encodeURIComponent(volunteerName);
        const encodedEventName = encodeURIComponent(eventName);
        const response = await axios.put(`/api/event-records/volunteer/${encodedVolunteerName}/event/${encodedEventName}`, null, {
            params: {completed},
        });
        return response.data; // 返回响应数据
    } catch (error) {
        console.error("Error setting event completion status:", error);
        throw error; // 抛出错误以便在调用时处理
    }
};


