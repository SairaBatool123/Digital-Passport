import { Col, Container, Row } from 'react-bootstrap'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import RawMaterialCard from './components/RawMaterialCard'

const Index = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Raw Material Listing" subtitle="Digital Product Passport" />
      <Row className="justify-content-center">
        <Col xxl={12}>
          <RawMaterialCard />
        </Col>
      </Row>
    </Container>
  )
}

export default Index
