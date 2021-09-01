import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
const Signup = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);
  const [addUser, { error }] = useMutation(ADD_USER);
  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }
    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };
  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={
            !(
              userFormData.username &&
              userFormData.email &&
              userFormData.password
            )
          }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};
export default Signup;

// import React from 'react';

// export default function SignUp() {
//   return (
//     <div>
//       <h1>Blog Page</h1>
//       <p>
//         Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
//         Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
//         dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
//         sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
//         sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
//         vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
//         libero. Class aptent taciti sociosqu ad litora torquent per conubia
//         nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
//         lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
//         Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
//         in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
//         bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
//         est ligula suscipit velit, sed bibendum turpis dui in sapien.
//       </p>
//     </div>
//   );
// }
