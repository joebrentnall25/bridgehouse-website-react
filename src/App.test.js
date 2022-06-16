import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import Bookings from './components/BookTable/Bookings';
import { typeData } from "./Assets/data/data";

import Areas from "./components/Areas/Areas";

describe("Test booking component", () => {
  test("test table booking", () => {
    const component = shallow(<Bookings type="table"/>);
    const header = component.find('.table-booking__header');
    const text = component.find('.table-booking__info-text');
    
    expect(header.text()).toBe(typeData.table.header);
    expect(text.text()).toBe(typeData.table.text);
  })
  test("test event booking", () => {
    const component = shallow(<Bookings type="event"/>);
    const header = component.find('.table-booking__header');
    const text = component.find('.table-booking__info-text');

    expect(header.text()).toBe(typeData.event.header);
    expect(text.text()).toBe(typeData.event.text);
  })
  test("test undefined booking", () => {
    const component = shallow(<Bookings type="test"/>);
    const header = component.find('.table-booking__header');
    const text = component.find('.table-booking__info-text');

    expect(header.text()).toBe(typeData.default.header);
    expect(text.text()).toBe(typeData.default.text);
  })
})

describe("Test areas component", () => {
  test("test areas has data", () => {
    const component = shallow(<Areas/>)
    const name = component.find(".areas__main-content-title");
    const description = component.find(".areas__main-content-para");
    const link = component.find(".areas__main-content-link");
    const imageLink = component.find(".areas__main-img");

    expect(name.text().length).toBeGreaterThan(0);
    expect(description.text().length).toBeGreaterThan(0);
    expect(link.text().length).toBeGreaterThan(0);
    expect(imageLink.text().length).toBeGreaterThan(0);
  })
})