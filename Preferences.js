import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Preferences() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>מין</Form.Label>
                <br></br>
                <input type="radio" name="topping" value="male" id="male" />
                <label htmlFor="male"> זכר </label>
                <input type="radio" name="topping" value="female" id="female" />
                <label htmlFor="female"> נקבה </label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label> ?האם יש מישהו ספיציפי שתרצה לשבת לידו</Form.Label>
                <br></br>
                <input type="radio" name="topping" value="yes" id="yes" />
                <label htmlFor="male"> כן </label>
                <input type="radio" name="topping" value="no" id="no" />
                <label htmlFor="female"> לא </label>
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

export default Preferences;
function IsMutual(){


}