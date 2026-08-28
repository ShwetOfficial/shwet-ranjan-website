import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Submit via FormSubmit AJAX endpoint straight to info@shwetranjan.com
    const res = await fetch("https://formsubmit.co/ajax/info@shwetranjan.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        _subject: `⚡ Website Inquiry from ${name} (${email})`,
        message: message,
        _template: "table",
        _captcha: "false",
      }),
    });

    const data = await res.json();

    if (res.ok && data.success !== "false") {
      return NextResponse.json({
        success: true,
        message: "Message dispatched directly to info@shwetranjan.com!",
      });
    }

    return NextResponse.json(
      { success: false, error: "Email gateway pending activation." },
      { status: 500 }
    );
  } catch (err) {
    console.error("Contact API dispatch error:", err);
    return NextResponse.json(
      { success: false, error: "Network error occurred." },
      { status: 500 }
    );
  }
}
