export class FancyMap<K, V> extends Map<K, V> {
  getOrSet(key: K, method: (key: K) => V): V {
    if (!this.has(key)) {
      this.set(key, method(key));
    }
    return this.get(key) as V;
  }
}
