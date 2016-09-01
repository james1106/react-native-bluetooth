const ReactNativeBluetooth = require('react-native').NativeModules.ReactNativeBluetooth;

module.exports = {
  // Single facade, only pass basic data (not objects with methods)
  // Return a subscription everywhere (almost)

  didEnable: function(cb) {},
  didDisable: function(cb) {},

  // opts: {serviceUUIDs, filterDuplicates}
  startScan: function(opts, cb) {}, // cb(error)

  stopScan: function(cb) {}, // cb(error)

  // Put everything we can retrieve in a simple device object
  didDiscoverDevice: function(cb) {}, // cb({deviceUuid: 12345})

  // Maintain a connId => Connection/GattClient/whatever mapping on each native side

  connect: function(dev, cb) {}, // cb({connId: 23456})

  disconnect: function(conn, cb=null) {}, // cb({deviceUuid: 12345})
  // Eventually automatically remove discoverServices subscription(s) on disconnect?

  discoverServices(connection, cb) {}, // cb({connId: 2345})
  discoverCharacteristics(connection, cb) {}, // cb({connId: 2345})
  readCharacteristicValue(char, cb) {}, // cb(value) or maybe passing the char again for reference
  writeCharacteristicValue(char, cb) {}, // cb(...)

  onCharacteristicNotify(cb) {}, // cb(newValue)
};
