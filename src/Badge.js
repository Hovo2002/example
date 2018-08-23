import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
});

function SimpleBadge(props) {
  const { classes } = props;
  return (
    <div>
      <div>
        <Badge className={classes.margin} badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
        <Badge className={classes.margin} badgeContent={10} color="secondary">
          <MailIcon />
        </Badge>
        <IconButton aria-label="4 pending messages" className={classes.margin}>
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
        </IconButton>
      </div>
      <Badge color="primary" badgeContent={4} className={classes.margin}>
        <Typography className={classes.padding}>Typography</Typography>
      </Badge>
      <Badge color="primary" badgeContent={4} className={classes.margin}>
        <Button variant="contained">Button</Button>
      </Badge>
    </div>
  );
}

SimpleBadge.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBadge);