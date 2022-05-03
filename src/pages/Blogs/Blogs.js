import React from "react";
import { Table } from "react-bootstrap";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container">
      <div className="qna1">
        <h4 className=" mb-3">1. Javascript Vs Nodejs:</h4>
        <Table className="m-0" striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Javascript</th>
              <th>Nodejs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                JavaScript is a high level programming language that runs
                browser's JavaScript Engine.
              </td>
              <td>
                Node JS is an interpreter or running environment for JavaScript
                programming language.
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                JavaScript is normally used for any client-side activity web
                applications.
              </td>
              <td>Node.js is used for server-side scripting.</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                JavaScript can run on any engine, including Firefox's Spider
                Monkey, Safari's JavaScript Core, and V8 (Google Chrome).
              </td>
              <td>
                Node.js only supports the V8 engine, which is exclusive to
                Google Chrome.
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>It is designed to build network-centric applications.</td>
              <td>
                It's designed for data-intensive real-time applications that run
                on several platforms.
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="qna2">
        <h4>2. When to use Mongodb and Nodejs</h4>
        <div className="que2Ans">
          <div className="ans1">
            <h5 className="my-3">#MongoDB:</h5>
            <ul>
              <li>When our data is objet oriented.</li>
              <li>
                When we need to store a large amount of data without structure.
              </li>
              <li>
                When our data doesn't fit well into the schema of a relational
                database.
              </li>
              <li>when we are rapidly prototyping.</li>
            </ul>
          </div>
          <div className="ans2">
            <h5>#Nodejs:</h5>
            <ul>
              <li>
                When we want a rich package environment. Nodejs produce more
                then 500 packages.
              </li>
              <li>When we need to use/create an API at the server-level.</li>
              <li>
                When we are familiar with JS it's better to go with nodejs as it
                uses V8 engine.
              </li>
              <li>
                When it's important to utilize web sockets, Node.js is
                well-suited for real-time web applications.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="qna4">
        <h4 className="my-3">2. SQL VS NOSQL database</h4>
        <Table className="m-0" striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>SQL</th>
              <th>NOSQL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>
                These databases have fixed or static or predefined schema.
              </td>
              <td>They have dynamic schema.</td>
            </tr>

            <tr>
              <td>2</td>
              <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).</td>
              <td>Non-relational or distributed database system.</td>
            </tr>

            <tr>
              <td>3</td>
              <td>These databases are best suited for complex queries.</td>
              <td>These databases are not so good for complex queries.</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Vertically Scalable.</td>
              <td>Horizontally scalable.</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="qna3">
        <h4>4. What is the purpose of JWT and how dose it work:</h4>
        <p>
          <i>
            JWT (JSON Web Token) is used for authorization. It's basically used
            to transmit information from client site to server site securely. It
            dose not allows unauthorized one to access the data.
          </i>
        </p>
        <b>How dose it works:</b>
        <ol>
          <li>
            JWT starts with creating a token for the user from the server site.
          </li>
          <li>The token comes from server to client site.</li>
          <li>
            Then we proceed with storing (this token can be store at local
            storage or other places) the token, so that the user can use the
            given token.
          </li>
          <li>
            When the user request with given token to get data form the server,
            the token came with the request go through verification process.
          </li>
          <li>
            If the token is ok, then the server response with users desire data.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Blogs;
