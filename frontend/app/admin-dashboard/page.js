'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function AdminDashboard() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {session?.user?.name}</p>
      <p>Your role is: {session?.user?.role}</p>
      <Link href="/admin/users">View All Users</Link>
    </div>
  );
}