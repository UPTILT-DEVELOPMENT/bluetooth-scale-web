import { ScaleBluetoothIds } from '@enums/ScaleBluetoothIds'
import Connect from '@modules/connect/Connect'
import Graph from '@modules/graph/Graph'
import Scale from '@modules/scale/Scale'
import { Email, LinkedIn } from '@mui/icons-material'
import { Box, Paper, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import icon_quare from '../../public/icon_quare_slack.svg'


const scaleDeviceRequestOptions: RequestDeviceOptions = {
  optionalServices: [ScaleBluetoothIds.PRIMARY_SERVICE_ID],
  acceptAllDevices: true
}

const Home: NextPage = () => {
  const [alignment, setAlignment] = useState('scale');

  const handleChange = (event: any, newAlignment: any) => {
    setAlignment(newAlignment);
  };
  const [bluetoothDevice, setBluetoothDevice] = useState<BluetoothDevice | null>(null)
  const findDevice = async () => {
    const foundBluetoothDevice = await navigator.bluetooth.requestDevice(scaleDeviceRequestOptions)
      .catch((error: any) => { console.log(error.message) })

    if (foundBluetoothDevice) {

      setBluetoothDevice(foundBluetoothDevice)
    }
  }



  return (
    <>
      <Head>
        <title>Waste Scale?</title>
        <meta name="description" content="Håll koll på matsvinnet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="scale">Scale</ToggleButton>
          <ToggleButton value="data">Data</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {/* {
        bluetoothDevice !== null
          ? <Scale btDevice={bluetoothDevice} />
          : <Connect onConnectClick={async () => await findDevice()} />
      } */}
      {
        alignment === "scale" ?
          (bluetoothDevice !== null
            ? <Scale btDevice={bluetoothDevice} />
            : <Connect onConnectClick={async () => await findDevice()} />)
          : <Graph></Graph>
      }
      {/*  <Graph /> */}

      <Paper sx={{
        marginTop: 'calc(10% + 60px)',
        position: 'fixed',
        bottom: 0,
        backgroundColor: "#F7F3E3",
        width: '100%'
      }} component="footer" square variant="outlined">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
            my: 1
          }}
        >
          <Box sx={{
            justifyContent: "center",
            alignItems: "end",
            display: "flex",
          }}>
            {/* <Image priority src="/icon_quare_slack.svg" width={75} height={30} alt="Logo" /> */}
            <Typography variant="caption">Made By UPTILT AB</Typography>
            {/* <LinkedIn />
            <Email /> */}
          </Box>
        </Box>
      </Paper>
    </>
  )
}

export default Home
