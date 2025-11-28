'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CandidateDashboard() {
  const { data: session } = useSession();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/candidate-dashboard');
        if (res.ok) {
          const data = await res.json();
          setDashboardData(data);
        }
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      }
      setLoading(false);
    };

    if (session) {
      fetchData();
    }
  }, [session]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Candidate Dashboard</h1>
      <p className="text-lg mb-6">Welcome, {session?.user?.name}</p>

      {loading ? (
        <p>Loading dashboard...</p>
      ) : dashboardData ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Applied Jobs</h2>
            <p className="text-3xl font-bold">{dashboardData.appliedJobs}</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Profile Views</h2>
            <p className="text-3xl font-bold">{dashboardData.profileViews}</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Saved Jobs</h2>
            <p className="text-3xl font-bold">{dashboardData.savedJobs}</p>
          </div>
        </div>
      ) : (
        <p>Could not load dashboard data.</p>
      )}

      <div className="mt-8">
        <Link href="/candidate-profile" className="text-blue-500 hover:underline">
          View Profile
        </Link>
      </div>
    </div>
  );
}
