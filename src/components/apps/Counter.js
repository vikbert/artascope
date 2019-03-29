import React, {useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';

const styles = theme => ({
  fabButton: {
    marginRight: 10,
    marginLeft: 10,
  },
});
const Counter = ({counterInit = 50, counterIncrement = 1, classes}) => {
  const [count, setCount] = useState(counterInit);
  const handleClickAdd = () => setCount(count + counterIncrement);
  const handleClickDel = () => setCount(count - counterIncrement);

  return (
    <div>
      <Fab color="primary" arial-label="Add" className={classes.fabButton} onClick={handleClickAdd}>
        <AddIcon/>
      </Fab>
      <Fab className={classes.fabButton}>
        <span>{count}</span>
      </Fab>
      <Fab color="secondary" arial-label="Remove" className={classes.fabButton} onClick={handleClickDel}>
        <RemoveIcon/>
      </Fab>
    </div>
  );
};

Counter.prototype = {
  counterInit: PropTypes.number,
  counterIncrement: PropTypes.number,
};

export default withStyles(styles)(Counter);
