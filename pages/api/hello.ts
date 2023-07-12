import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * @swagger
 * /api/hello:
 *   get:
 *     summary: Say hello to the user
 *     operationId: sayHelloWorldUsingGET
 *     responses:
 *       200:
 *         description: Saying Hello World
 *         content:
 *          'application/json':
 *            schema:
 *              type: object
 *              properties:
 *                response:
 *                  type: 'string'
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({ message: "Hello world!" });
}

export default handler;
