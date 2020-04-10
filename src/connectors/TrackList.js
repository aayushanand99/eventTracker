import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {ListItem} from '../Components';

class TrackList extends Component {
  constructor(props) {
    super(props);
  }

  renderItem = ({item, index}) => {
    return <ListItem item={item} itemSelected={this.itemSelected} />;
  };

  itemSelected = item => {
    this.props.navigation.navigate('EventPage', {
      selectedItem: item,
      showTrackBtn: false,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Track List</Text>
        </View>
        <View style={styles.body}>
          <FlatList
            data={this.props.trackList}
            renderItem={this.renderItem}
            ItemSeparatorComponent={() => {
              return <View style={styles.separator} />;
            }}
            keyExtractor={item => item.name}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  body: {
    flex: 9,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#555',
  },
});
const mapStateToProps = state => {
  return {
    trackList: state.tracking,
  };
};
export default connect(mapStateToProps)(TrackList);
