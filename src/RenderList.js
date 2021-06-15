import React from 'react';
import Newform from './Newform';

const RenderList = (props) => {

  const {
    posts
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
            isDelete={true}
          />
        )
      })}
      </div>
  )
}

export default RenderList;
