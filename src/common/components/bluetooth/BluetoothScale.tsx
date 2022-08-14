import { Bluetooth, BluetoothOutlined } from '@mui/icons-material';
import { Chip } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { ScaleBluetoothIds } from '@enums/ScaleBluetoothIds';

type BluetoothScaleProps = {
    device: BluetoothDevice,
    handleWeightChange: any
};

const BluetoothScale: React.FC<BluetoothScaleProps> = props => {
    const [name, setName] = useState("");
    const [primaryService, setPrimaryService] =
        useState<BluetoothRemoteGATTService | null>(null);
    const [gattServer, setGattServer] =
        useState<BluetoothRemoteGATTServer | null>(null);

    /* const connect = useCallback (async () => {
      const gattServer = await props.device.gatt?.connect();
      const primaryService = await gattServer?.getPrimaryService(
        ScaleBluetoothIds.PRIMARY_SERVICE_ID
      );
  
  
    }, []); */

    useEffect(() => {
        const connect = async () => {
            const gattServer = await props.device.gatt?.connect();
            console.log("\n\n====================GATT SERVER======================\n\n")
            console.log(gattServer)
            console.log("\n\n====================GATT SERVER======================\n\n")

            const primaryService = await gattServer?.getPrimaryService(
                ScaleBluetoothIds.PRIMARY_SERVICE_ID
            );

            console.log("\n\n====================PRIMARY SERVICE======================\n\n")
            console.log(primaryService)
            console.log("\n\n====================PRIMARY SERVICE======================\n\n")
            const characteristic = await primaryService?.getCharacteristic(
                ScaleBluetoothIds.CHARACTERISTIC_ID
            );

            if (gattServer) {
                setGattServer(gattServer)
                if (gattServer.device.name) setName(gattServer.device.name)
            }
            if (primaryService) setPrimaryService(primaryService)

            characteristic?.startNotifications();

            characteristic?.addEventListener('characteristicvaluechanged', props.handleWeightChange);
        };

        connect();

        return () => { };
    }, []);

    return (
        <>
            <Chip icon={<BluetoothOutlined />} label={name} variant="outlined" />
        </>
    );
};

export default BluetoothScale;
