// VolunteerEventsList.jsx
import {Box, Grid2} from "@mui/material";
import {useOutletContext} from "react-router-dom";
import VolunteerEventCard from "./VolunteerEventCard";
import {useEffect, useMemo, useState} from "react";
import {getAllEventRecordsByVolunteerName} from "../services/api.jsx"; // 确保引入 VolunteerEventCard 组件

const VolunteerEventsList = () => {

    const { user, events } = useOutletContext();
    const [events_v, setEvents_v] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const data = await getAllEventRecordsByVolunteerName(user);
                setEvents_v(data);
            } catch (error) {
                console.error('Error fetching event records:', error);
            }
        })()
    }, [user]);
    // React的一种Hook策略，以避免重复计算
    const titles = useMemo(() => events_v.map(({ title }) => title), [events_v]);
    return (
        <Box sx={{ p: 3 }}>
            <Grid2 container spacing={2}>
                {events.map((event, index) => (
                    <Grid2 item xs={12} sm={6} md={4} key={index}>
                        <VolunteerEventCard event={event} user={user} isTitleExist={titles.includes(event.title)}/>
                    </Grid2>
                ))}
            </Grid2>
        </Box>

    );
};

export default VolunteerEventsList;
