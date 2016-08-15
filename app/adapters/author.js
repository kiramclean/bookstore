import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  shouldReloadRecord(store, snapshot) {
    return false
  },
  shouldBackgroundReloadRecord(store, snapshot) {
    const loadedAt = snapshot.record.get('loadedAt')

    if (Date.now() - loadedAt > 3600000) {
      return true
    } else {
      return false
    }
  }
});
