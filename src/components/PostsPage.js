import * as React from 'react'
import Post from "./Post";
import {Link, Route, Switch} from "react-router-dom";

class PostsPage extends React.Component{

  render(){
    const {post, match, getPostsAction, deletePostAction} = this.props;
    return(
      <div style={{width: '100%', display: 'flex', flexWrap:'wrap'}}>
        { Object.values(post).map((item, key) =>
          <Post match={match} index={key} onDelete={() => deletePostAction(key)} key={key} body={item.body} title={item.title} id={item.id} userId={item.userId} getPosts={getPostsAction} />
        )}
        <Switch>
          <Route exact path={`${match.path}/posts/:postId`} render={()=><p>ok</p>}/>
        </Switch>
      </div>
    )
  }
}

export default PostsPage;
