import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Header = () => {
  return (

    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" color="inherit" component="div">
          Наш суперкофе
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
