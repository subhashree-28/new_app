import { Divider, Menu, MenuItem, Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface MenuProps {
  open: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
  onOpen: () => void;
}

export default function CardMenu(props: MenuProps) {
  const { open, onClose, anchorEl, onOpen } = props;

  return (
    <Menu
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            marginLeft: "5ch",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 20,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
    >
      <MenuItem>
        <LinkIcon />
        Copy Link
      </MenuItem>
      <MenuItem onClick={onOpen}>
        <ShareIcon />
        Share
      </MenuItem>
      <MenuItem>
        <EditIcon />
        Edit
      </MenuItem>
      <Divider />
      <MenuItem>
        <DeleteIcon sx={{ color: "orange" }} />
        <Typography color="orange"> Delete</Typography>
      </MenuItem>
    </Menu>
  );
}
