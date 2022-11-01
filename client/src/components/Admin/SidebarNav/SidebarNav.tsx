import styles from './SidebarNav.module.css';
import { ROUTES } from '../../../constants/routes';
import React, { useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

const SidebarNav: React.FC = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.containerSidebar}>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Admin dashboard
          </ListSubheader>
        }
      >
        {/* // Live box */}
        <ListItemButton href={ROUTES.ADMINLive}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Live chat" />
        </ListItemButton>

        {/* // Toggle box */}
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Content" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* // Content box */}
            <ListItemButton sx={{ pl: 5 }} href={ROUTES.ADMINContent}>
              <ListItemIcon>
                <FileUploadOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Uploader" />
            </ListItemButton>

            {/* // Content approval box */}
            <ListItemButton
              sx={{ pl: 5 }}
              href={ROUTES.ADMINContentApproval}
            >
              <ListItemIcon>
                <AddTaskOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Approval" />
            </ListItemButton>

            {/* // Stock box */}
            <ListItemButton sx={{ pl: 5 }} href={ROUTES.ADMINStock}>
              <ListItemIcon>
                <FactoryOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Stock" />
            </ListItemButton>

            {/* // Discount box */}
            <ListItemButton
              sx={{ pl: 5 }}
              href={ROUTES.ADMINDiscount}
            >
              <ListItemIcon>
                <PercentOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Discount" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* // Administration box */}
        <ListItemButton href={ROUTES.ADMINAdministration}>
          <ListItemIcon>
            <InventoryOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>

        {/* // Shipping box */}
        <ListItemButton href={ROUTES.ADMINShipping}>
          <ListItemIcon>
            <LocalShippingOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Shipping" />
        </ListItemButton>

        {/* // Payments box */}
        <ListItemButton href={ROUTES.ADMINPayments}>
          <ListItemIcon>
            <SavingsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Payments" />
        </ListItemButton>

        {/* // Customers box */}
        <ListItemButton href={ROUTES.ADMINCustomers}>
          <ListItemIcon>
            <GroupOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItemButton>
      </List>
    </div>
  );
};

export default SidebarNav;
