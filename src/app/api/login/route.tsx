export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (email !== "abc@gmail.com" && password !== "abc1234") {
      throw new Error("Incorrect email or password");
    }

    return new Response(
      JSON.stringify({
        message: "login success",
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
      JSON.stringify({
        message: "Incorrect email or password",
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
