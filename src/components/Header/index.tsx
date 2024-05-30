import React, {FC, useEffect, useRef, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {imageSources} from '../../assets/images';
import {colors} from '../../theme/colors';
import {styles} from './index.styles';
import {HeaderProps} from './types';

const Header: FC<HeaderProps> = ({onSearch, onSearchPress, isSearchActive}) => {
  const textInputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (isSearchActive) {
      textInputRef.current?.focus();
    }
  }, [isSearchActive]);

  return (
    <View style={styles.mainView}>
      {isSearchActive ? (
        <View style={styles.leftInnerView}>
          <TouchableOpacity onPress={onSearchPress}>
            <Image source={imageSources.back} style={styles.img} />
          </TouchableOpacity>
          <TextInput
            ref={textInputRef}
            placeholder="Enter search value"
            placeholderTextColor={colors.grey}
            style={styles.inputField}
            maxLength={20}
            onChangeText={onSearch}
          />
        </View>
      ) : (
        <Text style={styles.title}>Romantic Comedy</Text>
      )}

      {!isSearchActive && (
        <TouchableOpacity activeOpacity={0.6} onPress={onSearchPress}>
          <Image source={imageSources.search} style={styles.img} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
