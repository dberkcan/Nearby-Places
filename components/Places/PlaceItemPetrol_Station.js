import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {API_KEY} from '../../constants';
export default class PlaceItemPetrol_Station extends Component {
  onPress = () => {
    const {lat, lng} = this.props.item.geometry.location;
    const newRegion = {
      latitude: lat,
      longitude: lng,
      latitudeDelta:0.005,
      longitudeDelta:0.005
    }

    this.props.map.animateToRegion(newRegion, 100)
  }
  render() {
      const {photos} = this.props.item;
      let source;
      if (photos) {
          source ={uri:`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photos[0].photo_reference}&key=${API_KEY}`}
      }else{
          source = require('../../assets/no_image.jpg')
      }
    return (
      <TouchableOpacity
        onPress={this.onPress}
      >
        <View style={styles.itemContainer}>
          <Text numberOfLines={1} style={styles.text}>{this.props.item.name}</Text>
          <Image
              style={styles.photo}
              source={source}
          />
        </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
    itemContainer: {
        width:240,
        height:120,
        backgroundColor: '#fff',
    },
    photo: {
        width:'100%',
        height:120,
        position:'absolute',
        left:0,
        top:0
    },
    text: {
      padding: 5,
      backgroundColor:'#fff',
      position:'absolute',
      top:0,
      left:0,
      zIndex: 2
    }
})