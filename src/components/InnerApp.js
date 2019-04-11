import * as React from 'react';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import {Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import {Default} from "./Default";
import {getPosts} from "../actions/PostActions";
import Post from "./Post";
import Grid from "@material-ui/core/Grid";


class InnerApp extends React.Component{
  render(){
    const { match, post, getPostsAction } = this.props;
    const linkStyle = {
      color: '#444',
      fontSize: '1.6rem',
      padding: '10px 20px',
      textDecoration: 'none',
      display: 'block',
    };
    return(
      <div style={{marginTop:48}}>
        <Paper style={{width: 350, position:'fixed', top:48, bottom:0, left:0, borderRadius:0}}>
          <MenuList>
            <li>
              <Link onClick={getPostsAction} style={linkStyle} to={`${match.url}/posts`}>Posts</Link>
            </li>
           <li>
             <Link style={linkStyle} to={`${match.url}/users`}>Test</Link>
           </li>
          </MenuList>
        </Paper>
       <div style={{width: 'calc(100% - 350px)', marginLeft: 350, padding: 10, boxSizing: 'border-box'}}>
         <Grid container spacing={8}>
           <Switch>
             <Route path={`${match.path}/posts`} render={()=> Object.values(post).map((item, key) => <Post key={key} body={item.body} title={item.title} id={item.id} userId={item.userId} getPosts={getPostsAction} />)} />
             <Route path={`${match.path}/users`} component={Default} />
           </Switch>
         </Grid>
       </div>
      </div>
    )
  }
}

const mapStateToProps = store =>({
  post: store.post.loaded,
});

const mapDispatchToProps = dispatch => ({
  getPostsAction: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InnerApp);