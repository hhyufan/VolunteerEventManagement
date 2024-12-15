// VolunteerEventCard.jsx
import {Card, CardContent, CardMedia, Typography, Button, FormControlLabel, Switch} from '@mui/material';
import {useState} from "react";

// eslint-disable-next-line react/prop-types
const VolunteerEventCard = ({ event }) => {
    console.log(event);

    if (!event) {
        return <Typography variant="h6">活动不存在</Typography>;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        // eslint-disable-next-line react/prop-types
        setChecked(event.target.checked);
    };

    // eslint-disable-next-line react/prop-types
    const { title, date, location, duration, content, attachmentLink, imageUrl } = event;

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
                <FormControlLabel
                    control={<Switch checked={checked} onChange={handleChange} />}
                    label={checked ? '取消活动' : '添加活动'}
                />
                {attachmentLink && (
                    <Button variant="outlined" href={attachmentLink} target="_blank" sx={{ mt: 2 }}>
                        查看附件
                    </Button>
                )}

            </CardContent>
        </Card>
    );
};

export default VolunteerEventCard;
