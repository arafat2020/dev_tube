import React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { Typography } from "@mui/material";



const Cmt = ({text,name,img}) => {
    return (
        <div className='cmt' >
            <div className="av">
                <Avatar src={ img} />
            </div>
            <div className="cm">
                <Chip label={name} />
                <Typography className="p" variant='caption'>
                   {text}
                </Typography>
            </div>
            
        </div>
    );
};

export default Cmt;