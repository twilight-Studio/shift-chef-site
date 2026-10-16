module.exports = {
  apps: [
    {
      name: "shiftchef",
      script: "/var/www/shiftchef/current/server.js",
      cwd: "/var/www/shiftchef/current",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
        HOSTNAME: "127.0.0.1",
        PORT: "3002",
      },
    },
  ],
};
