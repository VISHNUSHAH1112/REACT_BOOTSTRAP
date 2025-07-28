// import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import PersonImg from "./assets/Person.png";

function App() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div
          className="col-md-6"
          style={{ position: "relative", top: "125px" }}
        >
          <h1>Hi, I'm John Deo.</h1>
          <p>
            A freelance Web developer from London. I convert custom <br />
            web designs to Bootstrap templates.
          </p>
          <p>I make YouTube videos and write Blogs.</p>
          <Button
            variant="primary"
            style={{ height: "42px", borderRadius: "25px", width: "142px" }}
          >
            Primary
          </Button>
        </div>
        <Col
          xs={12}
          md={6}
          className="text-center mt-4 mt-md-0"
          style={{ position: "relative", top: "125px" }}
        >
          <Image src={PersonImg} />
        </Col>
      </div>
    </div>
  );
}

export default App;
