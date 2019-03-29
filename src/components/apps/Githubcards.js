import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

const defaultUser =
  {
    id: 1,
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    login: 'mojombo',
    company: 'GitHub.com',
    html_url: "https://github.com/mojombo",
  }
;
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    marginTop: 20,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  textField: {
    marginBottom: '10px',
  },
});

let usersData = {};
usersData[defaultUser.id] = defaultUser;

class Githubcards extends Component {

  state = {
    textInput: '',
    usersData: usersData,
  };

  handleChange = (e) => {
    this.setState({textInput: e.target.value});
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  handleSubmit = async () => {
    if (0 === this.state.textInput.trim().length) {
      return;
    }

    const asyncResp = await fetch(`https://api.github.com/users/${this.state.textInput}`);
    const user = await asyncResp.json();

    if (this.state.usersData.hasOwnProperty(user.id)) {
      return;
    }

    const newUsers = {...this.state.usersData};
    newUsers[user.id] = user;

    this.setState({usersData: newUsers});
  };

  render() {
    const {classes} = this.props;
    const lastIndex = this.state.usersData.length - 1;
    return (
      <div>
        <form className="foo" noValidate autoComplete="off">
          <TextField
            id={'user-name'}
            variant="outlined"
            style={{width: 290}}
            label="GitHub Name"
            InputLabelProps={{shrink: true}}
            placeholder="Here enter the Name"
            value={this.state.textInput}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
          <Fab color="primary" aria-label="Add" onClick={this.handleSubmit} style={{marginLeft: 10}}>
            <AddIcon/>
          </Fab>
        </form>

        <List className={classes.root}>
          {Object.keys(this.state.usersData).map((id, index) => {
            const user = this.state.usersData[id];
            return (
              <div key={user.id}>
                <ListItem alignItems="flex-start">
                  <a href={user.html_url}>
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={user.avatar_url}/>
                    </ListItemAvatar>
                  </a>
                  <ListItemText
                    primary={user.login}
                    secondary={
                      <React.Fragment>
                        {user.company}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                {index < lastIndex && (<li><Divider variant="inset"/></li>)}
              </div>
            );
          })}
        </List>
      </div>

    );
  }
}

export default withStyles(styles)(Githubcards);
