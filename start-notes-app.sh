chmod og+rX `pwd`
APP_ROOT_PATH=`pwd`
sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'postgres';"
sudo -u postgres psql -c "CREATE DATABASE notes;"
npm --prefix ./src/main/resources/static/frontend run build
npm --prefix ./src/main/resources/static/frontend run dev