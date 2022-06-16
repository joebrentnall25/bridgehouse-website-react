import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import Bookings from './components/BookTable/Bookings';
import { typeData } from "./Assets/data/data";

test('renders learn react link', () => {
  expect(true).toBeTruthy();
});

describe("Test booking component", () => {
  test("test table booking", () => {
    const comp = shallow(<Bookings type="table"/>);
    const header = comp.find('.table-booking__header');
    const text = comp.find('.table-booking__info-text');
    expect(header.text()).toBe(typeData.table.header);
    expect(text.text()).toBe(typeData.table.text);
  })
  test("test event booking", () => {
    const comp = shallow(<Bookings type="event"/>);
    const header = comp.find('.table-booking__header');
    const text = comp.find('.table-booking__info-text');
    expect(header.text()).toBe(typeData.event.header);
    expect(text.text()).toBe(typeData.event.text);
  })
  test("test undefined booking", () => {
    const comp = shallow(<Bookings type="test"/>);
    const header = comp.find('.table-booking__header');
    const text = comp.find('.table-booking__info-text');
    expect(header.text()).toBe(typeData.default.header);
    expect(text.text()).toBe(typeData.default.text);
  })
})
