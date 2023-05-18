import React from "react";
import "react-native"
import renderer from "react-test-renderer"
import Profile from "../testingComponents/Profile";
import Adapter from "enzyme-adapter-react-16";
import {configure, shallow} from "enzyme"
configure({adapter : new Adapter()})


it("Testing...Props", () => {
    const wrapper = shallow(<Profile data="Hello" />).props()
    // console.log(wrapper.children.props.children)
    expect(wrapper.children.props.children).toBe("Hello")
})