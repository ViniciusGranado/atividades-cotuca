import {
  Alert,
  AlertColor,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export interface DialogModalProps {
  title: string;
  message: string;
  severity: AlertColor;
  isDialogOpen: boolean;
  onClickButtonAction: () => void;
}

export const DialogModal: React.FC<DialogModalProps> = ({
  title,
  message,
  severity,
  isDialogOpen,
  onClickButtonAction,
}) => {
  return (
    <Dialog open={isDialogOpen}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Alert severity={severity}>{message}</Alert>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClickButtonAction}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};
