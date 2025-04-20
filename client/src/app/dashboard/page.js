"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Line, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const Dashboard = () => {
  const [codingSessions, setCodingSessions] = useState([]);
  const [githubCommits, setGithubCommits] = useState([]);
  const [leetcodeStats, setLeetcodeStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const sessionRes = await axios.get('/api/sessions');
      setCodingSessions(sessionRes.data);

      const commitsRes = await axios.get('/api/github/commits');
      setGithubCommits(commitsRes.data);

      const leetcodeRes = await axios.get('/api/leetcode');
      setLeetcodeStats(leetcodeRes.data);
    };

    fetchData();
  }, []);

  // Prepare data for Coding Sessions chart (Bar chart)
  const codingSessionData = {
    labels: codingSessions.map(session => new Date(session.date).toLocaleDateString()),  // X-axis labels: session dates
    datasets: [
      {
        label: 'Coding Session Duration (minutes)',  // Dataset label
        data: codingSessions.map(session => session.duration),  // Y-axis values: session duration
        backgroundColor: 'rgba(75, 192, 192, 0.6)',  // Bar color
        borderColor: 'rgba(75, 192, 192, 1)',  // Border color
        borderWidth: 1,
      },
    ],
  };

  // Prepare data for GitHub Commits chart (Bar chart)
  const githubCommitsData = {
    labels: githubCommits.map(commit => commit.date),  // X-axis labels: commit dates
    datasets: [
      {
        label: 'GitHub Commits',  // Dataset label
        data: githubCommits.map(commit => commit.commitCount),  // Y-axis values: number of commits
        backgroundColor: 'rgba(75, 192, 192, 0.6)',  // Bar color
        borderColor: 'rgba(75, 192, 192, 1)',  // Border color
        borderWidth: 1,
      },
    ],
  };

  // Prepare data for Leetcode Stats chart (Pie chart for difficulty breakdown)
  const leetcodeStatsData = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        label: 'Leetcode Problem Difficulty',
        data: [leetcodeStats.easy, leetcodeStats.medium, leetcodeStats.hard],  // Data for each difficulty
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],  // Colors for the pie chart
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],  // Hover colors for the pie chart
      },
    ],
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg mt-6">
      <h1 className="text-3xl font-bold">Dev Dashboard</h1>

      {/* Coding Sessions chart */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Coding Sessions</h2>
        <div className="p-6 bg-white shadow-md rounded-lg mt-4">
          <Bar data={codingSessionData} />
        </div>
      </div>

      {/* GitHub Commits chart */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">GitHub Commits</h2>
        <div className="p-6 bg-white shadow-md rounded-lg mt-4">
          <Bar data={githubCommitsData} />
        </div>
      </div>

      {/* Leetcode Stats chart */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Leetcode Stats</h2>
        <div className="p-6 bg-white shadow-md rounded-lg mt-4">
          <Pie data={leetcodeStatsData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
