import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const ScaleDeviceBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& > :not(style)': {
        color: '#FFFFFF'
    },
})