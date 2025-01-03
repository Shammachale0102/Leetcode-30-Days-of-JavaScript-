/*Cache With Time Limit:

Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key. */
class TimeLimitedCache {
    constructor() {
        this.cache = new Map(); 

    }

    set(key, value, duration) {
        const currentTime = Date.now();

        if (this.cache.has(key)) {
            const existing = this.cache.get(key);
            if (currentTime < existing.expiration) {
                this.cache.set(key, { value, expiration: currentTime + duration });
                return true; 
            }
        }

       
        this.cache.set(key, { value, expiration: currentTime + duration });
        return false; 
    }

    get(key) {
        const currentTime = Date.now();

        if (this.cache.has(key)) {
            const { value, expiration } = this.cache.get(key);
            if (currentTime < expiration) {
                return value; 
            } else {
                this.cache.delete(key); 
            }
        }

        return -1; 
    }

    count() {
        const currentTime = Date.now();
        let count = 0;

        for (const [key, { expiration }] of this.cache) {
            if (currentTime < expiration) {
                count++;
            } else {
                this.cache.delete(key); 
            }
        }

        return count;
    }
}
