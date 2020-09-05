import React from 'react';
import CommentPicture from '../CommentPicture/CommentPicture';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: 900,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
}));

const ShowOnlyComment = (props) => {
    const classes = useStyles();
    const { name, email, body } = props.comment;
    return (
        <div>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={3}>
                    <Grid item>
                        <Avatar><CommentPicture></CommentPicture></Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography>
                        <h5>Name: {name}</h5>
                        <h5>Email: {email}</h5>
                        <h5>Comment:{body}</h5>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
        // </div>
    );
};

export default ShowOnlyComment;