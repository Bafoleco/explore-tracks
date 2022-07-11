import React from 'react';
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
import { realworld } from './tracks/realworld';
import { ai } from './tracks/ai';
import { biocomputation } from './tracks/biocomputation';
import { information } from './tracks/information';
import { softwaretheory } from './tracks/softwaretheory';
import { TabsActions } from '@mui/material';

const Tracks = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', width: "100%"}}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" variant="scrollable" sx={{width: "100%"}}> 
              <Tab label="Systems" value="1" />
              <Tab label="HCI" value="2" />
              <Tab label="Security" value="3" />
              <Tab label="Theory" value="4" />
              <Tab label="Realworld Computing" value="5" />
              <Tab label="Artificial Intelligence" value="6" />
              <Tab label="Biocomputation" value="7" />
              <Tab label="Information" value="8" />
              <Tab label="Software Theory" value="9" />
            </TabList>
          </Box>
          <TabPanel value="1"> <Track trackInfo={systems}/> </TabPanel>
          <TabPanel value="2"> <Track trackInfo={hci}/> </TabPanel>
          <TabPanel value="3"> <Track trackInfo={security}/> </TabPanel>
          <TabPanel value="4"> <Track trackInfo={theory}/> </TabPanel>
          <TabPanel value="5"> <Track trackInfo={realworld}/> </TabPanel>
          <TabPanel value="6"> <Track trackInfo={ai}/> </TabPanel>
          <TabPanel value="7"> <Track trackInfo={biocomputation}/> </TabPanel>
          <TabPanel value="8"> <Track trackInfo={information}/> </TabPanel>
          <TabPanel value="9"> <Track trackInfo={softwaretheory}/> </TabPanel>
        </TabContext>
      </Box>
    );
  }

export default Tracks;
