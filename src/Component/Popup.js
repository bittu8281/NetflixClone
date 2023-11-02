import * as React from 'react';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import SickIcon from '@mui/icons-material/Sick';
// import Face3Icon from '@mui/icons-material/Face3';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [Start, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <AddReactionIcon />
      </Button>
      <Dialog open={Start} onClose={handleClose}>
        <DialogTitle>Hello Guys 
            {/* <Face3Icon /> */}
            </DialogTitle>
        <DialogContent>
          <DialogContentText>
        kal ka kya plan hai<EmojiEmotionsIcon />
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Bike-Ride</Button>
          <Button onClick={handleClose}>Movie </Button>
      
        </DialogActions>
      </Dialog>
    </div>
  );
}