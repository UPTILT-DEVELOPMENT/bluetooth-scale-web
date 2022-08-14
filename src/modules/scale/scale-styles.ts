import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const ScaleHeaderBox = styled(Box)({
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    '& > :not(style)': {

        height: 280,
        backgroundColor: '#3A3940',
        color: '#11151C',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        /* flexGrow: 4 */
    },

}
)

export const ScaleFormSectionBox = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    /* alignItems: 'center' */
    /* flexGrow: 4 */
}
)

export const ScaleFormTypography = styled(Typography)({
    color: '#3A3940',
    paddingTop: '48px',
    paddingBottom: '28px'
}
)

