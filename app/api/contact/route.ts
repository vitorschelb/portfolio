//export async function GET(request) {
//  return new Response("Hello!");
//}

export default function handler(req, res) {
  console.log(req.body);
  res.status(200).json({ name: "john doe" });
}
