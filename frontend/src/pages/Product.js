import { ListGroup, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductScreen = ({ match }) => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          {/* <Image src={product.image} alt={product.name} /> */}
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item></ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default ProductScreen
