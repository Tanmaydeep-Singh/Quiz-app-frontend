import React, { useEffect, useState } from "react";

// Define the structure of recent activity data
interface RecentActivity {
  title: string;
  score: number;
  attemptedAt: string;
}

function RecentActivitySection() {
  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const token = `Bearer ${localStorage.getItem('token')}`;


  useEffect(() => {
    const fetchRecentActivities = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users/recent-activities", {
          headers: { Authorization: token },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch recent activities");
        }
        const data = await response.json();
        setRecentActivities(data.recentActivities);
      } catch (err) {
        setError("Error fetching recent activities");
      } finally {
        setLoading(false);
      }
    };

    fetchRecentActivities();
  }, []);

  if (loading) {
    return (
      <section className="mb-8 w-[60]">
        <h2 className="text-3xl font-bold text-gray-200 mb-6">Recent Activity</h2>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <p className="text-gray-400">Loading recent activities...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mb-8 w-[60]">
        <h2 className="text-3xl font-bold text-gray-200 mb-6">Recent Activity</h2>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <p className="text-red-400">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-8 w-[60]">
      <h2 className="text-3xl font-bold text-gray-200 mb-6">Recent Activity</h2>
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        {recentActivities.length > 0 ? (
          recentActivities.map((activity, index) => (
            <div
              key={index}
              className={`pb-4 mb-4 ${index < recentActivities.length - 1 ? "border-b border-gray-700" : ""}`}
            >
              <p className="font-semibold text-gray-100 text-lg">{activity.title}</p>
              <p className="text-gray-400 mt-1">
                Score: <span className="text-green-400">{activity.score}%</span>
              </p>
              <p className="text-gray-500 text-sm mt-1">Attempted on: {activity.attemptedAt}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No recent activities found.</p>
        )}
      </div>
    </section>
  );
}

export default RecentActivitySection;
