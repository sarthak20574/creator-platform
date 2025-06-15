import React from "react";
import {
  Line
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// 🔸 Simulated JSON data (can replace with fetch or upload later)
const mockData = {
  followers: [1200, 1250, 1280, 1295, 1330, 1360, 1400],
  engagement: [
    { post: 1, likes: 320, comments: 25 },
    { post: 2, likes: 400, comments: 40 },
    { post: 3, likes: 290, comments: 10 },
    { post: 4, likes: 500, comments: 70 },
    { post: 5, likes: 450, comments: 60 },
  ],
  bestPostTime: "Wednesday 7 PM",
};

const AnalyticsDashboard = () => {
  const followerChart = {
    labels: ["Day 1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        label: "Followers",
        data: mockData.followers,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">📈 Instagram Analytics</h2>

      <div className="mb-4 p-3 border rounded">
        <h5>Follower Growth (Last 7 Days)</h5>
        <Line data={followerChart} />
      </div>

      <div className="mb-4 p-3 border rounded">
        <h5>Recent Engagement</h5>
        <ul className="list-group">
          {mockData.engagement.map((post, idx) => (
            <li className="list-group-item" key={idx}>
              Post {post.post} → ❤️ {post.likes} Likes, 💬 {post.comments} Comments
            </li>
          ))}
        </ul>
      </div>

      <div className="p-3 border rounded bg-light">
        <h5>🕒 Best Time to Post</h5>
        <p>{mockData.bestPostTime}</p>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
