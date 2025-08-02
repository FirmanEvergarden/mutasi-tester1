let data = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ data });
  }

  if (req.method === 'POST') {
    const { sender, amount, wallet, date, time: postTime } = req.body || {};

    if (!sender || !amount || !wallet || !date || !postTime) {
      return res.status(400).json({ error: 'Missing fields in body' });
    }

    const entry = { sender, amount, wallet, date, time: postTime };
    data.push(entry);

    return res.status(200).json({
      message: 'Data stored successfully',
      received: entry
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
