import React from 'react'
import { Modal, Button, Form, Row, Col, ModalBody, ModalHeader, ModalTitle, FormGroup, FormLabel, FormControl, ModalFooter } from 'react-bootstrap'

const AddDppCertificationModal = ({ show, handleClose }) => {
  const onFormSubmit = (e) => {
    e.preventDefault()
    console.log('DPP Certification form submitted. Implement data handling in parent if needed.')
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <ModalHeader closeButton>
        <ModalTitle as="h5" id="addDppCertificationModalLabel">
          Add New DPP Certification
        </ModalTitle>
      </ModalHeader>

      <Form onSubmit={onFormSubmit}>
        <ModalBody>
          <Row className="g-3">
            {/* Product Name */}
            <Col md={6}>
              <FormGroup controlId="productName">
                <FormLabel>Product Name</FormLabel>
                <FormControl type="text" placeholder="e.g. EcoSmart LED Bulb" required />
              </FormGroup>
            </Col>

            {/* Brand / Manufacturer */}
            <Col md={6}>
              <FormGroup controlId="brand">
                <FormLabel>Brand / Manufacturer</FormLabel>
                <FormControl type="text" placeholder="e.g. GreenLite" required />
              </FormGroup>
            </Col>

            {/* Passport ID */}
            <Col md={6}>
              <FormGroup controlId="passportId">
                <FormLabel>Digital Passport ID</FormLabel>
                <FormControl type="text" placeholder="e.g. DPP-1024" required />
              </FormGroup>
            </Col>

            {/* Issue Date */}
            <Col md={6}>
              <FormGroup controlId="issueDate">
                <FormLabel>Issue Date</FormLabel>
                <FormControl type="date" required />
              </FormGroup>
            </Col>

            {/* Expiry Date */}
            <Col md={6}>
              <FormGroup controlId="expiryDate">
                <FormLabel>Expiry Date</FormLabel>
                <FormControl type="date" required />
              </FormGroup>
            </Col>

            {/* Compliance Status */}
            <Col md={6}>
              <FormGroup controlId="complianceStatus">
                <FormLabel>Compliance Status</FormLabel>
                <Form.Select defaultValue="active" required>
                  <option value="">Select Status</option>
                  <option value="verified">Verified</option>
                  <option value="pending">Pending Review</option>
                  <option value="active">Active</option>
                  <option value="expired">Expired</option>
                </Form.Select>
              </FormGroup>
            </Col>

            {/* Country of Registration */}
            <Col md={6}>
              <FormGroup controlId="country">
                <FormLabel>Country of Registration</FormLabel>
                <FormControl type="text" placeholder="e.g. Germany" required />
              </FormGroup>
            </Col>

            {/* Description */}
            <Col md={12}>
              <FormGroup controlId="description">
                <FormLabel>Description (Optional)</FormLabel>
                <FormControl as="textarea" rows={3} placeholder="Brief notes about this certification or sustainability details..." />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>

        <ModalFooter>
          <Button variant="light" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Add Certification
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  )
}

export default AddDppCertificationModal
