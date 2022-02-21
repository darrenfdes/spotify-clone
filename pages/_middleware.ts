import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

const dev = process.env.NODE_ENV !== 'production'

export const server = dev
  ? 'http://localhost:3000'
  : 'https://your_deployment.server.com' //change this

export async function middleware(req: any) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET })

  const { pathname } = req.nextUrl

  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next()
  }

  if (!token && pathname !== '/login') {
    return NextResponse.redirect('/login')
  }
}
