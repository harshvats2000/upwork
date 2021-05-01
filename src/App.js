import "./App.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Page = styled.div`
  background: rgb(0, 0, 0, 0.1);
  display: grid;
  place-items: center;
  height: 100vh;
`;
const Input = styled.input`
  padding: 10px;
`;
const Result = styled.div`
  & > p {
    color: rgb(0, 0, 0, 0.5);
    & > span {
      color: rgb(0, 0, 0);
    }
  }
`;

function App() {
  const [data, setData] = useState({
    dollars: ""
  });

  const onChange = ({ target: { name, value } }) => {
    setData({
      [name]: value
    });
  };

  return (
    <Page>
      <Input autoFocus type="number" value={data.dollars} name="dollars" onChange={onChange} placeholder="Enter total dollars" />
      <Result>
        <p>
          Rs. <span> {(data.dollars * 72).toFixed(1)}</span> without upwork fee
        </p>
        <p>
          Rs. <span>{(data.dollars * 72 * 0.9).toFixed(1)}</span> with 10% upwork fee
        </p>
        <p>
          Rs. <span>{(data.dollars * 72 * 0.8).toFixed(1)}</span> with 20% upwork fee
        </p>
      </Result>
      <div>1 dollar = Rs 72</div>
    </Page>
  );
}

export default App;
