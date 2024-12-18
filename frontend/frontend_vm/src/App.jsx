// App.jsx
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout'; // 引入 Layout 组件
import VolunteerEventsList from "./components/VolunteerEventsList.jsx";
import HomePage from "./pages/HomePage.jsx";
import EventsManagerList from "./components/EventsManagerList.jsx";
import React, {useState} from "react";
import {fetchEvents} from "./services/api.jsx";
import VolunteerHomeList from "./components/VolunteerHomeList.jsx";
import VolunteerInfoForm from "./components/VolunteerInfoForm.jsx";

const App = () => {
    const [events, setEvents] = useState([]);

    const loadEvents = async () => {
        const data = await fetchEvents();
        setEvents(data);  // 将获取的数据存入 volunteers 状态
    };
    // 监听js变量的变化，更新CSS变量
    React.useEffect(() => {
        loadEvents()
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout events={events} />}>
                    <Route index element={<HomePage />} />
                    <Route path="volunteer-home" element={<VolunteerHomeList events={events} />}  >
                        <Route path="volunteer-info" element={<VolunteerInfoForm />} />
                    </Route>
                    <Route path="events_vm" element={<VolunteerEventsList/>} />
                    <Route path="events_manager" element={<EventsManagerList/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
