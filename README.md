# LeafletServer

Server for Zarkoix/Leaflet

## Installation

### Repository

*Note*: use of a *virtualenv* is recommended

1. Clone the repository
    `git clone git@github.com:Zarkoix/LeafletServer.git`
2. Enter directory
    `cd Leaflet Server`
3. Install the latest version of python 3.*.*
    `(distro specific)`
4. Install required dependencies
    `pip3 install -r requirements.txt`

### Set up Postgresql (dev)

```bash
cd dev
chmod +x createdatabase.sh
./createdatabase.sh
```

### Create migrations and migrate models

```bash
cd dev
chmod +x makemigrations.sh
./makemigrations.sh
```

### Create admin user

```bash
./manage.py createsuperuser
# for dev, set this username and password
# username: admin
# password: rootroot
```

### Set up Google Auth (dev)

* *in browser*
* go to [http://localhost:8000/admin/](http://localhost:8000/admin/)
* login with admin user credentials
* click on 'sites'
* on the site marked 'example.com'
* change the domain and display name to 'localhost:8000'
* click on 'home'
* add a new social application
    * provider: Google
    * name: Google App
    * Client id: \$ID\$.apps.googleusercontent.com
    * secret key: \$SECRET KEY\$
    * sites: localhost:8000
    * click on save

## Convention and linting

### Editorconfig

* .editorconfig

### Python

* .pylintrc

### Markdown

* .mdlrc
* .mdl_style.rb

## Run server

```bash
python3 manage.py runserver
# or
./manage.py runserver
```
