import { Container, Stack } from '@mui/material';
import React from 'react';
import Course from './Course';
import { CourseInfo, ReqInfo } from './types';

interface ReqProps {
  reqInfo: ReqInfo;
}

const Req = (props: ReqProps) => {

  const {reqInfo} = props

  return (
    <Stack spacing={2}>
      <h4> Take {reqInfo.numRequired} of: </h4>


      {
          reqInfo.courseOptions.map((courseOption) => {
              return <Container> <Course courseInfo={courseOption} /> </Container>
          })
      }

    </Stack>
  );
}

export default Req;
