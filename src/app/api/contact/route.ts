import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string" ||
    !body.name.trim() ||
    !body.email.trim() ||
    !body.message.trim()
  ) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const scriptUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (scriptUrl) {
    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        message: body.message,
      }),
    });

    if (!res.ok) {
      console.error("Google Sheets webhook error:", res.status, await res.text().catch(() => ""));
      return NextResponse.json({ error: "Webhook failed" }, { status: 502 });
    }
  } else {
    console.log("Nuevo mensaje de contacto (sin webhook configurado):", {
      name: body.name,
      email: body.email,
      message: body.message,
    });
  }

  return NextResponse.json({ ok: true });
}
