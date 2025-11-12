import { Col, Container, Row } from 'react-bootstrap';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { statCards } from '@/views/dashboards/dashboard/data';
import RecentOrders from '@/views/dashboards/dashboard/components/RecentOrders';
import StatCard from "@/views/dashboards/dashboard/components/StatCard";
const Index = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title={'Dashboard'} />
      <Row>
        {statCards.map((item, idx) => (
          <Col md={3} key={idx}>
            <StatCard item={item} />
          </Col>
        ))}
      </Row>

      <Row>

        <Col xxl={12}>
          <RecentOrders />
        </Col>
      </Row>
    </Container>
  )
};
export default Index;