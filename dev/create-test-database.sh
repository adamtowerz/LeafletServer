#!/bin/bash

sudo -u postgres psql -c "DROP DATABASE test_myproject;"
sudo -u postgres psql -c "CREATE DATABASE test_myproject;"
sudo -u postgres psql -c "CREATE USER myprojectuser WITH PASSWORD 'password';"
sudo -u postgres psql -c "ALTER ROLE myprojectuser SET client_encoding TO 'utf8';"
sudo -u postgres psql -c "ALTER ROLE myprojectuser SET default_transaction_isolation TO 'read committed';"
sudo -u postgres psql -c "ALTER ROLE myprojectuser SET timezone TO 'UTC';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE test_myproject TO myprojectuser;"

exit
