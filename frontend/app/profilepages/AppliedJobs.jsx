"use client";

export default function AppliedJobs() {
  // Example placeholder data for demonstration
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Tech Corp", status: "Applied" },
    { id: 2, title: "Backend Engineer", company: "Dev Solutions", status: "Interview Scheduled" },
    { id: 3, title: "Full Stack Developer", company: "Web Innovators", status: "Applied" },
  ];

  return (
    <div className="min-h-screen bg-[#E2F4FA] p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* <h2 className="text-2xl md:text-3xl font-bold mb-6">Applied Jobs</h2> */}

        {jobs.length === 0 ? (
          <p className="text-gray-600 text-center">You haven't applied for any jobs yet.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {jobs.map((job) => (
              <div
               key={job.id}
                className="w-full p-[12px] bg-[#E2F4FA] border border-gray-300 rounded-lg shadow-md flex"
              >
                <img
                  src="/images/oracle.jpg"
                  alt="Job"
                  className="w-[60px] h-[60px] object-cover rounded-md"
                />

                <div className="ml-4 flex flex-col md:flex-row justify-between">
                  <div>
                    <h4 className="font-semibold text-[18px] leading-[26px] font-['Poppins']">
                      {job.title}
                    </h4>
                    <p className="text-gray-600 text-[12px] leading-[26px]">
                      <span className="font-bold"> {job.company} </span>
                      Chennai, 25K-50K, Design, Full time
                    </p>
                  </div>

                  <div>
                    <p className="text-[12px] leading-[22px]">
                      <span>Chennai</span> · <span>5hr</span>
                    </p>
                    <div className="flex gap-[16px] mt-1">
                      <span className="bg-black text-[12px] leading-[22px] text-white rounded-full px-[16px] py-[8px]">
                        Python
                      </span>
                      <span className="bg-black text-[12px] leading-[22px] text-white rounded-full px-[16px] py-[8px]">
                        AWS
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
