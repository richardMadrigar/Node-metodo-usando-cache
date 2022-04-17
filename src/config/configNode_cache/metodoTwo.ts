import NodeCache from 'node-cache';

const CACHE_LIMIT = 0.5; // 500ms
const dbCache = new NodeCache({ stdTTL: CACHE_LIMIT, checkperiod: 0.2 });

export const isHandleCache = (SQL: string) => {
  const result = dbCache.has(SQL);
  return result;
};

export const handleCacheGet = (SQL: string) => {
  const resultCacha = dbCache.get(SQL);
  return resultCacha;
};

export const handleCacheSet = (SQL: string, valueToCache?: unknown) => {
  console.log('set Cached');
  dbCache.set(SQL, valueToCache, CACHE_LIMIT);
};
