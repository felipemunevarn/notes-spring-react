chmod og+rX `pwd`
sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'postgres';"
sudo -u postgres psql -c "SELECT 'CREATE DATABASE notes' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'notes');"
npm --prefix ./src/main/resources/static/frontend run build
npm --prefix ./src/main/resources/static/frontend run dev