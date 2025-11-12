import { Col, Container, Row } from 'react-bootstrap';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import CertificateCard from './components/Certificate'
const Index = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Certificate List" subtitle="Ecommerce" />

      <Row className="justify-content-center">
        <Col xxl={12}>
          <CertificateCard />
        </Col>
      </Row>
    </Container>
  )
};
export default Index;