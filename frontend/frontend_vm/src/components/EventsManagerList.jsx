// VolunteerEventsList.jsx
import {Box, Grid2} from "@mui/material";
import {useOutletContext} from "react-router-dom";
import EventManagerCard from "./EventManagerCard.jsx";
import React, {useState} from "react";
import {getAllEventRecordsByVolunteerName} from "../services/api.jsx"; // 确保引入 VolunteerEventCard 组件

const EventsManagerList = () => {
    const { user } = useOutletContext();
    const [events, setEvents] = useState([]);

    const loadEvents = async () => {
        const data = await getAllEventRecordsByVolunteerName(user);
        setEvents(data);  // 将获取的数据存入 volunteers 状态
    };
    // 监听js变量的变化，更新CSS变量
    React.useEffect(() => {
        loadEvents()
    }, []);
    return (
        <Box sx={{ p: 3 }}>
            <Grid2 container spacing={2}>
                {events.map((event, index) => (
                    <Grid2 item xs={12} sm={6} md={4} key={index}>
                        <EventManagerCard event={event} user={user}/>
                    </Grid2>
                ))}
            </Grid2>
        </Box>

    );
};

export default EventsManagerList;
