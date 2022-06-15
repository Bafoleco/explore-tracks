import React from 'react';
import Req from './Req';
import { TrackInfo } from './types';
import { Stack } from '@mui/material';

interface TrackProps {
  trackInfo: TrackInfo;
}

const Track = (props: TrackProps) => {

  const {trackInfo} = props

  return (
    <Stack direction="row">
      {
          trackInfo.requirements.map((requirement, index) => {
              return <Req reqInfo={requirement} letter = {String.fromCharCode(97 + index)}/>
          })
      }
    </Stack>
  );
}

export default Track;
