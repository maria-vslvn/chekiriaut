import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Default} from "./Default";
import Grid from "@material-ui/core/Grid";
import {Link, Route, Switch} from "react-router-dom";
import Button from "@material-ui/core/es/Button/Button";
import {PencilIcon, TrashIcon} from "./Icons";
const mainClass = 'post';

let Post = ({title, body, match, onDelete, id}) => (
  title ?
    <Grid item xs={12} md={3}>
      <div className={mainClass}>
        {/*Link to={`${match.url}/posts/${id}`}*/}
        <div className={`${mainClass}__head`}>
          <p className={`${mainClass}__title`}>{title}</p>
        </div>
        <div className={`${mainClass}__body`}>
          <p className={`${mainClass}__content`}>{body}</p>
        </div>
        <div className={`${mainClass}__footer`}>
          {/*<p className={`${mainClass}__count`}>Id: {post.id}</p>*/}
          {/*<p className={`${mainClass}__subtitle`}>UserId: {post.userId}</p>*/}
          <Button disabled variant="contained" color="primary">
            <PencilIcon fill={'#fff'} width={'1.2rem'}/>
          </Button>
          <Button onClick={(i) => onDelete(i)} variant="contained" color="primary">
            <TrashIcon fill={'#fff'} width={'1.2rem'}/>
          </Button>
        </div>
      </div>
    </Grid>
    :
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