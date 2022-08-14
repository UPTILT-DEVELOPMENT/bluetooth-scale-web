import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const ScaleDisplayBox = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    alignSelf: 'center',
    '& > :not(style)': {
        m: 1,
        paddingBottom: 6,
        paddingTop: 6,
        width: 216,
        height: 216,
        background: "linear-gradient(0deg, rgba(208, 188, 255, 0.08), rgba(208, 188, 255, 0.08)), #1C1B1F",
        color: '#FFFFFF',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
})