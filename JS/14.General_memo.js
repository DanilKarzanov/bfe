function memo(func, resolver) {
    const cache = new Map()
  
    return function(...args) {
      const cacheKey = resolver ? resolver(...args) : [...args].join('_') 
      
      if (!cache.has(cacheKey)) {
        cache.set(cacheKey, func.apply(this, args))
      }
  
      return cache.get(cacheKey)
    }
}