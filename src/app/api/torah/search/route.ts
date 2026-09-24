import { NextRequest, NextResponse } from 'next/server'
import { searchTorah } from '@/lib/torahData'

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q') ?? ''
  return NextResponse.json(searchTorah(q))
}
