import * as React from 'react'
import {connect} from 'react-redux'
import {createPostTitle} from "../actions/PostActions";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

class PostCreateForm extends React.Component {
  render() {
    const {post, createPost, setTitleAction} = this.props;
    const setTitle = event => {
      this.setState({title: event.target.value})
    };
    const setBody = event => {
      this.setState({body: event.target.value})
    };
    const setId = event => {
      this.setState({id: event.target.value})
    };
    return (
      <Grid container>
        <Grid item xs={12} md={7}>
        <p style={{marginTop: 0, fontSize: '3rem'}}>Post creation</p>
        </Grid>
        <Grid item xs={12} md={7}>
          <Paper style={{padding: '1rem 2rem'}}>
            <Grid item xs={12}>
              <TextField
                id={"postTitle"}
                label="Post Title"
                value={post.title}
                onChange={(value) => setTitle(value)}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id={"postBody"}
                label={"Post Content"}
                multiline
                rows="8"
                onChange={(value) => setBody(value)}
                value={post.body}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <p>{}</p>
              {/*<TextField*/}
                {/*id={"postTitle"}*/}
                {/*label="Post Title"*/}
                {/*value={title}*/}
                {/*onChange={(value) => setId(value)}*/}
                {/*margin="normal"*/}
                {/*variant="outlined"*/}
              {/*/>*/}
            </Grid>
            <Button style={{marginTop:'2rem', width:'100%'}} variant="contained" color="primary" onClick={()=>setTitleAction(this.state.title, this.state.body)}>Add New Post</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={7}>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = store => ({
  createPost: store.post.posts
});
const mapDispatchToProps = dispatch => ({
  setTitleAction: (text, body) => dispatch(createPostTitle(text, body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCreateForm);