import React from 'react';
import {StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {useState} from 'react';
import {
  Card,
  ListItem,
  Button,
  Icon,
  Image,
  Divider,
} from 'react-native-elements';

const Search = () => {
  const [search, updateSearch] = useState('');
  return (
    <Card>
      <Image
        source={{uri: 'https://i.ytimg.com/vi/Oozz4APJpiM/maxresdefault.jpg'}}
        style={styles.image}
        resizeMode="cover"
      />
      <Card.Title style={{marginTop: 5}}>
        CUTE SONG - Aroob Khan ft. Satvik | Rajat Nagpal | Vicky Sandhu |
        Punjabi Songs 2020 Watch
      </Card.Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 250,
  },
  text: {
    fontSize: 50,
    color: 'black',
    margin: 10,
    justifyContent: 'center',
    alignContent: 'center',
    textAlignVertical: 'center',
  },
});

export default Search;
