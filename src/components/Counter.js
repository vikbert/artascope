import React, {useState} from 'react';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';

const Counter = ({counterInit = 50, counterIncrement = 1}) => {
  const [count, setCount] = useState(counterInit);
  const handleClickAdd = () => setCount(count + counterIncrement);
  const handleClickDel = () => setCount(count - counterIncrement);

  return (
    <div>
      <Fab color="primary" arial-label="Add" className="classes.fab" onClick={handleClickAdd}>
        <AddIcon />
      </Fab>
      <Fab className="classes.fab">
        <span>{count}</span>
      </Fab>
      <Fab color="secondary" arial-label="Remove" className="classes.fab" onClick={handleClickDel}>
        <RemoveIcon />
      </Fab>
    </div>
  );
};

Counter.prototype = {
  counterInit: PropTypes.number,
  counterIncrement: PropTypes.number,
};

export default Counter;
