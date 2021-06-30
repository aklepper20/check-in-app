import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import RenderQuote from './RenderQuote';
import Header from './Header';
import Newform from './Newform';
import RenderList from './RenderList';
import swal from 'sweetalert';
import moment from 'moment';
import './css/app.css';

export const PostContext = React.createContext();
const LOCAL_STORAGE_KEY = 'journal.posts';

const App = () => {

  const [quoteItem, setQuoteItem] = useState([]);
  const [posts, setPosts] = useState([]);
  const [values, setValues] = useState({
      dropdown: '',
      message: '',
      headwinds: '',
      tailwinds: '',
      id: uuidv4(),
      createdAt: moment().format("MMM Do YY")
    });
  const [updateValues, setUpdateValues] = useState({
      dropdown: '',
      message: '',
      headwinds: '',
      tailwinds: '',
      id: uuidv4(),
      createdAt: moment().format("MMM Do YY")
  })

  useEffect(() => {
    fetchData();
  }, []);

   useEffect(() => {
    const postsJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (postsJSON != null) setPosts(JSON.parse(postsJSON))
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts))
  }, [posts]);

 const fetchData = () => {
    const ENDPOINT = 'https://free-quotes-api.herokuapp.com/';
    axios(ENDPOINT)
      .then((res) => {
        console.log(res.data);
        setQuoteItem(Object.values(res.data));
      }).catch((err) => {
        console.log(err)
      });
  };

  const content = quoteItem;

    const handleClick = (e) => {
      e.preventDefault();
      if (values.dropdown === '' || values.message === '' ||
          values.headwinds === '' || values.tailwinds === '') {
        swal('Entry Error:', 'Please make sure all inputs are filled out.')
        return
      }

      let updatedPosts = [
        ...posts, values
      ]

      setPosts(updatedPosts)
      setValues({
          dropdown: '',
          message: '',
          headwinds: '',
          tailwinds: '',
          id: uuidv4(),
          createdAt: moment().format("MMM Do YY")
        })
    };

    const handleChange = (e) => {
      const { name, value } = e.target
      setValues({
        ...values,
        [name]: value
      })
    };

    const handleUpdate = (id) => {
      posts.forEach((post, index) => {
        if (post.id === id) {
          const updatedPostsArray = posts
          updatedPostsArray.splice(index, 1, updateValues)
          setPosts(updatedPostsArray)
        }
      })
    }

     const handleDelete = (id) => {
      setPosts(posts.filter(post => {
        return post.id !== id
      }));
    };

     const postContextValue = {
      handleClick,
      handleChange,
      handleDelete,
      updateValues,
      setUpdateValues,
      handleUpdate
    };

  return (
    <>
    <PostContext.Provider value={postContextValue}>
      <div className="display-space-evenly main-container">
        <Header />
        <Newform values={values} />
      </div>
      <RenderQuote content={content} />
      <RenderList
        values={values}
        posts={posts}
      />
    </PostContext.Provider>
    </>
    )
  }

export default App;
