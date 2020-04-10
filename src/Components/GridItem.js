import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
export default function(props) {
  let {item} = props;
  return (
    <TouchableOpacity
      style={styles.listItemContainerGrid}
      onPress={() => props.itemSelected(item)}>
      <View style={styles.thumbnailContainerGrid}>
        <Image
          source={{uri: 'https://picsum.photos/100'}}
          style={styles.thumbnailImage}
        />
      </View>
      <View style={styles.itemContentContainerGrid}>
        <Text style={styles.contentTextGrid}>{`${item.name}`}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  listItemContainerGrid: {
    padding: 5,
    flexDirection: 'column',
    height: 200,
    width: windowWidth / 3,
    borderWidth: 0.5,
    borderColor: '#555',
  },

  thumbnailImage: {
    flex: 1,
  },

  thumbnailContainerGrid: {
    flex: 4,
  },

  itemContentContainerGrid: {
    flex: 1,
    padding: 5,
  },

  contentTextGrid: {
    fontSize: 15,
    width: '100%',
    height: '100%',
    fontWeight: '300',
    marginTop: 5,
  },
});
