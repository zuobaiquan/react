import request from './http';

export function getCarouselList() {
  return request({
    url: '/carousel.json',
    method: 'get',
  });
}