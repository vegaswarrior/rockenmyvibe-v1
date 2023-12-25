import { Row, Col, Container, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
// import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
// import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import '../assets/styles/screens-css/homeScreen.css'
import heroImage from '../assets/logo.png'

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });


  return (
    <wrapper>
      {
        <Container className='hero-container'>
          <Row>
             <h1 className='text-center'>Welcome to Rocken My Vibe</h1>
              <img src={heroImage} className="hero-background-image" alt="hero-image" />
              <Button className="hero-button">Shop Now</Button>
          </Row>
        </Container>
      }
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </wrapper>
  );
};

export default HomeScreen;
