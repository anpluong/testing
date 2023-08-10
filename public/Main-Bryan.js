// src/main/components/brian/Brian.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [res, setRes] = useState({});
  const [resPost, setResPost] = useState({});

  const fetchData = async () => {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    setRes(response.data);
  };

  const postData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    let data = {
      firstName: "John",
      lastName: "Smith",
    };

    let response = await axios.post(url, data);
    setResPost(response.data);

    // axios
    //   .post(url, data)
    //   .then((response) => {
    //     setResPost(response.data);
    //   })
    //   .catch((error) => {
    //     setResPost({ error: "failed" });
    //   });
  };

  return (
    <div>
      <p>Brian</p>
      {/*
       *
       * Axios GET
       *
       */}
      <button
        data-testid="my-button"
        onClick={async () => {
          fetchData();
        }}
      >
        click me
      </button>
      <p data-testid="my-result">{JSON.stringify(res)}</p>

      {/*
       *
       * Axios Post
       *
       */}
      <button
        data-testid="my-button-post"
        onClick={async () => {
          postData();
        }}
      >
        click me post
      </button>
      <p data-testid="my-result-post">{JSON.stringify(resPost)}</p>
    </div>
  );
};

export default Main;