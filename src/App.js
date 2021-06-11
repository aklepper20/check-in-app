import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import RenderQuote from './RenderQuote';
import Header from './Header';
import Newform from './Newform';
import RenderList from './RenderList';
import ModalElement from './ModalElement';
import Spinner from 'react-bootstrap/Spinner'
import './css/app.css'
// import { base } from './base';

const App = () => {

  const [quoteItem, setQuoteItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]) //object that is created from submitting form
  const [selectedPostId, setSelectedPostId] = useState();
  const [showModal, setShowModal] = useState(false);
  const [modalItem, setModalItem] = useState({})

  const [values, setValues] = useState({ //actual values of form object properties
      dropdown: 'thoughts', //initial default state
      message: '',
      headwinds: '',
      tailwinds: '',
      id: uuidv4()
    });

const selectedPost = posts.find(post => post.id === selectedPostId);
//values is the initial state of whats passed into setState['']

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const ENDPOINT = 'https://free-quotes-api.herokuapp.com/';
    axios(ENDPOINT)
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setQuoteItem(Object.values(res.data));
      }).catch((err) => {
        console.log(err)
      });
  };

  const content = loading ? <Spinner size="large" animation="border" role="status" variant="primary">
    <span className="sr-only">
          Loading...
        </span>
      </Spinner> : quoteItem;

    const openModal = (item) => {
      setShowModal(true);
      setModalItem(item);
    }

    const closeModal = () => {
      setShowModal(false);
    }

    const handleChange = (e) => {
      const { name, value } = e.target
      setValues({
        ...values,
        [name]: value
      })
    }

    const handleClick = (e) => {
      e.preventDefault();
      if (values.message === '' || values.headwinds === '' || values.tailwinds === '') {
        return //ejects from the function
      }

      let updatedPosts = [
        ...posts
      ] //taking the posts and letting it be an array

      updatedPosts.push(values) //taking the array and pushing the values
      setPosts(updatedPosts) //now setting the state of the new posts

      setValues({
        dropdown: 'thoughts',
        message: '',
        headwinds: '',
        tailwinds: '',
        id: uuidv4()
      }); // setting the state of the values to an empty object
    }

    const handlePostSelect = (id) => {
      setSelectedPostId(id)
    };

    const handleEditPost = (id, updatePost)  => {
      setPosts(posts.map((post) => post.id === id ? updatePost : post))
    };

    const handleDelete = (id) => {
       setPosts(posts.filter(post => post.id !== post.id))
    };
    console.log(selectedPost)
  return (
    <>
      <Header />
      <RenderQuote content={content} />
      <Newform
        values={values}
        handleChange={handleChange}
        handleClick={handleClick}
        selectedPost={selectedPost}
      />
      <RenderList
        posts={posts}
        handleDelete={handleDelete}
        handlePostSelect={handlePostSelect}
        handleEditPost={handleEditPost}
        openModal={openModal}
      />
      <ModalElement showModal={showModal} closeModal={closeModal} modalItem={modalItem} />
    </>
  );
}

export default App;
