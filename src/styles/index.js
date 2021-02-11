import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: 'black',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sideNavContainer: {
    width: '10vw',
    height: '100vh',
    border: '1px solid black',
  },
  sideNav: {
    borderRight: `1px solid ${grey[200]}`,
    height: '100vh',
  },
}));
