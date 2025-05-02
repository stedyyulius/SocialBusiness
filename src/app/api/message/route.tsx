export async function GET(request: Request) {
    try {  
      const searchParams = new URLSearchParams(request.url);
      const mode = searchParams.get("hub.mode");
      const token = searchParams.get("hub.verify_token");
      const challenge = searchParams.get("hub.challenge");
      const VERIFY_TOKEN = process.env.META_TOKEN;

      console.log(challenge)

      if (mode !== "subscribe" || token !== VERIFY_TOKEN) {
        throw new Error("Unauthorized")
      }

       return new Response(challenge,
        {
          status: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        },
      );

    } catch (error: unknown) {
      console.log(error);
      return new Response(
        JSON.stringify(error),
        {
          status: 403,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        },
      );
    }
  }
  
  export async function POST(request: Request) {
    try {
      const message = await request.json();
  
      return new Response(
        JSON.stringify({
          data: message,
        }),
        {
          status: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        },
      );
    } catch (error: unknown) {
      console.log(error);
      return new Response(
        JSON.stringify(error),
        {
          status: 400,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        },
      );
    }
  }
  