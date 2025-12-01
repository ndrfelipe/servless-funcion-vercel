export default function handler(request, response) {
  const date = new Date().toISOString();

  response.status(200).json({
    status: "Online",
    provider: "Vercel Functions",
    message: "Serverless function está rodando!",
    timestamp: date
  });
}