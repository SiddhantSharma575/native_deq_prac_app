import "react-native";
import React from "react";
import FirstTest from "../testingComponents/FirstTest";
import renderer from "react-test-renderer"
import {render, screen} from "@testing-library/react-native"

describe("First Test Element Check", () => {
    it("Should display the passsed in name", async () => {
        render(<FirstTest />);
        // expect(screen.getByText("Test Text Element")).toBeVisible()
        // const Element  = await screen.findByTestId("sample");
        // console.log(Element)
        // expect(Element).toEqual("Test Text Element");
    })
})