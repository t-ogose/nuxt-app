module.exports = {
  apps: [
    {
      name: 'NuxtApp',
      exec_mode: 'cluster',
      instances: 'max',
      script: './node_modules/nuxt/bin/nuxt.js',
      cwd: '/var/www/nuxt/nuxt-app/',
      args: 'start',
      env: {
        PORT: 4002,
        NODE_ENV: "development",
      },
      env_production: {
        PORT: 4003,
        NODE_ENV: "production",
      },
    }
  ]
}