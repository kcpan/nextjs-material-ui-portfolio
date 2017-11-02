import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import withStyles from 'material-ui/styles/withStyles';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Link from 'next/link'

const styles = {
  navBar: {
    backgroundColor: '#101010'
  },
  navItem: {
    marginRight: '24px',
    marginLeft: '24px',
    color: '#DFDFDF'
  },
  link: {
      textDecoration: 'none',
      color: '#DFDFDF',
      transition: 'all 0.15s'
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
              <Link href="/todo">
                <a className={style.link}>To-Do</a>
              </Link>
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
        <style jsx global>{`
          a:hover{
            color: grey
          }
        `}</style>
      </AppBar>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
