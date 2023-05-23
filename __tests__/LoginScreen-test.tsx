import 'react-native';
import React from 'react';
import  { LoginScreen } from '../screens/LoginScreen';
import {fireEvent, render, screen} from '@testing-library/react-native';
import renderer from "react-test-renderer"

describe('Login Screen Testing', () => {
  it('Check Renders Correctly', () => {
    render(<LoginScreen />);
  });
  it('fire changetext event', () => {
    const {getByTestId} = render(<LoginScreen />);
    const emailInput = getByTestId('email-input');
    fireEvent.changeText(emailInput, 'test@gmail.com');
    expect(emailInput.props.value).toBe('test@gmail.com');
    const passwordInput = getByTestId('password-input');
    fireEvent.changeText(passwordInput, '1234');
    expect(passwordInput.props.value).toBe('1234');
  });

  it('should toggle the password text entry', () => {
    const {getByTestId} = render(<LoginScreen />);
    const ImageElement = getByTestId('pass-img');
    const passwordInput = getByTestId('password-input');
    expect(passwordInput.props.secureTextEntry).toBe(true);
    fireEvent.press(ImageElement);
    expect(passwordInput.props.secureTextEntry).not.toBe(true);
    fireEvent.press(ImageElement);
    expect(passwordInput.props.secureTextEntry).toBe(true);
  });

  it('Login Button Click ', () => {
    // jest.mock("console")
    const {getByTestId} = render(<LoginScreen />);
    const LoginButton = getByTestId('btn');
    const handleLoginMock = jest.spyOn(LoginScreen.prototype, 'handleLogin');
    fireEvent.press(LoginButton);
    expect(handleLoginMock).toBeCalled();
  });

  it('Check email error message displays correctly', async () => {
    const {findByTestId} = render(<LoginScreen />);
    const emailInput = await findByTestId('email-input');
    const passwordInput = await findByTestId("password-input");
    const loginButton = await findByTestId('btn');
    // Simulate entering an invalid email
    fireEvent.changeText(emailInput, '');
    fireEvent.changeText(passwordInput, "1234")
    // Simulate button click
    fireEvent.press(loginButton);
    // Wait for the error message to appear
    const emailErrorMessage = await findByTestId('email-error');
    // Assert that the error message is displayed
    expect(emailErrorMessage.props.children).toBe(
      'Please enter valid email id',
    );
  });

  it("check password error message displays correctly", async () => {
    const {findByTestId}  = render(<LoginScreen />)
    const LoginScreenBlock = render(<LoginScreen />)    
    const passwordInput = (await findByTestId("password-input"));
    const emailInput = await findByTestId('email-input');
    const loginButton = await findByTestId('btn');
    fireEvent.changeText(passwordInput, "")
    fireEvent.changeText(emailInput, "1234")
    fireEvent.press(loginButton)
    const passwordErrorMessage = await findByTestId("password-error")
    expect(passwordErrorMessage.props.children).toBe("Password entered is incorrect. Please enter correct password")
  })

  it("check not display passsword or email error when both  are present", async () => {
    const {findByTestId, queryByTestId} = render(<LoginScreen />)    
    const passwordInput = await findByTestId("password-input");
    const emailInput = await findByTestId('email-input');
    const loginButton = await findByTestId('btn');
    fireEvent.changeText(passwordInput, "12323")
    fireEvent.changeText(emailInput, "1234")
    expect(await queryByTestId("email-error")).toBeNull()
    expect(await queryByTestId("password-error")).toBeNull()
  })
});
