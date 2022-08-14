import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import SelectFormItem from '../../types/select-form/select-form-item';

import * as React from 'react';
import { Send } from '@mui/icons-material';


type BoxButtonProps = {
    label: string,
};

const BoxButton: React.FC<BoxButtonProps> = props => {
    return (
        <Box textAlign='center' sx={{
            paddingTop: 12
        }}>
            <Button variant="contained" endIcon={<Send />}>
                {props.label}
            </Button>
        </Box>
    );
};

export default BoxButton;
