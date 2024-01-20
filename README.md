# ACI website

## Prerequisites

Before you begin, ensure you have met the following requirements:
- A PHP server (PHP 8)
- A MySQL server

## Installation and Setup

### For Production

1. Install composer dependencies:
   ```bash
   composer install --no-dev --optimize-autoloader
   ```

2. Install NPM packages and build assets:
   ```bash
   npm install && npm run build
   ```
   This step compiles the assets and places them in the `public` directory.

### Database Setup

1. If the database already exists, run the following command to create tables from entities:
   ```bash
   php bin/console doctrine:migrations:migrate
   ```

2. To load data into the database:
   ```bash
   mysql -uroot -proot -h localhost aci < aci.sql
   ```

### Post-Installation

1. Clear the cache to ensure optimal performance:
   ```bash
   php bin/console cache:clear --env=prod --no-debug
   ```

After completing these steps, your application should be set up and ready for production use.
```
