import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct link', () => {
    const expectedLink = '/trip/abc';
    const exampleId = 'abc';
    const component = shallow(<TripSummary id={exampleId} tags={[]} image={''} name={''} cost={''} days={0} />);
    const renderedLink = component.find('.link').prop('to');
    expect(renderedLink).toEqual(expectedLink);
  });

  it('should render correct img properties', () => {
    const expectedImage = 'image.jpg';
    const expectedImageText = 'text';
    const component = shallow(<TripSummary image={expectedImage}  name={expectedImageText} tags={[]} id={''} cost={''} days={0} />);
    const renderedImage = component.find('img').prop('src');
    const renderedImageText = component.find('img').prop('alt');
    expect(renderedImage).toEqual(expectedImage);
    expect(renderedImageText).toEqual(expectedImageText);
  });

  it('should render props without crushing', () => {
    const component = shallow(<TripSummary name={'Magic Congo'} cost={'$15,000'} days={14} tags={[]} id={''} image={''} />);
    expect(component).toBeTruthy();
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary id={''} tags={[]} image={''} cost={''} days={0} />)).toThrow();
  });

  it('should render an array', () => {
    const component = shallow(<TripSummary tags={['abc', 'def', 'xyz']} name={''} cost={''} days={0} id={''} image={''} />);
    expect(component.find('.tags span').at(0).text()).toEqual('abc');
    expect(component.find('.tags span').at(1).text()).toEqual('def');
    expect(component.find('.tags span').at(2).text()).toEqual('xyz');
  });

  it('should not render div if tags is false', () => {
    const component = shallow(<TripSummary tags={['abc', 'def', 'xyz']} name={''} cost={''} days={0} id={''} image={''} />);
    expect(component.hasClass('tags')).toBe(false);
  });
});
