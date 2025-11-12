import { useState } from 'react'
import ComponentCard from '@/components/cards/ComponentCard'
import { Col, Row, Form, FormLabel, FormControl, Button, FormSelect } from 'react-bootstrap'

const Certificate = () => {
  const [certificateOptions, setCertificateOptions] = useState(['JavaScript Basics', 'React Fundamentals', 'Python Advanced'])
  const [selectedCertificate, setSelectedCertificate] = useState('')
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [newOption, setNewOption] = useState('')

  const handleSelectChange = (e) => {
    if (e.target.value === '__add_new__') {
      setIsAddingNew(true) // Activate new option input
      setSelectedCertificate('')
    } else {
      setSelectedCertificate(e.target.value)
      setIsAddingNew(false)
    }
  }

  const handleAddNew = () => {
    if (newOption.trim() && !certificateOptions.includes(newOption.trim())) {
      setCertificateOptions([...certificateOptions, newOption.trim()])
      setSelectedCertificate(newOption.trim())
      setNewOption('')
      setIsAddingNew(false)
    }
  }

  return (
    <ComponentCard title="Add Certificate">
      <Row>
        <Col lg={6}>
          {/* Certificate Name Dropdown */}
          <Row className="mb-3">
            <Col lg={4}>
              <FormLabel>Certificate Name</FormLabel>
            </Col>
            <Col lg={8}>
              {isAddingNew ? (
                <Row>
                  <Col xs={8}>
                    <FormControl placeholder="Enter new certificate" value={newOption} onChange={(e) => setNewOption(e.target.value)} />
                  </Col>
                  <Col xs={4}>
                    <Button variant="secondary" onClick={handleAddNew}>
                      Save
                    </Button>
                  </Col>
                </Row>
              ) : (
                <FormSelect value={selectedCertificate} onChange={handleSelectChange}>
                  <option value="">Select Certificate</option>
                  {certificateOptions.map((opt, idx) => (
                    <option key={idx} value={opt}>
                      {opt}
                    </option>
                  ))}
                  <option value="__add_new__">+ Add New</option>
                </FormSelect>
              )}
            </Col>
          </Row>

          {/* Upload Certificate */}
          <Row className="mb-3">
            <Col lg={4}>
              <FormLabel>Upload File</FormLabel>
            </Col>
            <Col lg={8}>
              <FormControl type="file" accept=".pdf,.jpg,.jpeg,.png" />
              <Form.Text muted>Supported formats: PDF, JPG, PNG</Form.Text>
            </Col>
          </Row>
        </Col>

        <Col lg={6}>

          {/* Certificate ID */}
          <Row className="mb-3">
            <Col lg={4}>
              <FormLabel>Certificate ID</FormLabel>
            </Col>
            <Col lg={8}>
              <FormControl type="text" placeholder="Enter certificate ID" />
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="text-end mt-4">
        <Button variant="primary">Save Certificate</Button>
      </div>
    </ComponentCard>
  )
}

export default Certificate