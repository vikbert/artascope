import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardData from "./CardData";

const styles = theme => ({
  card: {
    margin: 20,
    maxWidth: 600,
  },
  media: {
    objectFit: 'cover',
    height: 220,
  },
});

function MaterialCard(props) {
  const {classes, cardData, onClickOpenDemo} = props;

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        className={classes.media}
        image={cardData.image}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {cardData.title}
        </Typography>
        <Typography component="p">
          {cardData.description}
        </Typography>
      </CardContent>
      <CardActions>
        {cardData.external ? (
          <a href={cardData.external} target="_blank" rel="noreferrer noopener">
            <Button>Live Demo on external Link</Button>
          </a>) : (
          <Button color="" onClick={onClickOpenDemo}>Live Demo</Button>)
        }
      </CardActions>
    </Card>
  );
}

MaterialCard.propTypes = {
  classes: PropTypes.object.isRequired,
  cardData: PropTypes.instanceOf(CardData),
  onClickOpenDemo: PropTypes.func,
};

export default withStyles(styles, {withTheme: true})(MaterialCard);
