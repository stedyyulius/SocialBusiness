export async function GET(request: Request) {
  try {
    const searchParams = new URLSearchParams(request.url);
    const signed_request = searchParams.get("signed_request");

    return new Response(
      JSON.stringify({
        url: "https://social-business-xi.vercel.app/dataDeletion",
        confirmation_code: signed_request || "demo_confirmation_code",
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
  }
}
