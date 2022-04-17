/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { setTimeout } from 'timers/promises';
import { pool } from '../config/configDataBase/database';

const twoSeconds = 10_000;

export const login = async (req: Request, res: Response) => {
  const { email_usuarios, senha_usuarios, empresa } = req.body;

  try {
    const SQL = `INSERT INTO users ( email_usuarios, senha_usuarios, empresa )
    VALUES( $1, $2, $3 )`;
    const values = [email_usuarios, senha_usuarios, empresa];

    await setTimeout(twoSeconds);

    for (let i = 0; i < 4000; i += 1) {
      pool.query(SQL, values).then(() => {
        console.log('insert ok');
      });
    }

    return res.status(200).json({ messagem: 'insert ' });
  } catch (error) {
    console.log(error);
    return res.status(500).json('Internal Server error');
  }
};
