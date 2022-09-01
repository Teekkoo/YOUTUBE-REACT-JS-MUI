import React from "react"
import { Styles } from "./styled"
import {
  AppBar,
  Box,
  Button,
  CardMedia,
  Drawer,
  IconButton,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  ListSubheader,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import {
  AccountCircle,
  Apps,
  History,
  MoreVert,
  Subscriptions,
  VideoCall,
  VideoLibrary,
  Whatshot,
} from "@mui/icons-material"
import HomeIcon from "@mui/icons-material/Home"

const drawerWidth = 240

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
          <CardMedia
            component="img"
            className={styled.logo}
            image="/images/preto.png"
            alt="Logo"
          />
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
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "none",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />

        <List>
          <ListItem classes={{ root: styled.listItem }}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: styled.listItemText,
                }}
                primary={"Inicio"}
              />
            </ListItemButton>
          </ListItem>
          <ListItem classes={{ root: styled.listItem }}>
            <ListItemButton>
              <ListItemIcon>
                <Whatshot />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: styled.listItemText,
                }}
                primary={"Em Alta"}
              />
            </ListItemButton>
          </ListItem>
          <ListItem classes={{ root: styled.listItem }}>
            <ListItemButton>
              <ListItemIcon>
                <Subscriptions />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: styled.listItemText,
                }}
                primary={"Inscrições"}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem classes={{ root: styled.listItem }}>
            <ListItemButton>
              <ListItemIcon>
                <VideoLibrary />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: styled.listItemText,
                }}
                primary={"Biblioteca"}
              />
            </ListItemButton>
          </ListItem>
          <ListItem classes={{ root: styled.listItem }}>
            <ListItemButton>
              <ListItemIcon>
                <History />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: styled.listItemText,
                }}
                primary={"Historico"}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <Box p={7}>
          <Typography variant="body2">
            Faça login para curtir videos, comentar e se inscrever.
          </Typography>

          <Box mt={2}>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              startIcon={<AccountCircle />}
            >
              Fazer Login
            </Button>
          </Box>
        </Box>
        <Divider />
        <List>
          <ListSubheader>O melhor do Youtube</ListSubheader>
          <ListItem classes={{ root: styled.listItem }}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: styled.listItemText,
                }}
                primary={"Musica"}
              />
            </ListItemButton>
          </ListItem>
          <ListItem classes={{ root: styled.listItem }}>
            <ListItemButton>
              <ListItemIcon>
                <Whatshot />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: styled.listItemText,
                }}
                primary={"Esportes"}
              />
            </ListItemButton>
          </ListItem>
          <ListItem classes={{ root: styled.listItem }}>
            <ListItemButton>
              <ListItemIcon>
                <Subscriptions />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: styled.listItemText,
                }}
                primary={"Jogos"}
              />
            </ListItemButton>
          </ListItem>
          <ListItem classes={{ root: styled.listItem }}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: styled.listItemText,
                }}
                primary={"Filme"}
              />
            </ListItemButton>
          </ListItem>
          <ListItem classes={{ root: styled.listItem }}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: styled.listItemText,
                }}
                primary={"Noticias"}
              />
            </ListItemButton>
          </ListItem>
          <ListItem classes={{ root: styled.listItem }}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: styled.listItemText,
                }}
                primary={"Ao Vivo"}
              />
            </ListItemButton>
          </ListItem>
          <ListItem classes={{ root: styled.listItem }}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: styled.listItemText,
                }}
                primary={"Destaques"}
              />
            </ListItemButton>
          </ListItem>
          <ListItem classes={{ root: styled.listItem }}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: styled.listItemText,
                }}
                primary={"Video em 360º"}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem classes={{ root: styled.listItem }}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: styled.listItemText,
                }}
                primary={"Procurar canais"}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  )
}

export default Home
