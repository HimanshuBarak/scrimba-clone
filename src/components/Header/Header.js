import React from 'react'
import { Grid ,Button,Box} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import './header.css'
import guy from '../../assets/img/peep_guy.svg'

const useStyles =makeStyles(theme=>({
    root:{
         marginLeft:"55px",
         marginRight:"20px"
    },
   try_btn:{
      background:"black",
      textTransform:"none",
      margin:"25px",
      fontSize:"clamp(10px,2vw,20px)",
      background:"#5338f8",
     
      "&:hover":{
        boxShadow:" 0 15px 30px -15px rgb(0 0 0 / 20%)",
        background:"#5338f8",

      },
    },
    boy_img:{
        paddingTop:"22px",
        [theme.breakpoints.down('md')]:{
            display:"none"
          },
        maxHeight:"380px"  
    }
}))
function Header() {
    const {try_btn,boy_img,root} =useStyles();
    return (
        <div>
            <Box m={5}>
                <Box ml={4} />
            <Grid container spacing={0} className={root}>
             <Grid item lg={8} md={9} align="right">
                <h1 className="heading">Don't spend $15,000  on a coding bootcamp</h1>
                <h2 className="sub_head">Our career path helps motivated students become hireable frontend developers for 1% of the cost</h2>
                <Button className={try_btn} color="secondary"   variant="contained">Try it out now</Button>
             </Grid>
             <Grid item lg={3} md={2} xs={0} sm={0}>
                 <Box pt={3} />
                <img className={boy_img} style={{transform:"scaleX(-1)"}} src={guy} alt=""/>
             </Grid>
            </Grid>
            </Box>
            
        </div>
    )
}

export default Header
