import { makeStyles } from "@mui/styles"

export const Styles = makeStyles((theme) => ({
  container: {
    height: "100vh",
  },
  appBar: {
    boxShadow: "none !important",
  },
  iconMenu: {
    paddingRight: theme.spacing(5) + "!important", //define o espaçamento como 4 * 5
    paddingLeft: theme.spacing(6) + "!important", //define o espaçamento como 4 * 6
  },
  icon: {
    paddingRight: theme.spacing(5) + "!important", //define o espaçamento como 4 * 5
  },
  grow: {
    flexGrow: 1,
  },
}))
