import React, { useState, useEffect } from 'react';
import OnlyComment from '../OnlyComment/OnlyComment';
import { useParams } from 'react-router-dom';
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

const PostsDetails = () => {
    const classes = useStyles();
    const { PostId } = useParams()
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${PostId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={3}>
                    <Grid item xs>
                        <Typography>
                            <h1 style={{ textAlign: 'center' }}> <b>Post Id :</b> <span style={{ color: 'grey' }}> {post.id}</span> </h1>
                            <h1 style={{ textAlign: 'center' }}> <b>Title:</b><span style={{ color: 'grey' }}>{post.title}</span>   </h1>
                            <h1> <b> Details:</b><span style={{ color: 'grey' }}>{post.body}</span> </h1>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <div> <OnlyComment postId={PostId}></OnlyComment> </div>
        </div>
    );
};

export default PostsDetails;