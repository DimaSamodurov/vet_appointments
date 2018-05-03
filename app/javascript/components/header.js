import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer'
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class ButtonAppBar extends React.Component {

  state = {
    open: false,
  };

  handleNavToggle() {
    return this.setState({open: !this.state.open})
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={() => this.handleNavToggle()}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Title
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          width={300}
          open={this.state.open}>
          <a style={{textDecoration: 'none'}}
             href={this.state.homePageUrl}>Home</a>
          <a style={{textDecoration: 'none'}}
             href={this.state.aboutPageUrl}>About</a>
          <a style={{textDecoration: 'none'}}
             href={this.state.contactPageUrl}>Contact</a>
        </Drawer>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
