import React from 'react';
import { CourseInfo } from './types';
import { Card, CardActions, CardContent, CardHeader, Collapse, Typography, Chip } from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface CourseProps {
  courseInfo: CourseInfo;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Course = (props: CourseProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const {courseInfo} = props

  const units = (courseInfo.min_units === courseInfo.max_units) ? courseInfo.max_units : `${courseInfo.min_units}-${courseInfo.max_units}`

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader 
        title={courseInfo.code + " - " + courseInfo.title}
        action={<Chip label={`Units ${units}`} />}
      />
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography align='left'  paragraph>
            {courseInfo.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Course;
