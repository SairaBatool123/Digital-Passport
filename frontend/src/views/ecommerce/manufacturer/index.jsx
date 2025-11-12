import { Col, Container, Row } from 'react-bootstrap';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import ManufacturerCard from './components/Manufacturer';
const Index = () => {
  return <Container fluid>
      <PageBreadcrumb title="Manufacturer Listing" subtitle="Ecommerce" />

      <Row className="justify-content-center">
        <Col xxl={12}>
          <ManufacturerCard />
        </Col>
      </Row>
    </Container>;
};
export default Index;