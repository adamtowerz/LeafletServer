#!/bin/bash

cd ..

./manage.py makemigrations notebooks sections leaflets leaves users
./manage.py migrate
