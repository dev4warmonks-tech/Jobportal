
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { NextResponse } from "next/server"

export async function GET(request) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'candidate') {
    return new NextResponse(JSON.stringify({ error: 'unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // In a real application, you would fetch candidate-specific data from a database here.
  const candidateData = {
    appliedJobs: 12,
    profileViews: 8,
    savedJobs: 3,
  };

  return NextResponse.json(candidateData)
}
