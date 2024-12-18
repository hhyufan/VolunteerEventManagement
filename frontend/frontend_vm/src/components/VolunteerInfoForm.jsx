import {useEffect, useState} from 'react';
import {
    List,
    ListItem,
    ListItemText,
    Paper,
    Divider
} from '@mui/material';
import {getGradeByName, getVolunteerByName} from "../services/api.jsx";
import {useOutletContext} from "react-router-dom";

const AdminInfoForm = () => {
    const [volunteer, setVolunteer] = useState([]);
    const [grade, setGrade] = useState();
    const { user } = useOutletContext();
    // 假设这些是要显示的个人信息
    const loadAdmin = async () => {
        const data = await getVolunteerByName(user);
        setGrade(await getGradeByName(user))
        setVolunteer(data);
    };
    useEffect(() => {
        loadAdmin()
    }, []);
    return (

        <Paper
            sx={{ padding: '20px' }}
        >
            <List>
                <ListItem>
                    <ListItemText primary="姓名" secondary={volunteer.name} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="电子邮件" secondary={volunteer.email} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="电话" secondary={volunteer.phone} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="总志愿时长" secondary={grade} />
                </ListItem>
                <Divider />
            </List>
        </Paper>
    );

};

export default AdminInfoForm;
