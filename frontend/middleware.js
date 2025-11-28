import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    if (req.nextUrl.pathname.startsWith('/admin-dashboard') && req.nextauth.token.role !== 'super admin') {
      return NextResponse.redirect(new URL('/', req.url));
    }
    if (req.nextUrl.pathname.startsWith('/employer') && req.nextauth.token.role !== 'employer') {
      return NextResponse.redirect(new URL('/', req.url));
    }
    if (req.nextUrl.pathname.startsWith('/candidate-dashboard') && req.nextauth.token.role !== 'candidate') {
      return NextResponse.redirect(new URL('/', req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ['/admin-dashboard', '/employer-dashboard', '/candidate-dashboard'] };