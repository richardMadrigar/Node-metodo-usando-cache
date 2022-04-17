import { Request, Response } from 'express';
import { pool } from '../config/configDataBase/database';

export const semCache = async (req: Request, res: Response) => {
  try {
    const SQL = 'SELECT * FROM users';
    const { rowCount, rows } = await pool.query(SQL);
    console.log(rows);

    return res.status(200).json({ rowCount });
  } catch (error) {
    console.log(error);
    return res.status(500).json('Internal Server error');
  }
};
