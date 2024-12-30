// 79.
// It is a program to implement Least Recently Used (LRU) concept. 
// Given a key, if it isalready existed then it should be marked as recently used otherwise a value should be stored which is given as input and marked as recently used. 
// The capacity is to store only 10 key,value pairs. 
// If the table is full and given a new key; the key, value pair which is not recentlyused should be deleted which gives feasibility to store the new key, value pair.

class LRUCache {
    constructor (capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) return -1;
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) this.cache.delete(key);
        else if (this.cache.size >= this.capacity) {
            const LRUKey = this.cache.keys().next().value;
            this.cache.delete(LRUKey);
        }
        this.cache.set(key, value);
    }

    display() {
        console.log("Cache contents:", [...this.cache.entries()]);
    }
}

const lru = new LRUCache(10);

lru.put(1, "A");
lru.put(2, "B");
lru.put(3, "C");
lru.put(4, "D");
lru.put(5, "E");
lru.put(6, "F");
lru.put(7, "G");
lru.put(8, "H");
lru.put(9, "I");
lru.put(10, "J");

console.log("Access key 1: ", lru.get(1));
console.log("Access key 5: ", lru.get(5));

lru.put(11, "K");

lru.display();