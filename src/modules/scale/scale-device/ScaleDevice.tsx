import { BluetoothConnected } from '@mui/icons-material';
import { Box } from '@mui/system';
import * as React from 'react';
import { ScaleDeviceBox } from './scale-device-styles';

type ScaleDeviceProps = {
    deviceName: string,
};

const ScaleDevice: React.FC<ScaleDeviceProps> = props => {
    console.log('ScaleDevice render');

    return (
        <>
            <ScaleDeviceBox>
                <BluetoothConnected fontSize="small" style={{ fontSize: "14px" }} />
                <span style={{ fontSize: "14px", paddingLeft: "4px" }}>Device {props.deviceName}</span>
            </ScaleDeviceBox>
        </>
    );
};

export default React.memo(ScaleDevice);
