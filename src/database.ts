import { Request, Response } from 'express';
import { createConnection } from 'mysql2';

export default {
  async create(req: Request, res: Response) {
    const mysql = createConnection({
      host: 'localhost',
      port: 3306,
      database: '',
      user: '',
      password: '',
    });

    mysql.connect((err) => console.log(err));

    mysql.query('SELECT * FROM sales', (error, results, fields) => {
      if (error) {
        throw error;
      }

      return res.json(results);
    });

    mysql.end();
  }
};
