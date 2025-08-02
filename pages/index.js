export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api'); // Ganti ke domain kamu saat deploy
  const json = await res.json();

  return {
    props: {
      logs: json.logs?.filter((log) => log.method === 'POST') || [],
    },
  };
}

export default function Home({ logs }) {
  return (
    <div style={{
      fontFamily: "'Share Tech Mono', monospace",
      background: "linear-gradient(to right, #1f1c2c, #928dab)",
      color: "#fff",
      minHeight: "100vh",
      padding: "2rem",
      animation: "bgShift 15s ease infinite",
    }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

        @keyframes bgShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .log-entry {
          background: rgba(0, 0, 0, 0.3);
          border-left: 4px solid #ff79c6;
          margin: 1em 0;
          padding: 1em;
          border-radius: 8px;
          animation: fadeIn 0.8s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        h1 {
          text-align: center;
          font-size: 2em;
          margin-bottom: 0.5em;
          color: #ffe6f0;
        }

        pre {
          white-space: pre-wrap;
          margin: 0;
        }
      `}</style>

      <h1>📜 POST Logs - Jejepangan Style</h1>

      {logs.length === 0 ? (
        <p>Tidak ada log POST.</p>
      ) : (
        logs.map((log, idx) => (
          <div key={idx} className="log-entry">
            <pre>
{`Time: ${log.time}
IP: ${log.ip}
Agent: ${log.userAgent}
URL: ${log.url}`}
            </pre>
          </div>
        ))
      )}
    </div>
  );
}
