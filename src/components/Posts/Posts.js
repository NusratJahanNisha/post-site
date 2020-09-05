import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    paper: {
        maxWidth: 1200,
        margin: `${theme.spacing(4)}px auto`,
        padding: theme.spacing(3),
    },
}));

const Posts = (props) => {
    const classes = useStyles();
    const { id, title } = props.post;
    return (
        <div>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={3}>
                    <Grid item xs>
                        <Typography className="button">
                            <h1 style={{ textAlign: 'center' }}> <b>Post Id :</b> <span style={{ color: 'grey' }}> {id}</span> </h1>
                            <h1 style={{ textAlign: 'center' }}> <b>Title:</b><span style={{ color: 'grey' }}>{title}</span>   </h1>
                            <h1 style={{ textAlign: 'center' }}>         
                                <Link to={`/post/${id}`}>
                                    <Button variant="contained" color="primary">
                                        See more
                                    </Button>
                                </Link>
                            </h1>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>

        </div>
    );
};

export default Posts;