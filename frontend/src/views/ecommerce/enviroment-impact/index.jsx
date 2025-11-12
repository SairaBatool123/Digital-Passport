import { Container, Row, Col } from 'react-bootstrap'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import EnvironmentalImpactCard from './components/EnvironmentalImpactCard'

const Index = () => (
  <Container fluid>
    <PageBreadcrumb title="Digital Product Passport" subtitle="Care Instructions" />
    <Row className="justify-content-center">
      <Col xxl={12}>
        <EnvironmentalImpactCard />
      </Col>
    </Row>
  </Container>
)

export default Index
