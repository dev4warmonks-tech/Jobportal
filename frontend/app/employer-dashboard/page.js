'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function EmployerDashboard() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Employer Dashboard</h1>
      <p>Welcome, {session?.user?.name}</p>
      <p>Your role is: {session?.user?.role}</p>
      <Link href="/employer-profile">View Profile</Link>
    </div>
  );
}