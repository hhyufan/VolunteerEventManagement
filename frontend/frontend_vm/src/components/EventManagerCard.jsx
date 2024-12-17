// VolunteerEventCard.jsx
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box,
    FormControlLabel, Checkbox
} from '@mui/material';
import {useState} from "react";
import {createEventRecord} from "../services/api.jsx";

// eslint-disable-next-line react/prop-types
const VolunteerEventCard = ({ event, user, isTitleExist}) => {
    console.log(event);

    if (!event) {
        return <Typography variant="h6">活动不存在</Typography>;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false); // 复选框的状态


    // eslint-disable-next-line react/prop-types
    const { title, date, location, duration, content, attachmentLink, imageUrl } = event;

    const handleChange = (event) => {
        // eslint-disable-next-line react/prop-types
        setChecked(event.target.checked);
        if (checked && !isTitleExist) {
            createEventRecord(title, user);
        }
        if (!checked && isTitleExist) {
            re
        }
    };

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
                        control={
                            <Checkbox checked={checked} onChange={handleChange} />
                        }
                        label={checked ? '撤销完成' : '设置完成'}
                    />
                </Box>

            </CardContent>
        </Card>
    );
};

export default VolunteerEventCard;
