import { NextRequest, NextResponse } from 'next/server'
import { searchTanaj } from '@/lib/tanajData'
import { TANAJ_ORDER, TANAJ_SLUG } from '@/lib/tanaj'

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q') ?? ''
  const hits = searchTanaj(q).map((h) => ({
    ...h,
    slug: TANAJ_SLUG[TANAJ_ORDER[h.bookIndex]],
  }))
  return NextResponse.json(hits)
}
