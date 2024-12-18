// VolunteerEventCard.jsx
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    FormControlLabel,
    Switch,
    Box
} from '@mui/material';
import {createEventRecord, deleteEventRecord} from "../services/api.jsx";
import {useEffect, useState} from "react";

// eslint-disable-next-line react/prop-types
const VolunteerEventCard = ({ event, user, initialChecked}) => {

    if (!event) {
        return <Typography variant="h6">活动不存在</Typography>;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setChecked(initialChecked);
    }, [initialChecked]);

    // eslint-disable-next-line react/prop-types
    const { title, date, location, duration, content, attachmentLink, imageUrl } = event;


    const handleChange =  (event) => {
        // eslint-disable-next-line react/prop-types
        setChecked(event.target.checked);
        if (checked) {
             deleteEventRecord(user, title);
        } else {
            createEventRecord(user, title);
        }
    };
    console.log("checked: " +checked);
    return (
        <Card sx={{minWidth: 275, marginBottom: 2 }}>
            {imageUrl && (
                <CardMedia
                    component="img"
                    height="140"
                    image={imageUrl}
                    alt={title}
                />
            )}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>活动时间:</strong> {date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>活动地点:</strong> {location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>活动时长:</strong> {duration}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>活动内容:</strong> {content}
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}>
                    {attachmentLink && (
                        <Button variant="outlined" href={attachmentLink} target="_blank" sx={{ mb: 1 }}>
                            查看附件
                        </Button>
                    )}
                    <FormControlLabel
                        control={<Switch checked={checked} onChange={handleChange} />}
                        label={checked ? '取消活动' : '添加活动'}
                    />
                </Box>

            </CardContent>
        </Card>
    );
};

export default VolunteerEventCard;
