module.exports = {
  apps: [
    {
      name: 'NuxtApp',
      exec_mode: 'cluster',
      instances: 'max',
      script: './node_modules/nuxt/bin/nuxt.js',
      cwd: '/usr/share/nginx/html/app/nuxt-app/',
      args: 'start',
      env: {
        PORT: 4001,
        NODE_ENV: "development",
      },
      env_production: {
        PORT: 4001,
        NODE_ENV: "production",
      },
    }
  ]
}