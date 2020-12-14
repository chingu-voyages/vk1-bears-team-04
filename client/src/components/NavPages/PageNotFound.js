import React from "react";
import NotFound from "../../images/pagenotfound.svg";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Content = styled.div`
    background-image: url(${NotFound});
`;

const PageNotFound = () => {
  return (
    <>
      <Content className="max-w-full bg-center bg-cover bg-no-repeat">
        <div className="pt-24 pb-48 text-center text-white">
            <div className="pb-48">
              <h1 className="text-9xl">404</h1>
              <h2 className="text-4xl">Page Not Found</h2>
              <div className="pt-12"></div>
            <button className="border-solid border-white border-2 px-4 py-2 rounded-md"><Link to="/">Go Back to Home</Link></button>
            </div>

        </div>
      </Content>
    </>
  );
};

export default PageNotFound;
