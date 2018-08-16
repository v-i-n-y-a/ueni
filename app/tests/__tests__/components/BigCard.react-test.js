import React from 'react';
import BigCard from './../../../components/BigCard.jsx';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import businessJSON from './business.json';
import { MemoryRouter } from 'react-router'

describe('<BigCard item={business} />', () => {
  it('BigCard renders correctly', () => {
    const component = renderer.create(
      <MemoryRouter>
        <BigCard item={businessJSON} />
      </MemoryRouter>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
