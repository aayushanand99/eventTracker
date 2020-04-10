import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Switch} from 'react-native';
import EventData from '../config/data';
import ListItem from './ListItem';
import GridItem from './GridItem';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {isGrid: false};
  }

  renderListItem = ({item, index}) => {
    if (this.state.isGrid === false) {
      return <ListItem item={item} itemSelected={this.itemSelected} />;
    } else {
      return <GridItem item={item} itemSelected={this.itemSelected} />;
    }
  };

  toggleSwitch = () => {
    this.setState({isGrid: !this.state.isGrid});
  };

  itemSelected = item => {
    this.props.navigation.push('EventPage', {
      selectedItem: item,
      showTrackBtn: true,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Event List</Text>
          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>Grid</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={this.state.isGrid ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={this.toggleSwitch}
              value={this.state.isGrid}
            />
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
            data={EventData}
            key={this.state.isGrid ? 'g' : 'l'}
            renderItem={this.renderListItem}
            numColumns={this.state.isGrid ? 3 : 1}
            ItemSeparatorComponent={() => {
              return this.state.isGrid ? (
                <View />
              ) : (
                <View style={styles.separator} />
              );
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
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
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
  switchLabel: {
    fontSize: 20,
    fontWeight: '300',
    marginRight: 10,
  },
  switchContainer: {flexDirection: 'row', alignItems: 'center'},
});
