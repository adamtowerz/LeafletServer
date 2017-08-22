# LeafletServer
Server for Zarkoix/Leaflet

## Installation:
* *Notes*:
	* use of a *virtualenv* is recommended
1. Clone the repository
	* git clone git@github.com:Zarkoix/LeafletServer.git
2. Enter directory
	* cd Leaflet Server
3. Install the latest version of python 3.*.*
	* (distro specific)
4. Install required dependencies
	* pip3 install -r requirements.txt

## Set up Postgresql (dev)
* *on debian*
* sudo apt-get install python3-pip python3-dev libpq-dev postgresql postgresql-contrib
* sudo su - postgres
* psql
* CREATE DATABASE myproject;
* CREATE USER myprojectuser WITH PASSWORD 'password';
* ALTER ROLE myprojectuser SET client_encoding TO 'utf8';
* ALTER ROLE myprojectuser SET default_transaction_isolation TO 'read committed';
* ALTER ROLE myprojectuser SET timezone TO 'UTC';
* GRANT ALL PRIVILEGES ON DATABASE myproject TO myprojectuser;
* \c myproject
* CREATE EXTENSION IF NOT EXISTS hstore;
* \q
* exit

## Create migrations and migrate models
* *Be in LeafletServer root folder*
* ./manage.py makemigrations notebooks sections leaflets leaves users
* ./manage.py migrate

## Create admin user
* ./manage.py createsuperuser
* *for dev*
	* username: admin
	* password: rootroot
* *(recommended)* ./manage.py collectstatic

## Set up Google Auth (dev)
* *in browser*
* go to http://localhost:8000/admin/
* login with admin user credentials
* click on 'sites'
* on the site marked 'example.com'
* change the domain and display name to 'localhost:8000'
* click on 'home'
* add a new social application
	* provider: Google
	* name: Google App
	* Client id: 943533869489-gii1feq43ldt4avrg817lhtt6ub44hj5.apps.googleusercontent.com
	* secret key: bwUIbjhzIu04nvx4Twk_LxQr
	* sites: localhost:8000
	* click on save

## Conventions:
* Python
    * 1 tab = 4 spaces
    * max line length 80 chars
      * *Wrap lines by using parenthesis*
    * default pylint rules *(see .pylintrc)*
* use included formatting config files
    * .editorconfig
    * .pylintrc

## Run server:
python3 manage.py runserver

