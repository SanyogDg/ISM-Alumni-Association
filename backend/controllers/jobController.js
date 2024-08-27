const Job = require('../models/Job');

exports.createJob = async (req, res) => {
  try {
    const { title, description, company, location, salary } = req.body;
    const job = new Job({ title, description, company, location, salary });
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create job' });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
};
