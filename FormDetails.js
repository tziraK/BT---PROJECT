import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormDetails() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>הכנס קוד טיסה</Form.Label>
        <Form.Control type="text" placeholder="הכנס קוד טיסה" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>הכנס שם פרטי</Form.Label>
        <Form.Control type="text" placeholder=" הכנס שם פרטי" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">     
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>הכנס שם משפחה</Form.Label>
        <Form.Control type="text" placeholder="הכנס שם משפחה" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>הכנס כתובת אימייל</Form.Label>
        <Form.Control type="email" placeholder=" הכנס כתובת אימייל" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" >
        להמשך
      </Button>
      
    </Form>
  );
}

export default FormDetails;