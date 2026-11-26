
import { NextResponse } from "next/server";

export async function POST() {
    return NextResponse.json(
        {
            success: false,
            message: "Enquiry submissions are not available yet.",
        },
        {
            status: 503,
        }
    );
}
