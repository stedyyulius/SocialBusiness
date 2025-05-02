export async function POST(request: Request) {
    try {
      const json = await request.json();


      return new Response(
        JSON.stringify(json),
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
        JSON.stringify({
          message: error,
        }),
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
  