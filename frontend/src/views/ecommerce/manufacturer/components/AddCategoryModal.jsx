import React from 'react'
import { Modal, Button, Form, Row, Col, ModalBody, ModalHeader, ModalTitle, FormGroup, FormLabel, FormControl, ModalFooter } from 'react-bootstrap'

const AddCategoryModal = ({ show, handleClose }) => {
  const onFormSubmit = (e) => {
    e.preventDefault()
    console.log('Manufacturer form submitted. Implement data handling in parent if needed.')
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <ModalHeader closeButton>
        <ModalTitle as="h5" id="addManufacturerModalLabel">
          Add New Manufacturer
        </ModalTitle>
      </ModalHeader>

      <Form onSubmit={onFormSubmit}>
        <ModalBody>
          <Row className="g-3">
            {/* Manufacturer Name */}
            <Col md={6}>
              <FormGroup controlId="manufacturerName">
                <FormLabel>Manufacturer Name</FormLabel>
                <FormControl type="text" placeholder="e.g. Samsung Electronics" required />
              </FormGroup>
            </Col>

            {/* Country of Origin */}
            <Col md={6}>
              <FormGroup controlId="country">
                <FormLabel>Country of Origin</FormLabel>
                <FormControl type="text" placeholder="e.g. South Korea" required />
              </FormGroup>
            </Col>

            {/* Contact Email */}
            <Col md={6}>
              <FormGroup controlId="email">
                <FormLabel>Contact Email</FormLabel>
                <FormControl type="email" placeholder="e.g. contact@samsung.com" required />
              </FormGroup>
            </Col>

            {/* Phone Number */}
            <Col md={6}>
              <FormGroup controlId="phone">
                <FormLabel>Phone Number</FormLabel>
                <FormControl type="text" placeholder="e.g. +82 123 456 789" required />
              </FormGroup>
            </Col>

            {/* Website */}
            <Col md={12}>
              <FormGroup controlId="website">
                <FormLabel>Website</FormLabel>
                <FormControl type="text" placeholder="e.g. https://www.samsung.com" />
              </FormGroup>
            </Col>

            {/* Status */}
            <Col md={6}>
              <FormGroup controlId="status">
                <FormLabel>Status</FormLabel>
                <Form.Select defaultValue="active" required>
                  <option value="all">Select Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </Form.Select>
              </FormGroup>
            </Col>

            {/* Description */}
            <Col md={12}>
              <FormGroup controlId="description">
                <FormLabel>Description (Optional)</FormLabel>
                <FormControl as="textarea" rows={3} placeholder="Brief information about the manufacturer..." />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>

        <ModalFooter>
          <Button variant="light" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Add Manufacturer
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  )
}

export default AddCategoryModal
