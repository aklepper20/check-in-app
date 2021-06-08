import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import * as ReactBootStrap from 'react-bootstrap';
import RenderQuote from './RenderQuote';
import Header from './Header';
import Newform from './Newform';
import './css/app.css'
// import { base } from './base';

const App = () => {

  const [quoteItem, setQuoteItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const [values, setValues] = useState({
      dropdown: '',
      message: '',
      headwinds: '',
      tailwinds: ''
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

  return (
    <>
      <Header />
      <RenderQuote content={content} />
      <Newform
        values={values}
        handleChange={handleChange}
      />
    </>
  );
}



export default App;
