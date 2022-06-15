import React from 'react';
import Req from './Req';
import { CourseInfo, TrackInfo } from './types';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Track from './Track';
import { systems } from './tracks/systems';
import { hci } from './tracks/hci';
import { security } from './tracks/security';
import { theory } from './tracks/theory';

const Tracks = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Systems" value="1" />
              <Tab label="HCI" value="2" />
              <Tab label="Security" value="3" />
              <Tab label="Theory" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1"> <Track trackInfo={systems}/> </TabPanel>
          <TabPanel value="2"> <Track trackInfo={hci}/> </TabPanel>
          <TabPanel value="3"> <Track trackInfo={security}/> </TabPanel>
          <TabPanel value="4"> <Track trackInfo={theory}/> </TabPanel>
        </TabContext>
      </Box>
    );
  }

export default Tracks;
