import expect from "expect";
import React from "react";
import {shallow} from "enzyme";
import Header from "app/js/components/Header";

let component;
describe("<Header />", () => {
    beforeEach(() => {
        const props = {};
        component = shallow(<Header {...props}/>);
    });

    it("Component should rendered as div", () => {
        expect(component.type()).toBe("div");
    });

    it("Component's should rendered with a header with text 'Book Store'", () => {
        expect(component.find("h1").text()).toBe("Book Store");
    });

    it("Component's button should open Drawer to add Book", () => {
        const spy = expect.createSpy();
        component.setProps({openBookDrawer: spy});
        component.find("button").simulate("click");
        expect(spy.calls.length).toBe(1);
        spy.restore();
    });
});
