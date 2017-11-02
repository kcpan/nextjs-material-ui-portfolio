import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import withStyles from 'material-ui/styles/withStyles';
import PropTypes from 'prop-types';


const styles = {
  container: {
    width: '100%',
    height: '100vh',
    margin: 0
  },
  card:{
    width:'500px'
  }
};

class About extends Component {
  render() {

    var style = this.props.classes
    
    return (
      <section id='about'>
        <div className='blurb'>Currently under construction. Feel free to check out my art on Behance.</div>
        <a target="_blank" href="https://www.behance.net/thebigeZ"><img src="../static/behance.svg" className='logo'/></a>
        <style jsx global>
          {`     
            #about{
              height:100vh;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;
              color: white;
              font-family: Roboto;
              flex-direction: column;
            }
            .logo{
              margin-top: 15px;
              width: 100px;
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
