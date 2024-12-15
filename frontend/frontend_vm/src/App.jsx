// App.jsx
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout'; // 引入 Layout 组件
import VolunteerEventsList from "./components/VolunteerEventsList.jsx";
import HomePage from "./pages/HomePage.jsx";
import EventsManagerList from "./components/EventsManagerList.jsx";
// 示例事件数据
const sampleEvents = [
    {
        title: "社区清理活动",
        date: "2024-01-15",
        location: "城市公园",
        duration: "3小时",
        content: "加入我们，一起进行社区清理活动！",
        attachmentLink: "http://example.com/attachment",
        imageUrl: "../imgs/1.jpg"
    },
    {
        title: "食品募捐活动",
        date: "2024-02-20",
        location: "市中心",
        duration: "4小时",
        content: "帮助我们为有需要的人收集食物。",
        attachmentLink: null,
        imageUrl: "../imgs/2.jpg"
    },
    // 可以添加更多事件
];


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout events={sampleEvents} />}>
                    <Route index element={<HomePage />} />
                    <Route path="events_vm" element={<VolunteerEventsList/>} />
                    <Route path="events_manager" element={<EventsManagerList/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
