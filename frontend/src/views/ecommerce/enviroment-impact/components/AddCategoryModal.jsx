import React from 'react'
import { Modal, Button, Form, Row, Col, FormGroup, FormLabel, FormControl } from 'react-bootstrap'

const AddCategoryModal = ({ show, handleClose, onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target))
    onAdd(formData)
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Environmental Impact</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Row className="g-3">
            <Col md={6}>
              <FormGroup>
                <FormLabel>Product Name</FormLabel>
                <FormControl type="text" name="title" placeholder="e.g. SmartX Watch" required />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <FormLabel>Product ID</FormLabel>
                <FormControl type="text" name="productId" placeholder="e.g. DPP-101" required />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <FormLabel>Impact Type</FormLabel>
                <Form.Select name="impactType" required>
                  <option value="">Select Impact Type</option>
                  <option value="Social">Social</option>
                  <option value="Power">Power</option>
                  <option value="Animal">Animal</option>
                </Form.Select>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <FormLabel>Origin Country</FormLabel>
                <FormControl type="text" name="originCountry" placeholder="e.g. Japan" required />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <FormLabel>Description</FormLabel>
                <FormControl as="textarea" rows={4} name="description" placeholder="Describe the environmental impact..." required />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <FormLabel>Status</FormLabel>
                <Form.Select name="status" defaultValue="" required>
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Deprecated">Deprecated</option>
                </Form.Select>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <FormLabel>Last Updated</FormLabel>
                <FormControl type="date" name="lastUpdated" required />
              </FormGroup>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Add Impact
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default AddCategoryModal
