export default function tracking(state = [], action) {
  switch (action.type) {
    case 'TRACKEVENT':
      if (state.indexOf(action.item) === -1) {
        state.push(action.item);
      }
      return [...state];
    case 'UNTRACKEVENT':
      let index = state.indexOf(action.item);
      state.splice(index, 1);
      return [...state];
    default:
      return state;
  }
}
