import React from "react";
import { Container } from "semantic-ui-react";

// Anything place in this component will be moved to Head element in HTML
import Head from "next/head";
import Header from "./Header";

export default props => {
  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        <title>Kickstart</title>
      </Head>
      <Header />
      {props.children}
    </Container>
  );
};
