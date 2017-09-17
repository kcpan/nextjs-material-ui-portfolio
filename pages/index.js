/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import withStyles from 'material-ui/styles/withStyles';
import withRoot from '../components/withRoot';
import Hero from '../components/hero';
import NavBar from '../components/navBar';

const styles = {
  root: {
    width:"100%"
  }
};

class Index extends Component {

  render() {
    return (
      <div className={this.props.classes.root}>
        <NavBar/>
        <Hero/>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
