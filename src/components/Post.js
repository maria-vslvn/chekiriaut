import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Default} from "./Default";
import Grid from "@material-ui/core/Grid";
const mainClass = 'post';

let Post = post => (
  post ?
   <Grid item xs={12} md={3}>
     <div className={mainClass}>
       <div className={`${mainClass}__head`}>
         <p className={`${mainClass}__title`}>{post.title}</p>
       </div>
       <div className={`${mainClass}__body`}>
         <p className={`${mainClass}__content`}>{post.body}</p>
       </div>
       <div className={`${mainClass}__footer`}>
         <p className={`${mainClass}__count`}>Id: {post.id}</p>
         <p className={`${mainClass}__subtitle`}>UserId: {post.userId}</p>
       </div>
     </div>
   </Grid> :
    <Default />
);

Post.propTypes ={
  userId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
};

const mapStateToProps = (state) => ({
  post: state.post.loaded,
});

export default connect(mapStateToProps, null)(Post);