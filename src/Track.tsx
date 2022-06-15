import React from 'react';
import Req from './Req';
import { CourseInfo, TrackInfo } from './types';
import { Stack } from '@mui/material';

interface TrackProps {
  trackInfo: TrackInfo;
}

const Track = (props: TrackProps) => {

  const {trackInfo} = props

  return (
    <Stack direction="row">
      {
          trackInfo.requirements.map((requirement) => {
              return <Req reqInfo={requirement} />
          })
      }
    </Stack>
  );
}

export default Track;
