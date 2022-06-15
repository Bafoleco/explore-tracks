import { Container, Stack, Typography } from '@mui/material';
import React from 'react';
import Course from './Course';
import { ReqInfo } from './types';

interface ReqProps {
  reqInfo: ReqInfo;
  letter: string;
}

const Req = (props: ReqProps) => {

  const {reqInfo, letter} = props

  return (
    <Stack spacing={2}>
      <div>
        <Typography variant="h5"> Track Requirement ({letter})</Typography>
        {
            reqInfo.numRequired === "x" ? <Typography variant="h6"> Take 21 units with previous options plus: </Typography> : 
                                          <Typography variant="h6"> Take {reqInfo.numRequired} of: </Typography>
        }
      </div>
      {
          reqInfo.courseOptions.map((courseOption) => {
              return <Container> <Course courseInfo={courseOption} /> </Container>
          })
      }

    </Stack>
  );
}

export default Req;
