import {useEffect, useRef, useState} from 'react';
import {
    List,
    ListItem,
    ListItemText,
    Paper,
    Divider
} from '@mui/material';
import {getGrade, getGradeByName, getVolunteerByName} from "../services/api.jsx";
import {useOutletContext} from "react-router-dom";
import iconComplete from "../icons/complete.png";
import iconFlunk from "../icons/flunk.png";
import iconPerfect from "../icons/perfect.png";
import iconZero from "../icons/zero.png";

String.prototype.toDuration = function ()  {
    const [, hours = 0, minutes = 0, seconds = 0] =
    this.match(/(?:(\d+)小时)?(?:(\d+)分)?(?:(\d+)秒)?/) ?? [];
    return (+hours * 3600) + (+minutes * 60) + (+seconds);
};

const AdminInfoForm = () => {
    const [volunteer, setVolunteer] = useState([]);
    const [grade, setGrade] = useState("");
    const [icon, setIcon] = useState({});
    const { user } = useOutletContext();
    const stampRef = useRef(null);

    // 假设这些是要显示的个人信息
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const loadAdmin = async () => {
        const currentGrade = await getGradeByName(user)
        const allGrades = await getGrade()
        const data = await getVolunteerByName(user);
        setGrade(currentGrade)
        setIcon(getIconForGrade(currentGrade?.toDuration(), allGrades?.toDuration()))
        setVolunteer(data);
        setTimeout(
            () => stampRef.current && stampRef.current.classList.add('active')
            , 1000);


    };

    const getIconForGrade =  (grade, allGrades) => {
        const score = Math.round(grade / allGrades * 100);
        if (score === 100) {
            return iconPerfect;
        } else if (score >= 60) {
            return iconComplete;
        } else if (score <= 59 && score > 0) {
            return iconFlunk;
        } else if (score === 0) {
            return iconZero;
        }
        return iconZero;
    };

    useEffect(() => {
        loadAdmin()
    }, [loadAdmin]);
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
                <Divider />
                <ListItem>
                    <ListItemText primary="总志愿时长" secondary={grade}/>
                    <img src={icon.toString()} className="stamp" ref={stampRef} alt="Grade seal"/>
                </ListItem>
            </List>
        </Paper>
    );

};

export default AdminInfoForm;
