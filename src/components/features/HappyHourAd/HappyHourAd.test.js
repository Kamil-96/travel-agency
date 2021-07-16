import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';
import {checkDescriptionAtTime, checkDescriptionAfterTime, select, mockProps} from './HappyHourAd.int.test';

beforeAll(() => {
  const utilsModule = jest.requireActual('../../../utils/formatTime.js');
  utilsModule.formatTime = jest.fn(seconds => seconds);
});

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it('should render heading and description', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });

  it('should render correct title', () => {
    const expectedTitle = mockProps.title;
    const component = shallow(<HappyHourAd {...mockProps} />);
    expect(component.find(select.title).text()).toEqual(expectedTitle);
  });
});

describe('Component HappyHourAd with mocked description', () => {
  checkDescriptionAtTime('12:00:00', mockProps.promoDescription);
  checkDescriptionAtTime('12:12:37', mockProps.promoDescription);
  checkDescriptionAtTime('12:59:59', mockProps.promoDescription);
});

describe('Component HappyHourAd with mocked description and delay', () => {
  checkDescriptionAfterTime('11:59:58', 2, mockProps.promoDescription);
  checkDescriptionAfterTime('11:58:36', 1500, mockProps.promoDescription);
  checkDescriptionAfterTime('11:59:59', 3600, mockProps.promoDescription);
});
