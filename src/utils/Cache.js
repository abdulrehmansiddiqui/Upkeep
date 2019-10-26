import { Platform } from 'react-native';

export class Cache {

    static sessionData = new Map();

    static getSessionValue(key) {
        if (Cache.sessionData.has(key))
            return Cache.sessionData.get(key);
        return null;
    }

    static setSessionValue(key, value) {
        Cache.sessionData.set(key, value);
    }

    static clearSession() {


        Cache.sessionData.clear();

    }
}
