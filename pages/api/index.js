let logs = [];

export default function handler(req, res) {
  const time = new Date().toISOString();
  const method = req.method;
  const userAgent = req.headers['user-agent'] || 'unknown';
  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  const url = req.url;

  const logEntry = { time, method, ip, userAgent, url };
  logs.push(logEntry);

  res.status(200).json({ logs });
}
