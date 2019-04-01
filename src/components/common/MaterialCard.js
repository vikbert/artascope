import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardData from "./CardData";

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
  const {classes, cardData, onClickOpenDemo} = props;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={cardData.image}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {cardData.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {cardData.description}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {cardData.date}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          {cardData.external ? (
              <a href={cardData.external} target='_blank' rel='noreferrer noopener'>
                <Button size="small" color="primary">Live Demo on external Link</Button>
              </a>) : (
              <Button size="small" color="primary" onClick={onClickOpenDemo}>Live Demo</Button>)
          }
        </div>
      </div>
    </Card>
  );
}

MaterialCard.propTypes = {
  classes: PropTypes.object.isRequired,
  cardData: PropTypes.instanceOf(CardData),
  onClickOpenDemo: PropTypes.func,
};

export default withStyles(styles, {withTheme: true})(MaterialCard);
