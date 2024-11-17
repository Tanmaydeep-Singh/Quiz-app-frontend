import React from "react";

interface RecentActivity {
  quizTitle: string;
  score: number;
  date: string;
}

const recentActivities: RecentActivity[] = [
  { quizTitle: "Mathematics Quiz", score: 85, date: "2024-11-15" },
  { quizTitle: "Science Quiz", score: 92, date: "2024-11-14" },
];

function RecentActivitySection() {
  return (
    <section className="mb-8 w-[60]">
      <h2 className="text-3xl font-bold text-gray-200 mb-6">Recent Activity</h2>
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        {recentActivities.map((activity, index) => (
          <div
            key={index}
            className={`pb-4 mb-4 ${index < recentActivities.length - 1 ? "border-b border-gray-700" : ""}`}
          >
            <p className="font-semibold text-gray-100 text-lg">{activity.quizTitle}</p>
            <p className="text-gray-400 mt-1">Score: <span className="text-green-400">{activity.score}%</span></p>
            <p className="text-gray-500 text-sm mt-1">Attempted on: {activity.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentActivitySection;
