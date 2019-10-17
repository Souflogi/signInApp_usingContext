import React, { Component } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  InputLabel,
  Paper,
  Typography,
  MenuItem,
  Select
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { withStyles } from "@material-ui/core";
import styles from "./styles/FormStyles";
import { LanguageContext } from "./contexts/LanguageContext";
const Words = {
  frensh: {
    SingIn: "Connexion",
    Pass: "Mot de pass",
    Remem: "Sevien de moi",
    email: "Adresse Electronique"
  },
  english: {
    SingIn: "Sign In",
    Pass: "Mot de pass",
    Remem: "Sevien de moi",
    email: "Email"
  },
  spanish: {
    SingIn: "Registrarse",
    Pass: "Contrasena",
    Remem: "Recuerdame",
    email: "Correo Electronico"
  }
};
class Form extends Component {
  static contextType = LanguageContext;

  render() {
    const { language, shwitchLanguage } = this.context;
    const { SingIn, Pass, Remem, email } = Words[language];
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <Paper className={classes.paper} elevation={6}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography variant='h5'>{SingIn}</Typography>
          <Select value={language} onChange={shwitchLanguage}>
            <MenuItem value='english'>English</MenuItem>
            <MenuItem value='frensh'>Frensh</MenuItem>
            <MenuItem value='spanish'>Spanish</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='email'>{email}</InputLabel>
              <Input id='email' name='email' autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='password'>{Pass}</InputLabel>
              <Input type='password' id='password' name='password' autoFocus />
              <FormControlLabel
                control={<Checkbox color='primary' />}
                label={Remem}
              />
            </FormControl>
            <Button
              type='submit'
              variant='outlined'
              color='secondary'
              fullWidth
              className={classes.submit}
            >
              {SingIn}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Form);
