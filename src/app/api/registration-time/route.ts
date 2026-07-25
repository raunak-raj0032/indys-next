import { registrationOpenAtIso, registrationOpenAtMs } from "@/lib/registration";

export const dynamic = "force-dynamic";

export function GET() {
  const serverTimeMs = Date.now();

  return Response.json(
    {
      serverTimeIso: new Date(serverTimeMs).toISOString(),
      serverTimeMs,
      registrationOpenAtIso,
      registrationOpenAtMs,
    },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    },
  );
}
