import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import withStyles from 'material-ui/styles/withStyles';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

const styles = {
  navBar: {
    backgroundColor: '#101010'
  },
  navItem: {
    marginRight: '24px',
    marginLeft: '24px',
    color: '#DFDFDF'
  }
};

class NavBar extends Component {
  render() {

    var style = this.props.classes
    return (
      <AppBar position="fixed" color="primary" elevation={0} className={style.navBar}>
        <Toolbar>
          <span className={style.navItem}>
            <Typography type="title" color="inherit">
              About
            </Typography>
          </span>
          <span className={style.navItem}>
            <Typography type="title" color="inherit" >
              Art
            </Typography>
          </span>
          <span className={style.navItem}>
            <Typography type="title" color="inherit">
              Projects
            </Typography>
          </span>
        </Toolbar>
      </AppBar>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
