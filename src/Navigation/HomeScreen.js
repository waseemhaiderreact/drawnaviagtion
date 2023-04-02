import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';
import Post from './Post';
import {
  Card,
  ListItem,
  Button,
  Icon,
  Image,
  Divider,
} from 'react-native-elements';
const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);

  const FetchMovie = () => {
    const url = 'http://192.168.0.102:8080/movie/all';
    axios.get(url).then(json => setData(json.data));
  };

  useEffect(() => {
    return () => {
      FetchMovie();
    };
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <Card>
              <Image
                source={{
                  uri: item.imageurl,
                }}
                style={styles.image}
                resizeMode="cover"
              />
              <Card.Title style={{marginTop: 5}}>
                CUTE SONG - Aroob Khan ft. Satvik | Rajat Nagpal | Vicky Sandhu
                | Punjabi Songs 2020 Watch
              </Card.Title>
            </Card>
          );
        }}
      />
    </View>
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

export default HomeScreen;
