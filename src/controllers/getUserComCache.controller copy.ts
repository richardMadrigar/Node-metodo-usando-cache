import { Request, Response } from 'express';
import { pool } from '../config/configDataBase/database';
import { handleCacheGet, handleCacheSet } from '../config/configNode_cache/configCache';

export const getEmail = async (req: Request, res: Response) => {
  const SQL = 'SELECT email_usuarios FROM users';

  try {
    if (handleCacheGet(SQL)) {
      const result = handleCacheGet(SQL);
      return res.status(201).json(result);
    }

    const { rowCount } = await pool.query(SQL);
    handleCacheSet(SQL, rowCount);

    return res.status(200).json(rowCount);
  } catch (error) {
    console.log(error);
    return res.status(500).json('Internal Server error');
  }
};
