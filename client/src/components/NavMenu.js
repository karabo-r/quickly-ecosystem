import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";

const NavMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const styles = {
    list: {
      paddingLeft: 0,
      fontSize: "1.2rem",
    },
    menu: {
      padding: 1,
    },
  };

  //

  return (
    <Container>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {/* Test Menu */}
        <MenuIcon
          variant="outlined"
          style={{ color: "black", transform: "scale(1.5)" }}
          //   iconStyle={styles.largeIcon}
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        disableElevation
        elevation={0}
        sx={styles.menu}
      >
        <MenuItem onClick={handleClose} sx={styles.list}>
          Qr-code
        </MenuItem>
        <MenuItem onClick={handleClose} sx={styles.list}>
          Emoji Search
        </MenuItem>
        <MenuItem onClick={handleClose} sx={styles.list}>
          Upcoming
        </MenuItem>
        <MenuItem onClick={handleClose} sx={styles.list}>
          About
        </MenuItem>
        {/* <MenuItemsProcessed /> */}
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;
`;

export default NavMenu;
