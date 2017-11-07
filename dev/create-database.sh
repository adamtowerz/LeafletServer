#!/bin/bash

cd ~/git/LeafletServer/LeafletServer
rm -rf users/migrations
rm -rf notebooks/migrations
rm -rf sections/migrations
rm -rf leaflets/migrations
rm -rf leaves/migrations

sudo -u postgres psql -c "DROP DATABASE myproject;"
sudo -u postgres psql -c "CREATE DATABASE myproject;"
sudo -u postgres psql -c "CREATE USER myprojectuser WITH PASSWORD 'password';"
sudo -u postgres psql -c "ALTER ROLE myprojectuser SET client_encoding TO 'utf8';"
sudo -u postgres psql -c "ALTER ROLE myprojectuser SET default_transaction_isolation TO 'read committed';"
sudo -u postgres psql -c "ALTER ROLE myprojectuser SET timezone TO 'UTC';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE myproject TO myprojectuser;"
sudo -u postgres psql -c "\\c myproject"
sudo -u postgres psql -c "CREATE EXTENSION IF NOT EXISTS hstore;"
sudo -u postgres psql -c "\\q"

cd ..
./manage.py makemigrations notebooks sections leaflets leaves users
./manage.py migrate

exit
