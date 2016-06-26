import expect from "expect";
import React from "react";
import RelayMock from "../util/RelayMock";
import bookInjector from "inject!app/js/components/Book";
import {shallow} from "enzyme";

const Book = bookInjector({"react-relay": RelayMock}).default;

let component;

describe("<Book />", () => {
    beforeEach(() => {
        const props = {
            index: 1,
            book: {
                id: "1",
                title: "Sample book title"
            }
        };
        component = shallow(<Book {...props}/>);
    });

    it("Book should rendered as tr", () => {
        expect(component.find("tr").length).toBe(1);
    });

    it("Book should rendered with 3 columns", () => {
        expect(component.find("td").length).toBe(3);
    });
});
