import { Request, Response } from 'express';
import getClient from './config';

export default {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const client = getClient();

      const result = await Promise.all(
        Array.from({ length: 5000 }).map((v, i) => client.index({
          index: 'elastic_test',
          type: 'type_elastic_test',
          body: {
            id: i,
            user: `Rodrigo-${i}`,
            password: `123456-${i}`,
            email: `rodrigo@${i}.com.br`
          }
        }))
      );

      return res.json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const client = getClient();

      const result = await client.search({
        index: 'elastic_test',
        size: 5001
      });

      return res.json(result.hits.hits);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const client = getClient();

      Array.from({ length: 5000 }).map((v, i) => console.log(i));

      const result = await client.search({
        index: 'elastic_test',
        q: `id:${id}`
      });

      return res.json(result.hits.hits);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async findByQuery(req: Request, res: Response): Promise<Response> {
    try {
      const { email } = req.params;

      const client = getClient();

      Array.from({ length: 5000 }).map((v, i) => console.log(i));

      const result = await client.search({
        index: 'elastic_test',
        body: {
          query: {
            match: {
              'email.keyword': email // Query da palavra exata
              // email: email // query tipo LIKE do sql
            }
          }
        }
      });

      return res.json(result.hits.hits);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
