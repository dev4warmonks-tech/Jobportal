"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function AppliedJobs() {
  const { data: session } = useSession();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      if (session?.user?.id) {
        try {
          const response = await fetch(`https://api.mindssparsh.com/api/applications/user/${session.user.id}`);
          if (response.ok) {
            const data = await response.json();
            setApplications(data);
          } else {
            console.error("Failed to fetch applications");
            setError("Failed to load applications.");
          }
        } catch (err) {
          console.error("Error fetching applications:", err);
          setError("Failed to load applications.");
        } finally {
          setLoading(false);
        }
      } else if (session === null) {
        setLoading(false); // Session finished loading and no user
      }
    };

    fetchApplications();
  }, [session]);

  if (loading) {
    return <div className="text-center p-4">Loading applications...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-[#E2F4FA] p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* <h2 className="text-2xl md:text-3xl font-bold mb-6">Applied Jobs</h2> */}

        {applications.length === 0 ? (
          <p className="text-gray-600 text-center">You haven't applied for any jobs yet.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {applications.map((app) => (
              <div
                key={app._id}
                className="w-full p-[12px] bg-[#E2F4FA] border border-gray-300 rounded-lg shadow-md flex"
              >
                <img
                  src={app.jobId?.companyLogo ? `https://api.mindssparsh.com${app.jobId.companyLogo}` : "/images/oracle.jpg"}
                  alt="Job"
                  className="w-[60px] h-[60px] object-cover rounded-md"
                  onError={(e) => { e.target.src = "/images/oracle.jpg" }}
                />

                <div className="ml-4 flex flex-col md:flex-row justify-between text-black w-full">
                  <div>
                    <h4 className="font-semibold text-[18px] leading-[26px] font-['Poppins']">
                      {app.jobId?.jobTitle || "Job Title Not Available"}
                    </h4>
                    <p className="text-gray-600 text-[12px] leading-[26px]">
                      <span className="font-bold"> {app.jobId?.companyName || "Company"} </span>
                      {Array.isArray(app.jobId?.location) ? app.jobId.location.join(", ") : app.jobId?.location || "Location"}, {app.jobId?.salaryRange?.min}-{app.jobId?.salaryRange?.max}, {app.jobId?.jobType}
                    </p>
                  </div>

                  <div className="md:text-right mt-2 md:mt-0">
                    <p className="text-[12px] leading-[22px]">
                      <span>{new Date(app.appliedAt).toLocaleDateString()}</span>
                    </p>
                    <div className="flex gap-[16px] mt-1 md:justify-end">
                      <span className={`text-[12px] leading-[22px] text-white rounded-full px-[16px] py-[8px] capitalize ${app.status === 'accepted' ? 'bg-green-500' :
                        app.status === 'rejected' ? 'bg-red-500' :
                          'bg-blue-500'
                        }`}>
                        {app.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
