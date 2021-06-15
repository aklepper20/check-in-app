import React from 'react';
import Newform from './Newform';
const RenderList = (props) => {

  const {
    posts,
    handleChange,
    handleClick,
    handleDelete
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
            isDelete={true}
          />
        )
      })}
      </div>

  )
}

export default RenderList;
