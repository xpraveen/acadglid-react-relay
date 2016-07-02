import expect from "expect";
import React from "react";
import RelayMock from "../util/RelayMock";
import bookDrawerInjector from "inject!app/js/components/BookDrawer";
import {shallow} from "enzyme";

let component;

describe("<BookDrawer />", () => {

    describe("Componnet Render Tests", () => {
        beforeEach(() => {
            const BookDrawer = bookDrawerInjector({"react-relay": RelayMock}).default;
            const props = {
                bookStore: {}
            };
            component = shallow(<BookDrawer {...props}/>);
        });

        it("component should rendered as div with proper class", () => {
            expect(component.find("div.book-drawer").length).toBe(1);
        });

        it("component should conatin input for Book name", () => {
            expect(component.find("input[type='text']").length).toBe(1);
        });

        it("component should render with a button to close Drawer", () => {
            expect(component.find("button[type='button']").length).toBe(1);
        });

        it("component should render with a submit button to save Book", () => {
            expect(component.find("button[type='submit']").length).toBe(1);
        });
    });

    describe("Component Mutations Tests", () => {
        beforeEach(() => {

            RelayMock.Store.succeedWith({});
            const BookDrawer = bookDrawerInjector({"react-relay": RelayMock}).default;
            const props = {
                bookStore: {}
            };
            component = shallow(<BookDrawer {...props}/>);
        });

        it("Mutation test", () => {
            const componentObj = component.instance();
            componentObj.title = {
                value: "Test Book"
            };
            const spy = expect.spyOn(component.instance(), "onSuccess");
            component.find("form").simulate("submit");
            expect(spy).toHaveBeenCalled();
            spy.reset();
        });

    });

});
