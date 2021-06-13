import React from 'react';
import Newform from './Newform';
import { v4 as uuidv4 } from 'uuid';
import { propTypes } from 'react-bootstrap/esm/Image';

const RenderList = ( props ) => {

  const {
    posts,
    handleChange,
    handleClick,
    handleDelete,
    handleEditPost,
    openModal
  } = props

  return (
   <div className="render-list">
      {posts.map(post => {
        return (
          <Newform
            key={post.id}
            {...post}
            handleChange={handleChange}
        handleClick={handleClick}
        handleDelete={handleDelete}
        handleEditPost={handleEditPost}
        openModal={openModal}
            isEdit={true}
            isDelete={true}
          />
        )
      })}
      </div>
  )
}

export default RenderList;
