import * as React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {trackEvent, unTrackEvent} from '../action/trackEvent';
import {connect} from 'react-redux';
class EventPage extends React.Component {
  constructor(props) {
    super(props);
  }

  trackEvent = () => {
    let {showTrackBtn} = this.props.route.params;
    if (showTrackBtn) {
      this.props.dispatch(
        trackEvent({item: this.props.route.params.selectedItem}),
      );
    } else {
      this.props.dispatch(
        unTrackEvent({item: this.props.route.params.selectedItem}),
      );
    }
  };

  render() {
    let {selectedItem, showTrackBtn} = this.props.route.params;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.label}>Event Page</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: 'https://picsum.photos/500/600'}}
            style={styles.container}
          />
        </View>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.label}>{`Event Name:${
              selectedItem.name
            }`}</Text>
            <Text style={styles.label}>{`Venue:${selectedItem.venue}`}</Text>
            <Text style={styles.label}>
              {selectedItem.paid ? 'Paid Event' : 'Free Event'}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.trackButton}
            onPress={this.trackEvent}>
            <Text style={styles.label}>
              {showTrackBtn ? 'TRACK' : 'UNTRACK'}
            </Text>
          </TouchableOpacity>
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
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 7,
  },
  contentContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: '700',
  },
  trackButton: {
    width: '80%',
    backgroundColor: '#89CFF0',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
export default connect()(EventPage);
