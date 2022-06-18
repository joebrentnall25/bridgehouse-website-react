import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import Bookings from './components/BookTable/Bookings';
import { typeData } from "./Assets/data/data";

import Areas from "./components/Areas/Areas";
import Reviews from "./components/Reviews/Reviews";

import About from "./containers/About/About";
import Home from './containers/Home/Home';
import Routing from './containers/Routing/Routing';
import Menu from './containers/Menu/Menu';
import Contact from './containers/Contact/Contact';
import Button from './components/Buttons/Button';

describe("Test app renders without crash", () => {
  test("test app loads", () => {
    shallow(<App/>)
  })
  test("test contact loads", () => {
    shallow(<Contact/>)
  })
  test("test home loads", () => {
    shallow(<Home/>)
  })
  test("test menu loads", () => {
    shallow(<Menu/>)
  })
  test("test routing loads", () => {
    shallow(<Routing/>)
  })
  test("test about loads", () => {
    shallow(<About/>)
  })
})

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
  test("test invalid booking", () => {
    const component = shallow(<Bookings type="test"/>);
    const header = component.find('.table-booking__header');
    const text = component.find('.table-booking__info-text');

    expect(header.text().length).toEqual(0);
    expect(text.text().length).toEqual(0);
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

describe("Test reviews component", () => {
  test("test reviews has data", () => {
    const component = shallow(<Reviews/>);
    const reviewName = component.find(".reviews__name");
    const reviewText = component.find(".reviews__para");
    expect(reviewName.text().length).toBeGreaterThan(0);
    expect(reviewText.text().length).toBeGreaterThan(0);
  })
})

describe("Test buttons component", () => {
  test.skip("test primary button", () => {
    const component = shallow(<Button/>);
  })
})

