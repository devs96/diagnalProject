import {imageSources} from '../../assets/images';
import {MovieDataModal} from '../../screens/home/types';

export const getImage = (movieObject: MovieDataModal) => {
  switch (movieObject['poster-image']) {
    case 'poster1.jpg':
      return imageSources.poster1;

    case 'poster2.jpg':
      return imageSources.poster2;

    case 'poster3.jpg':
      return imageSources.poster3;

    case 'poster4.jpg':
      return imageSources.poster4;

    case 'poster5.jpg':
      return imageSources.poster5;

    case 'poster6.jpg':
      return imageSources.poster6;

    case 'poster7.jpg':
      return imageSources.poster7;

    case 'poster8.jpg':
      return imageSources.poster8;

    case 'poster9.jpg':
      return imageSources.poster9;

    case 'posterthatismissing.jpg':
    default:
      return imageSources.placeholder;
  }
};
