import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Switch
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";
import { ThemeContext } from "./contexts/ThemeProvider";

class navBar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkmode, Toggle } = this.context;
    console.log(Toggle);
    const { classes } = this.props;
    return (
      <div>
        <AppBar position='static' color={isDarkmode ? "default" : "primary"}>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit'>
              <span>Fr</span>
            </IconButton>
            <Typography className={classes.title} variant='h6' color='inherit'>
              LoginApp
            </Typography>
            <Switch onChange={Toggle} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder='Search ...'
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(navBar);
