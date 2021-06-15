import React from 'react';
import Newform from './Newform';

const RenderList = (props) => {

  const {
    posts,
    handleChange,
    handleClick,
    handleDelete
  } = props;

  const arrPosts = posts.reverse();
  console.log(arrPosts)

  return (

   <div className="render-list">
      {arrPosts.map(post => {
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
  console.log(arrPosts)
}

export default RenderList;
