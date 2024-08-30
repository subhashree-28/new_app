import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Rating,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LinkIcon from "@mui/icons-material/Link";
import { useState } from "react";
import React from "react";
import { DataCard } from "./config";
import DialogMenu from "./DialogMenu";
import CardMenu from "./CardMenu";

export default function Folder() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [openDialog, setOpenDialog] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpenDialog(true);
    handleClose();
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <Card sx={{ width: 270, height: 210 }}>
      <CardContent>
        <Grid display="flex" justifyContent="space-between" alignItems="center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 32 32"
          >
            <g fill="none">
              <path
                fill="#ffb02e"
                d="m15.385 7.39l-2.477-2.475A3.12 3.12 0 0 0 10.698 4H4.126A2.125 2.125 0 0 0 2 6.125V13.5h28v-3.363a2.125 2.125 0 0 0-2.125-2.125H16.888a2.13 2.13 0 0 1-1.503-.621"
              />
              <path
                fill="#fcd53f"
                d="M27.875 30H4.125A2.12 2.12 0 0 1 2 27.888V13.112C2 11.945 2.951 11 4.125 11h23.75c1.174 0 2.125.945 2.125 2.112v14.776A2.12 2.12 0 0 1 27.875 30"
              />
            </g>
          </svg>

          <List>
            <ListItem>
              <Rating name="customized-10" max={1} />
              <IconButton
                onClick={handleClick}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <MoreVertIcon />
              </IconButton>
            </ListItem>
          </List>
        </Grid>

        <Typography fontSize={20} fontWeight={"bold"}>
          Docs
        </Typography>
        <Typography color="grey">2.24 Gb . 100 files</Typography>
        <AvatarGroup max={3} sx={{ mr: "14ch", mt: "1ch" }}>
          {DataCard.map((card) => (
            <Avatar src={card.avatar_image} />
          ))}
        </AvatarGroup>
      </CardContent>
      <CardMenu
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        onOpen={handleOpen}
      />
      <DialogBox open={openDialog} close={handleDialogClose} />
    </Card>
  );
}

interface DialogProps {
  open: boolean;
  close: () => void;
}

function DialogBox(props: DialogProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [mail,setMail] = useState("");

  const openDialog = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const hanldeUserInput = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setMail(e.target.value);
  };

  const { open, close } = props;

  return (
    <Dialog fullWidth open={open}>
      <Card sx={{ p: 2 }}>
        <DialogTitle fontWeight="bold">
          Invite
        </DialogTitle>
        <TextField
          label="Email"
          fullWidth
          onChange={hanldeUserInput}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  disabled={mail === ""}
                  sx={{ bgcolor: "text.secondary" }}
                >
                  Send invite
                </Button>
              </InputAdornment>
            ),
          }}
        ></TextField>

       <Grid>
       <List>
          {DataCard.map((card) => (
            <ListItem>
              <Avatar src={card.avatar_image} />
              <Tooltip title={card.mail}>
                <ListItemText
                  primary={card.label}
                  secondary={card.mail}
                  sx={{ ml: "2ch",   whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "100%"}}
                />
              </Tooltip>
              <Typography sx={{ color: "text.secondary" }} onClick={handleClick}>
                {card.function}
              </Typography>
              <KeyboardArrowDownIcon />
            </ListItem>
          ))}
        </List>

        <List>
          <ListItem>
            <LinkIcon />
            <ListItemText primary="Copy link" />
            <Button variant="outlined" onClick={close} sx={{color: "black", borderColor: "black"}}>
              Close
            </Button>
          </ListItem>
        </List> 
       </Grid>
        <DialogMenu
          open={openDialog}
          onClose={handleClose}
          anchorEl={anchorEl}
        />
      </Card>
    </Dialog>
  );
}
