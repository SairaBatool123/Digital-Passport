import { Card, CardBody } from 'react-bootstrap'
import CountUp from 'react-countup'
import PropTypes from 'prop-types'

const StatCard = ({ item }) => {
  const { description, title, prefix, suffix, value, icon: Icon, color } = item

  return (
    <Card
      className="shadow-sm border-0 mb-4 stat-card"
      style={{
        borderRadius: '12px',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}>
      <CardBody className="p-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
        {/* Icon Section */}
        {Icon && (
          <div
            className="d-flex justify-content-center align-items-center mb-3 mb-md-0"
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: '#f8f9fa',
              color: color || '#000',
              fontSize: '2rem',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            }}>
            <Icon />
          </div>
        )}

        {/* Text Section */}
        <div className="text-center text-md-end flex-grow-1">
          <h5 className="text-muted mb-1" style={{ fontSize: '0.95rem' }}>
            {title}
          </h5>
          <h3 className="fw-bold mb-2" style={{ fontSize: '1.9rem', color: '#000' }}>
            <CountUp end={value} prefix={prefix || ''} suffix={suffix || ''} duration={1.5} />
          </h3>
          <p className="text-muted mb-0" style={{ fontSize: '0.85rem' }}>
            {description}
          </p>
        </div>
      </CardBody>
    </Card>
  )
}

// Type checking
StatCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.elementType, 
    color: PropTypes.string,
  }).isRequired,
}

export default StatCard
