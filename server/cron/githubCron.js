const cron = require('node-cron');
const axios = require('axios');
const GitHubCommit = require('../models/GitHubCommit');

// This runs every 6 hours (adjust as needed)
cron.schedule('0 */6 * * *', async () => {
  console.log("⏰ Running GitHub sync job...");

  try {
    const res = await axios.get('https://api.github.com/users/<your-username>/events', {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    });

    const commitEvents = res.data.filter(event => event.type === "PushEvent");

    for (const event of commitEvents) {
      await GitHubCommit.create({
        username: event.actor.login,
        commitCount: event.payload.commits.length,
        date: new Date(event.created_at)
      });
    }

    console.log("✅ GitHub commits synced.");
  } catch (error) {
    console.error("❌ Error syncing GitHub commits:", error.message);
  }
});
