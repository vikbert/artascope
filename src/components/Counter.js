import React, {useState} from 'react';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab';

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClickAdd = () => setCount(count + 1);
  const handleClickDel = () => setCount(count - 1);

  return (
    <div>
      <Fab color="primary" arial-label="Add" className="classes.fab">
        <AddIcon onClick={handleClickAdd}/>
      </Fab>
      <h1>{count}</h1>
      <Fab color="secondary" arial-label="Remove" className="classes.fab">
        <RemoveIcon onClick={handleClickDel}/>
      </Fab>
    </div>
  );
};

export default Counter;
