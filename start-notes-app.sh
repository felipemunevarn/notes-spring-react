chmod og+rX `pwd`
sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'postgres';"
sudo -u postgres psql -c "CREATE DATABASE notes;"
cd ./src/main/resources/static/frontend/
npm run build
npm run dev