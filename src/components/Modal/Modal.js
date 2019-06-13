import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function FormDialog() {
  const [open, setOpen] = React.useState(true);

  function handleClose() {
    setOpen(false);
    
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Welcome</DialogTitle>
        <DialogContent>
          <DialogContentText>
            I am thrilled we are playing this. Please type your name
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            I am ready
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}