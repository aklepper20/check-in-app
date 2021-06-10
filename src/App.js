import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import * as ReactBootStrap from 'react-bootstrap';
import RenderQuote from './RenderQuote';
import Header from './Header';
import Newform from './Newform';
import RenderList from './RenderList';
import './css/app.css'
// import { base } from './base';

const App = () => {

  const [quoteItem, setQuoteItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]) //object that is created from submitting form
  const [values, setValues] = useState({ //actual values of form object properties
      dropdown: 'thoughts', //initial default state
      message: '',
      headwinds: '',
      tailwinds: ''
    });

//values is the initial state of whats passed into setState['']


console.log(posts)
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

  const content = loading ? <ReactBootStrap.Spinner size="large" animation="border" role="status" variant="primary">
    <span className="sr-only">
          Loading...
        </span>
      </ReactBootStrap.Spinner> : quoteItem;

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
        tailwinds: ''
      }); // setting the state of the values to an empty object
    }

  return (
    <>
      <Header />
      <RenderQuote content={content} />
      <Newform
        values={values}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <RenderList posts={posts} />
    </>
  );
}



export default App;
