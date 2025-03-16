import { redirect } from "next/navigation";

export async function GET() {
    redirect(process.env.LIVESTREAM_URL || "");
}
