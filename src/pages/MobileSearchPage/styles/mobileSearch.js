import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const SearchBox = styled.div`
  direction: rtl;
  display: flex;
  position: relative;
  justify-content: space-around;
  width: 90%;
  height: 4rem;
  border: 2px solid rgba(0, 0, 0, 0.1);
  margin: 10px;
  box-shadow:  -1px 11px 24px -11px rgba(0, 0, 0, 0.2);
  
  /* padding: 10px; */
  background-color: #f5f5f5;
  border-radius: 50px;
  i {
    width: 10%;
    text-align: center;
    font-size: 20px;
    opacity: 0.5;
    padding: 15px 20px;
  }
  input {
    text-align: right;
    width: 60%;
    padding: 10px;
    border: none;
    outline: none;
    z-index: 1000;
    background-color: #f5f5f5;

    ::placeholder {
      font-size: 15px;
    }
  
  }
  span {
    display: flex;
    text-align: center;
    align-items: center;
    width: 20%;
    opacity: 0.5;
    border-left: 2px solid rgba(0, 0, 0, 0.1);
    padding: 10px;
  }
`;
export const Title = styled.h1`
font-size: 15pt;
font-weight: bold;
margin: 10px;
text-align:right;
width: 100%;
padding: 10px;
`;

export const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
margin-bottom: 30px;
    padding-bottom: 45px;
    border-bottom: 16px solid var(--pale-grey);
`;