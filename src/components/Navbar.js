import {React,useState,useEffect} from 'react'
import {AppBar ,Toolbar, Container ,makeStyles,Button, IconButton , MenuItem} from '@material-ui/core'




  const usestyles = makeStyles(theme =>({
    root:{
       
        display:'flex',
        
      "& a":{
        textDecoration:"none",
        color:"black",
        fontSize:"clamp(13px,2vw,18px)",
        marginRight:"15px"
      } 
    },
    nav:{
      height:"60px",
      [theme.breakpoints.down('sm')]:{
          height:"40px"
      }
    },
    transpt:{
      background: 'transparent',
    },
    left:{
      width:"50%",
      textAlign:"left",
      marginLeft:"0px"
    },
    right:{
      width:"50%",
      textAlign:"right"
    }
  }))
function Navbar() {
          const [state, setState] = useState(false);
          const {root ,transpt,right,left,nav} =usestyles();

          const [navState, setNavState] = useState(0);

	useEffect(() => {
		// eslint-disable-next-line
		const listener = document.addEventListener("scroll", (e) => {
			var scrolled = document.scrollingElement.scrollTop;
			if (scrolled >= 120) {
				setNavState(1);
			} else {
				setNavState(0);
			}
		});

		return () => {
			document.removeEventListener("scroll", listener);
		};
	}, [navState]);

const displaymobile=()=>{
  return <div className={nav} >
  <Toolbar >
      <Container maxWidth={false} className={root}>
      <div className={left}>
          <a href="#"> Scrimba</a>
          </div>
      <div className={right} >   
       <a href="#">All Courses</a>  
       <a href="#">Sign In</a>   
      
     </div>
      </Container>  
 </Toolbar>
      
  </div>
}     
const displaydesktop=()=>{
     return <div className={nav} style={{backgroundColor:navState === 0 ? "transparent" : "black",transition: "all .3s ease",}}>
     <Toolbar >
         <Container maxWidth={false} className={root}>
         <div className={left}>
             <a href="#"> Scrimba</a>
             </div>
         <div className={right} >
          <a href="#"><a>Go pro</a></a>   
          <a href="#">All Courses</a>  
          <a href="#">Sign In</a>   
          <a href="#">Sign up</a>  
        </div>
         </Container>  
    </Toolbar>
         
     </div>
} 
useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState(true)
        : setState(false);
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

    return (
        <div>
            <AppBar elevation={0} position="fixed" className={transpt}> {state? displaymobile() :displaydesktop() } </AppBar>  
        </div>
    )
}

export default Navbar;
