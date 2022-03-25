import {
  Card,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  CardContent
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BackupIcon from '@mui/icons-material/Backup';
import AvTimerIcon from '@mui/icons-material/AvTimer';

const Sidebar = () => {

  return (
    <Card>
      <CardContent   
      style={
        {
          width: '100%',
          height:'83vh',
        }}>

        <nav aria-label="main mailbox folders" style={{ color: '#3D3B5D', marginTop: '20%'}}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon color='info' />
                </ListItemIcon>
                <ListItemText primary="Console" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AvTimerIcon color='info' />
                </ListItemIcon>
                <ListItemText primary="Timed actions" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BackupIcon color='info' />
                </ListItemIcon>
                <ListItemText primary="Backup" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </CardContent>
    </Card>
  )

}

export default Sidebar;