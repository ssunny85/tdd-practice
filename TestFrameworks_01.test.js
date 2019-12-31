import { createReservation } from './TestFrameworks_01';

describe('createReservation(passenger, flight)', () => {
  test('주어진 passenger를 passengerInfo 프로퍼티에 할당한다.', () => {
    const testPassenger = {
      firstName: '선희',
      lastName: '박',
    };
    const testFlight = {
      number: '3443',
      carrier: '대한항공',
      destination: '울산',
    };
    expect(createReservation(testPassenger, testFlight)).toEqual({
      passengerInfo: testPassenger,
      flightInfo: testFlight
    });
  });


});
