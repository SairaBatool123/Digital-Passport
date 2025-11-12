import React from 'react'
import { Modal, Button, Form, Row, Col, FormGroup, FormLabel, FormControl, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap'

const AddCategoryModal = ({ show, handleClose }) => {
  const onFormSubmit = (e) => {
    e.preventDefault()
    console.log('Care Instruction form submitted. Implement data handling in parent.')
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <ModalHeader closeButton>
        <ModalTitle>Add New Care Instruction</ModalTitle>
      </ModalHeader>

      <Form onSubmit={onFormSubmit}>
        <ModalBody>
          <Row className="g-3">
            <Col md={6}>
              <FormGroup controlId="productName">
                <FormLabel>Product Name</FormLabel>
                <FormControl type="text" placeholder="e.g. SmartX Watch" required />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup controlId="productId">
                <FormLabel>Product ID</FormLabel>
                <FormControl type="text" placeholder="e.g. DPP-101" required />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup controlId="careType">
                <FormLabel>Care Type</FormLabel>
                <Form.Select defaultValue="">
                  <option value="">Select Care Type</option>
                  <option value="Cleaning">Cleaning</option>
                  <option value="Storage">Storage</option>
                  <option value="Usage">Usage</option>
                  <option value="Maintenance">Maintenance</option>
                </Form.Select>
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup controlId="originCountry">
                <FormLabel>Origin Country</FormLabel>
                <FormControl type="text" placeholder="e.g. Japan" required />
              </FormGroup>
            </Col>

            <Col md={12}>
              <FormGroup controlId="instructions">
                <FormLabel>Instructions</FormLabel>
                <FormControl as="textarea" rows={4} placeholder="Write detailed care instructions..." required />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup controlId="lastUpdated">
                <FormLabel>Last Updated</FormLabel>
                <FormControl type="date" required />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup controlId="status">
                <FormLabel>Status</FormLabel>
                <Form.Select defaultValue="">
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Deprecated">Deprecated</option>
                </Form.Select>
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>

        <ModalFooter>
          <Button variant="light" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Add Care Instruction
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  )
}

export default AddCategoryModal
