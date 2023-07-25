import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";


const Header = () => {
  
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState();

    return <AppBar position="sticky" sx={{ background: "linear-gradient(to right top, #0a5ed1, #0077df, #008ee7, #00a4eb, #01b8ed, #4ac0f0, #6ac7f2, #84cff5, #9bcdf5, #aecaf3, #bfc9ed, #cbc8e7)" }}>
        <Toolbar>
            <Typography variant="h4"> Blogs App</Typography>
        {isLoggedIn &&  <Box display="flex" marginLeft={"auto"} marginRight='auto'>
                <Tabs textColor="inherit"  value={value} onChange={(event, newValue) => setValue(newValue)}>
                    <Tab LinkComponent={Link} to="/blogs" label="All Blogs"></Tab>
                    <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs"></Tab>
                    <Tab LinkComponent={Link} to="blogs/add" label="Add Blog"></Tab>h
                </Tabs>
   </Box>}

          <Box display="flex" marginLeft="auto">
             {!isLoggedIn &&  <Button LinkComponent={Link} to="/auth" variant="contained" sx={{ margin: 1, borderRadius:10 }}>Login</Button>}
             {!isLoggedIn &&   <Button LinkComponent={Link} to="/auth" variant="contained" sx={{ margin: 1, borderRadius: 10 }}>Signup</Button>}
            {isLoggedIn &&    <Button onClick={()=>dispath(authActions.logout())} LinkComponent={Link} to="/auth" variant="contained" sx={{ margin: 1, borderRadius: 10 }}>LogOut</Button>}
            </Box>

        </Toolbar>
    </AppBar>

};

export default Header;




// //In material ui
// //AppBar used as material ui
// // toolbar provides all details to appbar or any component so that it acts like navbar
// //typography used to write in navbar
// //box as div
