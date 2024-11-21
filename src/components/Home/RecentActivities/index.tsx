import React, { useEffect, useState } from "react";

interface RecentActivity {
  title: string;
  score: number;
  attemptedAt: string;
}

const RecentActivitySection = () => {
  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const token = `Bearer ${localStorage.getItem("token")}`;

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
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-500">Loading recent activities...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-8">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        {recentActivities.length > 0 ? (
          recentActivities.map((activity, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 mb-4 last:border-b-0"
            >
              <h3 className="text-xl font-semibold text-gray-800">{activity.title}</h3>
              <p className="text-gray-600 mt-2">
                Score: <span className="text-green-600 font-medium">{activity.score}%</span>
              </p>
              <p className="text-gray-500 text-sm mt-1">Attempted on: {activity.attemptedAt}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No recent activities found.</p>
        )}
      </div>
    </section>
  );
};

export default RecentActivitySection;
