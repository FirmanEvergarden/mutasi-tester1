let data = []; // Penyimpanan sementara (di-reset setiap restart)

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { sender, amount, wallet, date, time } = req.body;

    if (!sender || !amount) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const entry = { sender, amount, wallet, date, time };
    data.push(entry);
    return res.status(200).json({ message: 'Data received', entry });
  }

  if (req.method === 'GET') {
    return res.status(200).json({ data });
  }

  return res.status(405).end(); // Method Not Allowed
}
