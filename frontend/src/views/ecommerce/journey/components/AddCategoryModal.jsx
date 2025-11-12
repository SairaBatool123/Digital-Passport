import React from 'react'
import {
  Modal,
  Button,
  Form,
  Row,
  Col,
  ModalBody,
  ModalHeader,
  ModalTitle,
  FormGroup,
  FormLabel,
  FormControl,
  ModalFooter
} from 'react-bootstrap'

const AddCategoryModal = ({ show, handleClose }) => {
  const onFormSubmit = (e) => {
    e.preventDefault()
    console.log('Product Journey form submitted. Implement data handling in parent if needed.')
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <ModalHeader closeButton>
        <ModalTitle as="h5" id="addProductJourneyModalLabel">
          Add New Product Journey
        </ModalTitle>
      </ModalHeader>

      <Form onSubmit={onFormSubmit}>
        <ModalBody>
          <Row className="g-3">
            {/* Product Name */}
            <Col md={6}>
              <FormGroup controlId="productName">
                <FormLabel>Product Name</FormLabel>
                <FormControl type="text" placeholder="e.g. SmartX Watch" required />
              </FormGroup>
            </Col>

            {/* Product ID */}
            <Col md={6}>
              <FormGroup controlId="productId">
                <FormLabel>Product ID</FormLabel>
                <FormControl type="text" placeholder="e.g. PJ-101" required />
              </FormGroup>
            </Col>

            {/* Category */}
            <Col md={6}>
              <FormGroup controlId="category">
                <FormLabel>Category</FormLabel>
                <FormControl type="text" placeholder="e.g. Wearable Tech" required />
              </FormGroup>
            </Col>

            {/* Origin Country */}
            <Col md={6}>
              <FormGroup controlId="originCountry">
                <FormLabel>Origin Country</FormLabel>
                <FormControl type="text" placeholder="e.g. Japan" required />
              </FormGroup>
            </Col>

            {/* Stage */}
            <Col md={6}>
              <FormGroup controlId="stage">
                <FormLabel>Stage</FormLabel>
                <Form.Select defaultValue="">
                  <option value="">Select Stage</option>
                  <option value="Research & Development">Research & Development</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Quality Testing">Quality Testing</option>
                  <option value="Packaging">Packaging</option>
                  <option value="Shipment">Shipment</option>
                  <option value="Market Launch">Market Launch</option>
                </Form.Select>
              </FormGroup>
            </Col>

            {/* Status */}
            <Col md={6}>
              <FormGroup controlId="status">
                <FormLabel>Status</FormLabel>
                <Form.Select defaultValue="">
                  <option value="">Select Status</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Pending Approval">Pending Approval</option>
                  <option value="Completed">Completed</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Dispatched">Dispatched</option>
                </Form.Select>
              </FormGroup>
            </Col>

            {/* Progress */}
            <Col md={6}>
              <FormGroup controlId="progress">
                <FormLabel>Progress (%)</FormLabel>
                <FormControl type="number" placeholder="e.g. 75" min="0" max="100" required />
              </FormGroup>
            </Col>

            {/* Quantity */}
            <Col md={6}>
              <FormGroup controlId="quantity">
                <FormLabel>Quantity</FormLabel>
                <FormControl type="number" placeholder="e.g. 5000" required />
              </FormGroup>
            </Col>

            {/* Last Updated Date */}
            <Col md={6}>
              <FormGroup controlId="date">
                <FormLabel>Last Updated Date</FormLabel>
                <FormControl type="date" required />
              </FormGroup>
            </Col>

            {/* Last Updated Time */}
            <Col md={6}>
              <FormGroup controlId="time">
                <FormLabel>Last Updated Time</FormLabel>
                <FormControl type="time" required />
              </FormGroup>
            </Col>

            {/* Description */}
            <Col md={12}>
              <FormGroup controlId="description">
                <FormLabel>Description (Optional)</FormLabel>
                <FormControl as="textarea" rows={3} placeholder="Brief information about the product journey..." />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>

        <ModalFooter>
          <Button variant="light" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Add Product Journey
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  )
}

export default AddCategoryModal
