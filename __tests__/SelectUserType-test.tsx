import "react-native"
import React from "react"
import {fireEvent, render} from "@testing-library/react-native"
import SelectUserType, { styles } from "../screens/SelectUserType"

describe("Select User Test", () => {
  it("renders correctly", ()=> {
    render(<SelectUserType />)
  })  
  it("check opacity value", () => {
    // const selected = ""
    const {getByTestId} = render(<SelectUserType />)
    const ButtonElement = getByTestId("btn")
    expect(ButtonElement.props.style.opacity).toEqual(0.5)
  })
  it("should remove opactity when button is pressed", () => {
    const {getByTestId} = render(<SelectUserType />);
    const StudentButtonElement = getByTestId("stubtn")
    const ButtonElement = getByTestId("btn")
    fireEvent.press(StudentButtonElement);
    expect(ButtonElement.props.style).not.toContainEqual({opacity : 0.5})
  })

  it("should update styling when selected", () => {
    const {getByTestId} = render(<SelectUserType />);
    const StudentButtonElement = getByTestId("stubtn")
    const InstructorButtonElement  = getByTestId("insbtn")
    const RecButtonElement   =getByTestId("recbtn")

    // console.log(StudentButtonElement.props.style)
    fireEvent.press(StudentButtonElement)
    // console.log(StudentButtonElement.props.style)
    const updatedStyle = {...styles.custView, ...styles.active, opacity : 1};
    // console.log(updatedStyle)
    expect(StudentButtonElement.props.style).toEqual(updatedStyle);
    fireEvent.press(InstructorButtonElement);
    expect(InstructorButtonElement.props.style).toEqual(updatedStyle);    
    fireEvent.press(RecButtonElement)
    expect(RecButtonElement.props.style).toEqual(updatedStyle)
  })
})