// VolunteerEventsList.jsx
import {Box, Grid2} from "@mui/material";
import {useOutletContext} from "react-router-dom";
import VolunteerEventCard from "./VolunteerEventCard"; // 确保引入 VolunteerEventCard 组件

const VolunteerEventsList = () => {

    const { events } = useOutletContext();

    return (
        <Box sx={{ p: 3 }}>
            <Grid2 container spacing={2}>
                {events.map((event, index) => (
                    <Grid2 item xs={12} sm={6} md={4} key={index}>
                        <VolunteerEventCard event={event} />
                    </Grid2>
                ))}
            </Grid2>
        </Box>

    );
};

export default VolunteerEventsList;
