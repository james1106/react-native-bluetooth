package com.sogilis.ReactNativeBluetooth.domain;

import android.bluetooth.BluetoothDevice;
import android.bluetooth.BluetoothGatt;

import static com.sogilis.ReactNativeBluetooth.domain.BluetoothHelpers.deviceId;

import java.util.concurrent.ConcurrentHashMap;

public class GattCollection {
    private ConcurrentHashMap<String, BluetoothGatt> gatts = new ConcurrentHashMap<>();

    public void add(BluetoothGatt gatt) {
        gatts.put(deviceId(gatt.getDevice()), gatt);
    }

    public void close(String deviceId) {
        BluetoothGatt gatt = gatts.remove(deviceId);
        gatt.close();
    }

    public BluetoothGatt get(String deviceId) throws BluetoothException {
        if (gatts.containsKey(deviceId)) {
            return gatts.get(deviceId);
        } else {
            throw new BluetoothException("Unknown or disconnected device: " + deviceId);
        }
    }

    public BluetoothGatt get(BluetoothDevice device) throws BluetoothException {
        return get(deviceId(device));
    }

    public void clear() {
        for (BluetoothGatt gatt: gatts.values()) {
            gatt.close();
        }
        gatts.clear();
    }
}
