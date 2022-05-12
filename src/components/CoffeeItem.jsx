import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const CoffeeItem = (props) => {
  return ( 
    <Card sx={{ minWidth: 675 }}>
      <CardContent sx={{ mt: 6.0 }}>
        <Typography variant="h5" component="div">
         Название: {props.cofe.blend_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Происхождение: {props.cofe.origin}
        </Typography>
        <Typography variant="body2">
         Теги: {props.cofe.notes}
        </Typography>
      </CardContent>
      
    </Card>
   );
}
 
export default CoffeeItem;
