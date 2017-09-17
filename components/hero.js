import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import withStyles from 'material-ui/styles/withStyles';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Smile from './smile.js'

const styles = {
  root: {
    backgroundColor: '#101010'
  },
  container: {
    width: '100%',
    height: '100vh',
    margin: 0
  },
  title:{
    color: '#DFDFDF',
    textAlign: 'center'
  },
  image:{
    width: '500px',
    display: 'block'
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',    
    position: 'absolute',
    bottom: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0
  }
};

class Hero extends Component {
  render() {

    var style = this.props.classes
    return (
      <div className={style.root}>
        <Grid container spacing={24} align="center" justify="center" className={style.container}>
          <Grid item>
            <Smile/>
            <Typography type='display2' className={style.title}>Kevin Pan</Typography>
          </Grid>
        </Grid>
        <Button fab className={style.button} color="primary">
          <Icon>keyboard_arrow_down</Icon>
        </Button>
      </div>
    );
  }
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
