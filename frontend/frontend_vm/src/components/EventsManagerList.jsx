// VolunteerEventsList.jsx
import {Box, Grid2} from "@mui/material";
import {useOutletContext} from "react-router-dom";
import EventManagerCard from "./EventManagerCard.jsx";
import  {useEffect, useMemo, useState} from "react";
import {getAllCompletedEventRecordsByVolunteerName, getAllEventRecordsByVolunteerName} from "../services/api.jsx"; // 确保引入 VolunteerEventCard 组件

const EventsManagerList = () => {
    const { user } = useOutletContext();
    const [events, setEvents] = useState([]);
    const [events_c, setEvents_c] = useState([]);
    // 监听js变量的变化，更新CSS变量
    useEffect(() => {
        (async () => {
            try {
                setEvents(await getAllEventRecordsByVolunteerName(user))
                setEvents_c(await getAllCompletedEventRecordsByVolunteerName(user));
            } catch (error) {
                console.error('Error fetching event records:', error);
            }
        })()
    }, [user]);
    const titles = useMemo(() => events_c.map(({ title }) => title), [events_c]);
    return (
        <Box sx={{ p: 3 }}>
            <Grid2 container spacing={2}>
                {events.map((event, index) => (
                    <Grid2 item xs={12} sm={6} md={4} key={index}>
                        <EventManagerCard event={event} user={user} initialChecked={titles.includes(event.title)}/>
                    </Grid2>
                ))}
            </Grid2>
        </Box>

    );
};

export default EventsManagerList;
