import { useState } from 'react'
import ComponentCard from '@/components/cards/ComponentCard'
import { Col, Row, Form, FormLabel, FormControl, Button } from 'react-bootstrap'

const Supplier = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    vatNumber: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    image: null,
  })

  const handleChange = (e) => {
    const { name, value, type, files } = e.target
    if (type === 'file') {
      setFormData({ ...formData, image: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Supplier data:', formData)
    alert('Supplier saved successfully!')
  }

  return (
    <ComponentCard title="Add Supplier">
      <Form onSubmit={handleSubmit}>
        {/* Row 1 */}
        <Row>
          <Col lg={6}>
            <Row className="mb-3">
              <Col lg={4}>
                <FormLabel>Company Name</FormLabel>
              </Col>
              <Col lg={8}>
                <FormControl name="companyName" placeholder="Enter company name" value={formData.companyName} onChange={handleChange} required />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={4}>
                <FormLabel>Address</FormLabel>
              </Col>
              <Col lg={8}>
                <FormControl name="address" placeholder="Enter address" value={formData.address} onChange={handleChange} required />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={4}>
                <FormLabel>State</FormLabel>
              </Col>
              <Col lg={8}>
                <FormControl name="state" placeholder="Enter state" value={formData.state} onChange={handleChange} />
              </Col>
            </Row>
          </Col>

          <Col lg={6}>
            <Row className="mb-3">
              <Col lg={4}>
                <FormLabel>Image</FormLabel>
              </Col>
              <Col lg={8}>
                <FormControl type="file" name="image" accept=".jpg,.jpeg,.png" onChange={handleChange} />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={4}>
                <FormLabel>Name</FormLabel>
              </Col>
              <Col lg={8}>
                <FormControl name="name" placeholder="Enter supplier name" value={formData.name} onChange={handleChange} required />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={4}>
                <FormLabel>Email</FormLabel>
              </Col>
              <Col lg={8}>
                <FormControl name="email" type="email" placeholder="example@example.com" value={formData.email} onChange={handleChange} required />
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Row 2 */}
        <Row>
          <Col lg={6}>
            <Row className="mb-3">
              <Col lg={4}>
                <FormLabel>Phone Number</FormLabel>
              </Col>
              <Col lg={8}>
                <FormControl name="phone" placeholder="Enter phone number" value={formData.phone} onChange={handleChange} required />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={4}>
                <FormLabel>Postal Code</FormLabel>
              </Col>
              <Col lg={8}>
                <FormControl name="postalCode" placeholder="Enter postal code" value={formData.postalCode} onChange={handleChange} />
              </Col>
            </Row>
          </Col>

          <Col lg={6}>
            <Row className="mb-3">
              <Col lg={4}>
                <FormLabel>City</FormLabel>
              </Col>
              <Col lg={8}>
                <FormControl name="city" placeholder="Enter city" value={formData.city} onChange={handleChange} required />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={4}>
                <FormLabel>Country</FormLabel>
              </Col>
              <Col lg={8}>
                <FormControl name="country" placeholder="Enter country" value={formData.country} onChange={handleChange} />
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Submit Button */}
        <div className="text-end mt-4">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </ComponentCard>
  )
}

export default Supplier