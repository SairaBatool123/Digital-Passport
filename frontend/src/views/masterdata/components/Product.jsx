import { useState } from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  InputGroup,
  Button,
  Modal,
  Toast,
  ToastContainer,
} from 'react-bootstrap'
import { LuGrid3X3, LuLayers, LuSave, LuTag, LuToggleLeft, LuPlus, LuCheck } from 'react-icons/lu'

const handleSaveProduct = () => {
  // Here you can add logic to save product data to backend later
  setToastMessage('Product saved successfully!')
}
const Product = () => {
  const [showModal, setShowModal] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [brands, setBrands] = useState(['Apple', 'Samsung'])
  const [categories, setCategories] = useState(['Furniture', 'Electronics', 'Fashion'])

  const [modalType, setModalType] = useState('')
  const [modalInput, setModalInput] = useState('')

  const openModal = (type) => {
    setModalType(type)
    setModalInput('')
    setShowModal(true)
  }

  const handleAddItem = (type, value) => {
    if (!value) return
    if (type === 'brand') setBrands([...brands, value])
    if (type === 'category') setCategories([...categories, value])
    setToastMessage(`${value} added to ${type}`)
    setShowModal(false)
  }

  return (
    <>
      <Card>
        <CardHeader className="d-block p-3">
          <h4 className="card-title mb-1">Add Product</h4>
          <p className="text-muted mb-0">Add your product by selecting the appropriate brand, category, sub-category, status, and tags.</p>
        </CardHeader>
        <CardBody>
          {/* Brand */}
          <FormGroup className="mb-3">
            <FormLabel htmlFor="brand">Brand</FormLabel>
            <InputGroup>
              <FormControl type="text" id="brand" placeholder="Enter brand name" />
              {/* <InputGroup.Text>
                <LuLayers className="text-muted" />
              </InputGroup.Text> */}
              <Button variant="outline-primary" onClick={() => openModal('brand')}>
                <LuPlus />
              </Button>
            </InputGroup>
          </FormGroup>

          {/* Category */}
          <FormGroup className="mb-3">
            <FormLabel htmlFor="category">Category</FormLabel>
            <InputGroup>
              <FormSelect id="category">
                <option>Choose Category</option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </FormSelect>
              {/* <InputGroup.Text>
                <LuGrid3X3 className="text-muted" />
              </InputGroup.Text> */}
              <Button variant="outline-primary" onClick={() => openModal('category')}>
                <LuPlus />
              </Button>
            </InputGroup>
          </FormGroup>

          {/* Sub Category */}
          <FormGroup className="mb-3">
            <FormLabel htmlFor="subCategory">Sub Category</FormLabel>
            <InputGroup>
              <FormSelect id="subCategory">
                <option>Choose Sub Category</option>
                <option value="Chairs">Chairs</option>
                <option value="Sofas">Sofas</option>
                <option value="Tables">Tables</option>
              </FormSelect>
              {/* <InputGroup.Text>
                <LuList className="text-muted" />
              </InputGroup.Text> */}
              <Button variant="outline-primary" onClick={() => openModal('subCategory')}>
                <LuPlus />
              </Button>
            </InputGroup>
          </FormGroup>

          {/* Status */}
          <FormGroup className="mb-3">
            <FormLabel htmlFor="statusOne">Status</FormLabel>
            <InputGroup>
              <FormSelect id="statusOne">
                <option>Choose Status</option>
                <option value="Published">Published</option>
                <option value="Inactive">Inactive</option>
                <option value="Schedule">Schedule</option>
                <option value="Draft">Draft</option>
              </FormSelect>
              {/* <InputGroup.Text>
                <LuToggleLeft className="text-muted" />
              </InputGroup.Text> */}
            </InputGroup>
          </FormGroup>
          {/* Save Button */}
          <div className="text-end">
            <Button variant="primary" className="d-flex align-items-center gap-2" onClick={handleSaveProduct}>
              <LuSave size={18} /> Save Product
            </Button>
          </div>
        </CardBody>
      </Card>
      {/* Modal for Adding Item */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add {modalType}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl placeholder={`Enter ${modalType} name`} value={modalInput} onChange={(e) => setModalInput(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleAddItem(modalType, modalInput)}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Toast Notification */}
      <ToastContainer position="top-end" className="p-3">
        <Toast
          show={!!toastMessage}
          onClose={() => setToastMessage('')}
          delay={3000}
          autohide
          className="border-0 shadow-sm rounded"
          style={{ minWidth: '250px', backgroundColor: '#28a745', color: '#fff' }}>
          <Toast.Header closeButton={false} className="d-flex align-items-center bg-transparent border-0 p-2">
            <LuCheck className="me-2" size={20} />
            <strong className="me-auto">Success</strong>
            <small className="text-white-50">Now</small>
          </Toast.Header>
          <Toast.Body className="py-2 px-3">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  )
}

export default Product;