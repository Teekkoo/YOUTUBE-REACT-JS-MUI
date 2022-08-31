import React from "react"
import { Styles } from "./styled"
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { AccountCircle, Apps, MoreVert, VideoCall } from "@mui/icons-material"

const Home = () => {
  const styled = Styles()
  return (
    <Box className={styled.container}>
      <AppBar color="inherit" className={styled.appBar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            className={styled.iconMenu}
          >
            <MenuIcon />
          </IconButton>
          <Box className={styled.grow} />
          <IconButton size="large" color="inherit" className={styled.icon}>
            <VideoCall />
          </IconButton>
          <IconButton size="large" color="inherit" className={styled.icon}>
            <Apps />
          </IconButton>
          <IconButton size="large" color="inherit" className={styled.icon}>
            <MoreVert />
          </IconButton>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<AccountCircle />}
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Home
