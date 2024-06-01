import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {MovieViewProps} from './types';
import {getImage} from './utils';

const MovieView: FC<MovieViewProps> = ({
  movieObject,
  index,
  numberOfColumns,
  viewWidth,
}) => {
  /**
   * @description Margin left
   * We need 1st element to have 30 left and right side as 15
   * so basically 0, 3, 6 which are 1st element of row will have left margin 30
   * @description Margin right
   * We need last element to have left side 15 and right as 30
   * so basically any number except 1st element 3,6,9 will have margin right 30
   * only 1st will have margin right 0
   */
  const marginLeft = index % numberOfColumns === 0 ? 30 : 15;
  const marginRight = (index + 1) % numberOfColumns === 0 ? 30 : 15;

  /**
   * @description
   * 30px gap of both left and right margin
   * 30px gap between 3 views which will be 2 gaps
   * total 30 * 4(numOfCol+1) divided by num of columns to get width for 1 box
   */
  const itemWidth = (viewWidth - (numberOfColumns + 1) * 30) / numberOfColumns;

  return (
    <View
      style={[{marginLeft, marginRight}, styles.mainView, {width: itemWidth}]}>
      <Image
        source={getImage(movieObject)}
        // assuming height as portrait so 1.5 more than width
        style={{height: itemWidth * 1.5, width: itemWidth}}
      />
      <Text style={[styles.movieName, {width: itemWidth}]} numberOfLines={1}>
        {movieObject.name}
      </Text>
    </View>
  );
};

export default MovieView;
