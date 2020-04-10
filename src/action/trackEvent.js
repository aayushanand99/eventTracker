export const trackEvent = ({item}) => {
  return {
    type: 'TRACKEVENT',
    item: item,
  };
};

export const unTrackEvent = ({item}) => {
  return {
    type: 'UNTRACKEVENT',
    item: item,
  };
};
