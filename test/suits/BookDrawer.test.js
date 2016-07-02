import expect from "expect";
import React from "react";
import RelayMock from "../util/RelayMock";
import bookDrawerInjector from "inject!app/js/components/BookDrawer";
import {shallow} from "enzyme";

const BookDrawer = bookDrawerInjector({"react-relay": RelayMock}).default;

let component;

describe("<BookDrawer />", () => {
    beforeEach(() => {
        const props = {};
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
