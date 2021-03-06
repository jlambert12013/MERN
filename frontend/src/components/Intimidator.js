import Image from "react-bootstrap/esm/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img1 from "../assests/intimidator/intimidator-card1.jpg";
import img2 from "../assests/intimidator/intimidator-card2.jpg";
import img3 from "../assests/intimidator/intimidator-card3.jpg";

function Intimidator() {
  let images = [img1, img2, img3];

  return (
    <>
      <Container fluid style={{ maxWidth: 2000 }}>
        <Row className="intimidator">
          {images.map((image) => {
            return (
              <Col md={4} className="g-4">
                <Image className="intimidator-img" src={image} fluid rounded />
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col className="mt-4 my-4 text-center">
            <h1 className="d-inline-block text-center px-2 ">
              Work. Hunt. Play.
            </h1>
            <p className="text-muted text-start d-inline-block mx-2 px-2 ">
              We are Intimidator. We strive to build the most comfortable,
              durable, and rugged UTV on the market. We build them at our
              headquarters in Batesville, Arkansas with our crew of hardworking
              employees. We include a large list of premium components and have
              a unit to fit any needs. Choose from our ever-growing list of
              accessories from our sister company Bad Dawg Accessories to create
              your custom Intimidator.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Intimidator;
