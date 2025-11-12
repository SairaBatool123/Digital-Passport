import { Container, Row, Col } from 'react-bootstrap'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import CareInstructionsCard from './components/CareInstructionsCard'

const Index = () => (
  <Container fluid>
    <PageBreadcrumb title="Digital Product Passport" subtitle="Care Instructions" />
    <Row className="justify-content-center">
      <Col xxl={12}>
        <CareInstructionsCard />
      </Col>
    </Row>
  </Container>
)

export default Index
