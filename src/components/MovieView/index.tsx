import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {MovieViewProps} from './types';
import {getImage} from './utils';

const MovieView: FC<MovieViewProps> = ({movieObject, index}) => {
  /**
   * @description Margin left
   * We need 1st element to have 30 left and right side as 15
   * so basically 0, 3, 6 which are 1st element of row will have left margin 30
   * @description Margin right
   * We need last element to have left side 15 and right as 30
   * so basically any number except 1st element 3,6,9 will have margin right 30
   * only 1st will have margin right 0
   */
  const marginLeft = index % 3 === 0 ? 30 : 15;
  const marginRight = (index + 1) % 3 === 0 ? 30 : 15;

  return (
    <View style={[{marginLeft, marginRight}, styles.mainView]}>
      <Image source={getImage(movieObject)} style={styles.imageView} />
      <Text style={styles.movieName} numberOfLines={1}>
        {movieObject.name}
      </Text>
    </View>
  );
};

export default MovieView;
