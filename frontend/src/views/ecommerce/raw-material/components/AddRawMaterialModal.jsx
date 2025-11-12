import React from 'react'
import { Modal, Button, Form, Row, Col, ModalBody, ModalHeader, ModalTitle, FormGroup, FormLabel, FormControl, ModalFooter } from 'react-bootstrap'

const AddRawMaterialModal = ({ show, handleClose }) => {
  const onFormSubmit = (e) => {
    e.preventDefault()
    console.log('Raw Material form submitted. Implement data handling in parent if needed.')
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <ModalHeader closeButton>
        <ModalTitle as="h5">Add New Raw Material</ModalTitle>
      </ModalHeader>

      <Form onSubmit={onFormSubmit}>
        <ModalBody>
          <Row className="g-3">
            {/* Material Name */}
            <Col md={6}>
              <FormGroup controlId="materialName">
                <FormLabel>Material Name</FormLabel>
                <FormControl type="text" placeholder="e.g. Aluminum Sheet" required />
              </FormGroup>
            </Col>

            {/* Material ID */}
            <Col md={6}>
              <FormGroup controlId="materialId">
                <FormLabel>Material ID</FormLabel>
                <FormControl type="text" placeholder="e.g. RM-201" required />
              </FormGroup>
            </Col>

            {/* Supplier */}
            <Col md={6}>
              <FormGroup controlId="supplier">
                <FormLabel>Supplier</FormLabel>
                <FormControl type="text" placeholder="e.g. Global Metals Ltd." required />
              </FormGroup>
            </Col>

            {/* Country of Origin */}
            <Col md={6}>
              <FormGroup controlId="originCountry">
                <FormLabel>Country of Origin</FormLabel>
                <FormControl type="text" placeholder="e.g. Germany" required />
              </FormGroup>
            </Col>

            {/* Quantity */}
            <Col md={6}>
              <FormGroup controlId="quantity">
                <FormLabel>Quantity (kg/unit)</FormLabel>
                <FormControl type="number" placeholder="e.g. 500" required />
              </FormGroup>
            </Col>

            {/* Status */}
            <Col md={6}>
              <FormGroup controlId="status">
                <FormLabel>Status</FormLabel>
                <Form.Select defaultValue="">
                  <option value="">Select Status</option>
                  <option value="Available">Available</option>
                  <option value="Low Stock">Low Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                </Form.Select>
              </FormGroup>
            </Col>

            {/* Last Updated Date */}
            <Col md={6}>
              <FormGroup controlId="lastUpdatedDate">
                <FormLabel>Last Updated Date</FormLabel>
                <FormControl type="date" required />
              </FormGroup>
            </Col>

            {/* Description */}
            <Col md={12}>
              <FormGroup controlId="description">
                <FormLabel>Description (Optional)</FormLabel>
                <FormControl as="textarea" rows={3} placeholder="Details about the material..." />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>

        <ModalFooter>
          <Button variant="light" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Add Raw Material
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  )
}

export default AddRawMaterialModal
