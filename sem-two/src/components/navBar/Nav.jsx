import React from 'react'
import {AppBar,Avatar, Toolbar, Typography,InputBase, Button, IconButton,} from '@material-ui/core';

import { makeStyles, fade } from '@material-ui/core/styles';

import NavIcon from '../../img/NavIcon.png'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) => ({
    background:{
      backgroundColor:'#0063B1'
    },
    button:{
      color:'white',
      marginRight:'2%'
    },
    title:{
        flex:1,
        textAlign:'left'
    },
    navImg:{
      marginRight:'2%'
    },

    search: {
      position: 'relative',
      marginRight:'5%',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },}}
  }));

const Nav = props => {
    const classes = useStyles();

    return (
       
            <AppBar  className={classes.background23} >
            <Toolbar>
              
            <Avatar alt="Remy Sharp" src={NavIcon} className={classes.navImg}/>
             
        
          <Typography  variant='h5' className={classes.title}>
            Thanjore Craft
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
         <Button className={classes.button}>Login</Button>

         <Button className={classes.button}>
           <ShoppingCartOutlinedIcon />
           Cart</Button>
            </Toolbar>
            </AppBar>
      
    )
}



export default Nav

