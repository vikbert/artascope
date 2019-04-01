import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  card: {
    display: 'flex',
    margin: 20,
    maxWidth: 600,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

function MaterialCard(props) {
  const { classes, title, description, date } = props;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image="https://images.unsplash.com/photo-1444201716572-c60ec66d0494?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {description}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {date}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <Button size="small" color="primary">
            Live Demo
          </Button>
        </div>
      </div>
    </Card>
  );
}

MaterialCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(MaterialCard);
