import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function(props) {
  let {item} = props;
  return (
    <TouchableOpacity
      style={styles.listItemContainer}
      onPress={() => props.itemSelected(item)}>
      <View style={styles.thumbnailContainer}>
        <Image
          source={{uri: 'https://picsum.photos/100'}}
          style={styles.thumbnailImage}
        />
      </View>
      <View style={styles.itemContentContainer}>
        <Text style={styles.contentText}>{`Event Name:${item.name}`}</Text>
        <Text style={styles.contentText}>{`Venue:${item.venue}`}</Text>
        <Text style={styles.contentText}>
          {item.paid ? 'Paid Event' : 'Free Event'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  listItemContainer: {
    flex: 1,
    height: 110,
    backgroundColor: '#F4F7FC',
    padding: 5,
    flexDirection: 'row',
  },

  thumbnailImage: {
    flex: 1,
  },
  thumbnailContainer: {
    flex: 1,
  },

  itemContentContainer: {
    flex: 3,
    paddingLeft: 5,
  },

  contentText: {
    fontSize: 20,
    fontWeight: '300',
    marginTop: 5,
  },
});
