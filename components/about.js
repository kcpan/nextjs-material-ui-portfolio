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

class About extends Component {
  render() {

    var style = this.props.classes
    return (
      <section id='about'>
        <style jsx global>
          {`     
            #about{
              margin-top: 100px;
              height:1000px;
              overflow: hidden;
              display: block;
            }
            .stripe{
              margin-top: 100px;
              position: absolute;
              width: 100%;
              display: grid;
              grid: repeat(4, 200px) / repeat(10, 1fr);
              background-color: #EEEEEE;
              transform: skewY(12deg);
            }
            .content{
              z-index: 1;
              color: red;
              position: relative;
            }
          `}
        </style>
      </section>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
