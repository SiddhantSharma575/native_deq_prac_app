import "react-native";
import React from "react";
import Home from "../testingComponents/Home";
import renderer from "react-test-renderer"
import Users from "../testingComponents/Users"

// let findElement = function (tree, testid : string) {
//     // console.log(tree.children)
//     let result = undefined;
//     for(node in tree.children) {
//         if(tree.children[node].props.testID == testid) {
//             result = true;
//         }
//     }
//     return result;
// }


// it("find element", () => {
//     let tree = renderer.create(<Home />).toJSON();
//     expect(findElement(tree, "username")).toBeDefined()
// })
// it("Api test", async function() {
//     globalThis.fetch = jest.fn().mockImplementation(() => {
//         var p = new Promise((resolve,reject) => {
//             resolve({
//                 json : function() {
//                     return {Id : 1}
//                 }
//             })
//         })
//         return p;  
//     }) 

//     const response  = await Users.all();
//     expect(response.Id).toBe(1)
// })
