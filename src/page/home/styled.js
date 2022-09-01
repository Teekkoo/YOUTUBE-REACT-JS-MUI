import { makeStyles } from "@mui/styles"

export const Styles = makeStyles((theme) => ({
  container: {
    height: "100vh",
  },
  appBar: {
    boxShadow: "none !important",
    zIndex: theme.zIndex.drawer + 1 + "!important",
  },
  iconMenu: {
    paddingRight: theme.spacing(5) + "!important", //define o espaçamento como 4 * 5
    paddingLeft: theme.spacing(6) + "!important", //define o espaçamento como 4 * 6
  },
  logo: {
    height: 25,
    width: "auto !important",
  },
  icon: {
    paddingRight: theme.spacing(5) + "!important", //define o espaçamento como 4 * 5
  },
  grow: {
    flexGrow: 1,
  },
  listItemText: {
    fontSize: "14px ",
  },
  listItem: {
    paddingTop: "4px !important",
    paddingBottom: "4px !important",
  },
}))
