import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import withStyles from 'material-ui/styles/withStyles';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Smile from './smile.js';
import V from './v.js';
import K from './k.js';

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    margin: 0
  },
  title:{
    color: 'white',
    textAlign: 'center'
  },
  image:{
    width: '500px',
    display: 'block'
  },
  button: {
    background: 'linear-gradient(45deg, #B60055 0%,#FE6B8B 45%, #FF8E53 90%)',
    zIndex: 1    
  }
};

class Hero extends Component {
  constructor(){
    super();
  }

  lol=()=>{
    window.document.getElementById('about').scrollIntoView({block: 'start', behavior: 'smooth'})
  }

  render() {
    var style = this.props.classes

    return (
      <section>
        <Grid container spacing={24} alignItems="center" justify="center" className={style.container}>
          <Grid item className='kBox'>
            <div className = "skew">
              <K />
            </div>
            <Typography type='display2' className={style.title}><black>KEVIN</black><light>PAN</light></Typography>
          </Grid>
        </Grid>
        <Button fab className={`${style.button} float`} color="primary" onClick={this.lol}>
          <Icon>keyboard_arrow_down</Icon>
        </Button>
        <style jsx global>
          {`
            .float {
              animation: float 2s ease-in-out infinite; 
              position: absolute;
              bottom: 5%;
              margin-left: auto;
              margin-right: auto;
              left: 0;
              right: 0
            }
            @keyframes float {
                0% {
                  transform: translatey(0px);
                }
                50% {
                  transform: translatey(-15px);
                }
                100% {
                  transform: translatey(0px);
                }
            }
            black{
              font-weight:900;
            }
            light{
              font-weight:100;
            }    
            .kBox{
              max-width:500px;
              width:100%;
            }          
          `}</style>
      </section>
    );
  }
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
