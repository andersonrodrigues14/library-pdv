import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Sales from '../Sales/Sales';
import Commissions from '../Commissions/Commissions';
import Button from '@mui/material/Button';
import NewSale from '../NewSale/NewSale';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Sidenav() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menudata, setMenudata] = useState("Sales");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{backgroundColor: "#ffff", color:"#00585E"}}>
        <Toolbar sx={{alignItems:"center", justifyContent:"space-between"}}>
            <div style={{display: 'flex',alignItems:"center", justifyContent:"center"}}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
                <img src='./icons/logo.png'  alt=""/>
            </Typography>
          </div>
          <Typography variant="h4" noWrap component="text" >
            Vendas
          </Typography>
          <Typography variant="h4" noWrap component="text" >
            
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem disablePadding onClick={()=>setMenudata("Sales")}>
              <ListItemButton>
                <ListItemIcon>
                  <img src='./icons/sales.png'  alt="sales menu"/>
                </ListItemIcon>
                <ListItemText primary="Vendas" sx={{color:"#00585E"}}/>
              </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem disablePadding onClick={()=>setMenudata("Commisions")}>
              <ListItemButton>
                <ListItemIcon>
                  <img src='./icons/commissions.png' alt="commission menu"/>
                </ListItemIcon>
                <ListItemText primary="Comissões" sx={{color:"#00585E"}}/>
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{flexGrow:1, p:3}}>
         <DrawerHeader />
        {menudata === "Sales" && 
            <Box>
                 <Box style={{display: 'flex',alignItems:"center", justifyContent:"space-between",margin:'10' }}>
                    <Typography variant="h5" noWrap component="text" sx={{color:"#00585E"}} >
                        Vendas Realizadas
                    </Typography>
                    <Button variant="contained" sx={{background:"#00585E"}} onClick={()=>setMenudata("NewSale")}>Inserir nova Venda</Button>
                </Box>
                <Sales />
            </Box>
        }
        {menudata === "Commisions" && <Commissions />}
        {menudata === "NewSale" && <NewSale />}
      </Box>
    </Box>
  );
}