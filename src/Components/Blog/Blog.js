import { Col, Image, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <>
      <Row className="my-4">
        <Col md={6} className="align-self-center ">
          <h4>Difference between javascript and nodejs</h4>
          <p>
            First of all, Javascript is a high-level, multi paradigm, dynamic
            programming langugage. On the Other hand,NodeJS is a Javascript
            runtime environment. Node. js built on google's v8 engine and gives
            us the abiliy to run javascript outside the browser.
          </p>
        </Col>
        <Col md={6} className="align-self-center p-md-4">
          <Image
            fluid
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/800px-Node.js_logo.svg.png"
          ></Image>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6} className="align-self-center p-md-4">
          <Image
            fluid
            src="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"
          ></Image>
        </Col>
        <Col md={6} className="align-self-center ">
          <h4>When should you use nodejs and when should you use mongodb?</h4>
          <p>
            MongoDb offers an API library that runs within a Nodejs
            application.MongoDB also has API libraries for other programming
            environments such as Python, Java, etc.... As a document database,
            MongoDB makes it easy for developers to store structured or
            unstructured data. It uses a JSON-like format to store
            documents.MongoDB is built on a scale-out architecture that has
            become popular with developers of all kinds for developing scalable
            applications with evolving data schemas.
          </p>
          <p>
            Node Js is built on V8 engine and runs javascript so that we can use
            only Javascipt as the whole backen and front end project. And Node.
            js single-threaded dependent primarily used for non-blocking,
            event-driven servers. Most importantly it is suitable for scalable
            server-side job.
          </p>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6} className="align-self-center ">
          <h4>Differences between sql and nosql databases</h4>
          <p>
            SQL databases are primarily called as Relational Databases (RDBMS).
            SQL databases are vertically scalable, SQL databases are
            table-based.SQL databases are better for multi-row transactions
          </p>
          <p>
            NoSQL database are primarily called as non-relational or
            distributed. NoSQL databases are horizontally scalable.NoSQL
            databases are document, key-value, graph, or wide-column stores.
            NoSQL is better for unstructured data like documents or JSON
          </p>
        </Col>
        <Col md={6} className="align-self-center p-md-4 ">
          <Image
            fluid
            src="https://i.ytimg.com/vi/pFq1pgli0OQ/maxresdefault.jpg"
          ></Image>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6} className="align-self-center p-md-4">
          <Image
            fluid
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSib1dPyrKExvHf4MHrMeJ47KOSBmBPv5OWChmqarHLNQczewsT41St3ygkCamqRDNwW7Q&usqp=CAU"
          ></Image>
        </Col>
        <Col md={6} className="align-self-center ">
          <h4>What is the purpose of jwt and how does it work</h4>
          <p>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued
          </p>
        </Col>
      </Row>
    </>
  );
};

export default Blog;
