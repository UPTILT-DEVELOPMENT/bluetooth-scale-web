import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import SelectFormItem from '../../types/select-form/select-form-item';

import * as React from 'react';
import { Send } from '@mui/icons-material';


type BoxButtonProps = {
    label: string,
    endIcon?: React.ReactNode,
    paddingTop?: number
    onClick?: () => Promise<void>
};

const BoxButton: React.FC<BoxButtonProps> = props => {
    return (
        <Box textAlign='center' sx={{
            paddingTop: props.paddingTop ?? 0
        }}>
            <Button variant="contained" endIcon={props.endIcon ?? null} onClick={props.onClick}>
                {props.label}
            </Button>
        </Box>
    );
};

export default React.memo(BoxButton);
