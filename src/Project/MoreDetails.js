import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MoreDetails(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <button type="button" className="btn btn-info"  onClick={handleShow}> More details</button>
   
      <Modal show={show}>
        <Modal.Header >
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MoreDetails;