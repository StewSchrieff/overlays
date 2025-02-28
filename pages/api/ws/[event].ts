import type { NextApiRequest } from "next"
import { NextApiResponseServerIO } from "../../../lib/server"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIO
) {
  const { event } = req.query
  if (!event) return res.status(400).end()

  const result = res.server.ws.emit(event as string, req.query)
  res.status(result ? 200 : 500).end()
}
