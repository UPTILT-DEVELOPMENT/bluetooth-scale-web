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
    const [characteristic, setCharacteristic] = useState<BluetoothRemoteGATTCharacteristic | null>(null)

    const startThing = useCallback(
        async () => {
            const gattServer = await props.device.gatt?.connect();

            const primaryService = await gattServer?.getPrimaryService(
                ScaleBluetoothIds.PRIMARY_SERVICE_ID
            );

            const characteristic = await primaryService?.getCharacteristic(
                ScaleBluetoothIds.CHARACTERISTIC_ID
            );

            if (gattServer) {
                setGattServer(gattServer)
                if (gattServer.device.name) setName(gattServer.device.name)
            }
            if (primaryService) setPrimaryService(primaryService)

            characteristic?.startNotifications();
            characteristic?.addEventListener('characteristicvaluechanged', listenToThing);
            setCharacteristic(characteristic || null)
        },
        [],
    )

    const listenToThing = useCallback(
        (e: any) => {
            props.handleWeightChange(e)
        },
        [props],
    )


    const stopThing = useCallback(
        async () => {

            (characteristic)
            if (characteristic) {
                ('HAHA')
                characteristic.stopNotifications()
                characteristic.removeEventListener('characteristicvaluechanged', (e) => props.handleWeightChange(e))
                gattServer?.disconnect()
                setCharacteristic(null)
            } else {
                ('Already removed')
            }
        },
        [characteristic, gattServer],
    )

    /* const stopListenThing = useCallback(
      () => {
        
      },
      [],
    ) */




    useEffect(() => {
        ('In useEffect')
        startThing()
        return () => {
            stopThing()
        };
    }, [startThing, stopThing]);
    ('BluetoothScale')
    return (
        <>
            {/* <Chip icon={<BluetoothOutlined />} label={name} variant="outlined" /> */}
        </>
    );
};

export default BluetoothScale;
