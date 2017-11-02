import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import withStyles from 'material-ui/styles/withStyles';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    margin: 0
  }
};

class Art extends Component {
  render() {

    var style = this.props.classes
    return (
      <div>
        I'm dank.
      </div>
    );
  }
}

Art.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Art);
