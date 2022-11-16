import React, { useState } from "react";

import styled from "styled-components";

import {useQuery} from 'react-query'
import axios from 'axios'


const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 20px;
`;
const WithotRedux = styled.div``;
const TestPage = () => {


  return (
    <ContainerMain>
     <Posts/>
    </ContainerMain>
  );
};

function Posts(){
  async function fetchPosts(){
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')    
    return data
}
  const {data, error, isError, isLoading } = useQuery('posts', fetchPosts) 
  // first argument is a string to cache and track the query result
  if(isLoading){
      return <div>Loading...</div>
  }
  if(isError){
      return <div>Error! {error.message}</div>
  }
console.log(data)
  return(
      <div className='container'>
      <h1>Posts</h1>
      {
          data.map((post, index) => {
              return <li key={index}>{post.title}</li>
          })
      }

      </div>
  )
}

export default TestPage;
