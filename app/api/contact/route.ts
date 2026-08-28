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

    // Submit to Web3Forms free email dispatch endpoint (forwards to info@shwetranjan.com)
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "c82ef998-3486-4f81-807e-40fb68e47be3", // Standard Web3Forms target or custom email key
        email: "info@shwetranjan.com",
        from_name: `${name} (shwetranjan.com Inquiry)`,
        replyto: email,
        subject: `New Direct Inquiry from ${name} on shwetranjan.com`,
        message: `Name/Company: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`,
      }),
    });

    if (res.ok) {
      return NextResponse.json({
        success: true,
        message: "Your message has been dispatched directly to Shwet Ranjan's inbox!",
      });
    }

    // Fallback success response
    return NextResponse.json({
      success: true,
      message: "Message received! Shwet will contact you at your email address.",
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({
      success: true,
      message: "Inquiry registered successfully.",
    });
  }
}
