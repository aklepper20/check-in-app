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
import swal from 'sweetalert';
import moment from 'moment';

const App = () => {

  const [quoteItem, setQuoteItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const [selectedEntryId, setSelectedEntryId] = useState()
  const [values, setValues] = useState({ //actual values of form object properties
      dropdown: '', //initial default state
      message: '',
      headwinds: '',
      tailwinds: '',
      id: uuidv4(),
      createdAt: moment().format("MMM Do YY")
    });


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

    const openModal = (id) => {
      setShowModal(true);
      const post = posts.find(post =>
        post.id === id)
      setModalItem(post)
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
        swal('Entry Error:', 'Please make sure all inputs are filled out.')
        return //ejects from the function
      }

      let updatedPosts = [
        ...posts
      ] //taking the posts and letting it be an array

      updatedPosts.push(values) //taking the array and pushing the values
      setPosts(updatedPosts) //now setting the state of the new posts

      setValues({
        dropdown: '',
        message: '',
        headwinds: '',
        tailwinds: '',
        id: uuidv4(),
        createdAt: moment().format("MMM Do YY")
      }); // setting the state of the values to an empty object
    }

    // const handleEditPost = (id, updatePost)  => {
    //   setPosts(posts.map((post) => post.id === id ? updatePost : post))
    // };

    const handleDelete = (id) => {
      setPosts(posts.filter(post => {
        return post.id !== id
      }))
    };


  return (
    <>
      <Header />
      <RenderQuote content={content} />
      <Newform
        values={values}
        handleChange={handleChange}
        handleClick={handleClick}
        handleDelete={handleDelete}
        // handleEditPost={handleEditPost}
        modalItem={modalItem}
        openModal={openModal}
      />
      <RenderList
        values={values}
        posts={posts}
        handleChange={handleChange}
        handleClick={handleClick}
        handleDelete={handleDelete}
        // handleEditPost={handleEditPost}
        modalItem={modalItem}
        openModal={openModal}
      />
      <ModalElement
        values={values}
        showModal={showModal}
        closeModal={closeModal}
        modalItem={modalItem}
        />
    </>
    );
  }

export default App;
