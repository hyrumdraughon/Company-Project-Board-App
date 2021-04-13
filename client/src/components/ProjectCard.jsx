import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 370,
    height: 396,
    textAlign: 'center',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ProjectCard({label, descriptionLabel, descriptionTextLabel, handleClick}) {
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         Project Name { /* placeholder */}
         { label }
         <hr></hr>
        </Typography>
        <Typography className={classes.description}>
          Project Description { /* placeholder */}
          { descriptionLabel }
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Project Description Text { /* placeholder */}
          {descriptionTextLabel}
        </Typography>
        
      </CardContent>
      
    </Card>
  );
}
