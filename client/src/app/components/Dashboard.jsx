'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Line, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export default function Dashboard() {
  const [codingSessions, setCodingSessions] = useState([]);
  const [githubCommits, setGithubCommits] = useState([]);
  const [leetcodeStats, setLeetcodeStats] = useState({ easy: 0, medium: 0, hard: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ Fetch coding sessions from correct route
        const sessionRes = await axios.get('http://localhost:5000/api/sessions');
        setCodingSessions(sessionRes.data);

        // ✅ Fetch GitHub commits
        const commitsRes = await axios.get('http://localhost:5000/api/github/');
        setGithubCommits(commitsRes.data);

        // ✅ Fetch Leetcode problem stats
        const leetcodeRes = await axios.get('http://localhost:5000/api/leetcode/');
        setLeetcodeStats(leetcodeRes.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  // Chart: Coding Sessions (Bar)
  const codingSessionData = {
    labels: codingSessions.map((s) => new Date(s.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Coding Session Duration (minutes)',
        data: codingSessions.map((s) => s.duration),
        backgroundColor: '#36A2EB',
      },
    ],
  };

  // Chart: GitHub Commits (Line)
  const githubCommitsData = {
    labels: githubCommits.map((c) => new Date(c.date).toLocaleDateString()),
    datasets: [
      {
        label: 'GitHub Commits',
        data: githubCommits.map((c) => c.count),
        borderColor: '#4BC0C0',
        fill: false,
      },
    ],
  };

  // Chart: Leetcode Problems (Pie)
  const leetcodeData = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        label: 'Problems Solved',
        data: [leetcodeStats.easy, leetcodeStats.medium, leetcodeStats.hard],
        backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <div className="p-8 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Dev Dashboard</h1>

      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-2">Coding Sessions</h2>
        <Bar data={codingSessionData} />
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-2">GitHub Commits</h2>
        <Line data={githubCommitsData} />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Leetcode Problems Solved</h2>
        <Pie data={leetcodeData} />
      </div>
    </div>
  );
}
