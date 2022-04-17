import NodeCache from 'node-cache';

const CACHE_LIMIT = 10; // 10s
const dbCache = new NodeCache({ stdTTL: CACHE_LIMIT, checkperiod: 0.2 });

const handleCacheGet = (SQL: string) => {
  if (!dbCache.has(SQL)) {
    return false;
  }
  return dbCache.get(SQL);
};

const handleCacheSet = (SQL: string, valueToCache: unknown) => {
  dbCache.set(SQL, valueToCache, CACHE_LIMIT);
};

export { handleCacheSet, handleCacheGet };
