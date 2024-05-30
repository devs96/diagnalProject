import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {imageSources} from '../../assets/images';
import Header from '../../components/Header';
import MovieView from '../../components/MovieView';
import {colors} from '../../theme/colors';
import {styles} from './index.styles';
import {ApiDataModal, MovieDataModal} from './types';

const Home = () => {
  const [movieData, setMovieData] = useState<MovieDataModal[]>([]);
  const [filteredData, setFilteredData] = useState<MovieDataModal[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

  useEffect(() => {
    const apiResponse = fetchData() as ApiDataModal;
    if (apiResponse) {
      setMovieData(prev => [
        ...prev,
        ...apiResponse.page['content-items'].content,
      ]);
      setFilteredData(prev => [
        ...prev,
        ...apiResponse.page['content-items'].content,
      ]);
    }
  }, [pageNumber]);

  const fetchData = () => {
    switch (pageNumber) {
      case 1:
        const data = require('../../api/CONTENTLISTINGPAGE-PAGE1.json');
        return data;
      case 2:
        const data2 = require('../../api/CONTENTLISTINGPAGE-PAGE2.json');
        return data2;
      case 3:
        const data3 = require('../../api/CONTENTLISTINGPAGE-PAGE3.json');
        return data3;
      default:
        return null;
    }
  };

  const onEndReached = () => {
    if (pageNumber <= 3 && !isSearchActive) {
      setPageNumber(prev => prev + 1);
    }
  };

  const onSearchPress = () => {
    setIsSearchActive(!isSearchActive);
    setFilteredData(movieData);
  };

  const onSearch = (text: string) => {
    if (text.length > 1) {
      const filtered = movieData.filter(val =>
        val.name.toLowerCase().includes(text.trim().toLowerCase()),
      );
      setFilteredData(filtered);
    } else if (text === '') {
      setFilteredData(movieData);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.black} />

      <Header
        onSearch={onSearch}
        isSearchActive={isSearchActive}
        onSearchPress={onSearchPress}
      />

      <Image source={imageSources.navBar} style={styles.navBarImg} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <FlatList
          data={filteredData}
          extraData={filteredData}
          numColumns={3}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return <MovieView movieObject={item} index={index} />;
          }}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.4}
          ListEmptyComponent={() => (
            <Text style={styles.noResultsText}>No results</Text>
          )}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Home;
