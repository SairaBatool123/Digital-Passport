import { Col, Container, Row } from 'react-bootstrap';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import JourneyCard from './components/JourneyCard'
const Index = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Journey Listing" subtitle="Ecommerce" />

      <Row className="justify-content-center">
        <Col xxl={12}>
          <JourneyCard />
        </Col>
      </Row>
    </Container>
  )
};
export default Index;