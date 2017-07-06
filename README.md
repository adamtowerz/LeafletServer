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
	* cat requirements.txt | xargs -n | pip3 install

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

## API

### Notebooks

#### GET
* List
    * Obtains a list of the user's Notebooks
    * http://LEAFLETSERVER_URL/notebooks/
    * *Input*
        * N/A
    * *Output*
		```json
		{
			"count": 2,
			"next": null,
			"previous": null,
			"results": [
				{
					"id": 5,
					"title": "hello",
					"owner": "isaaclo123",
					"sections": [
						5,
						4
					]
				},
				{
					"id": 6,
					"title": "hello2",
					"owner": "isaaclo123",
					"sections": [
						1
					]
				}
			]
		}
		```

* Detail
	* Obtains details of a specific Notebook
	* http://LEAFLETSERVER_URL/notebooks/ **ID** /
	* *Input*
		* http://LEAFLETSERVER_URL/notebooks/5/
	* *Output*
		```json
        {
			"id": 5,
			"title": "hello",
			"owner": "isaaclo123",
			"sections": [
				5,
				4
			]
		}
		```

#### POST
* Creates a new notebook
* http://LEAFLETSERVER_URL/notebooks/
	* *Input*
		```json
		{
			"title": ""
		}
		```
	* *Output*
		```json
		{
			"id": 8,
			"title": "test",
			"owner": "isaaclo123",
			"sections": []
		}
		```

#### DELETE
* Deletes a notebook
* http://LEAFLETSERVER_URL/notebooks/ **ID** /
	* *Input*
		* http://LEAFLETSERVER_URL/notebooks/8/
	* Output
		* N/A

#### PUT
* Replaces a notebook
* http://LEAFLETSERVER_URL/notebooks/ **ID** /
	* *Input*
		* http://LEAFLETSERVER_URL/notebooks/5/
		```json
		{
			"id": 5,
			"title": "hellochanged",
			"owner": "isaaclo123",
			"sections": [
				5,
				4
			]
		}
		```
	* *Output*
	```json
	{
		"id": 5,
		"title": "hellochanged",
		"owner": "isaaclo123",
		"sections": [
			5,
			4
		]
	}
	```

#### PATCH
* Changes a notebook
* http://LEAFLETSERVER_URL/notebooks/ **ID** /
	* *Input*
		* http://LEAFLETSERVER_URL/notebooks/5/
		```json
		{
			"title": "hellochangedagain"
		}
		```
	* *Output*
	```json
	{
		"id": 5,
		"title": "hellochangedagain",
		"owner": "isaaclo123",
		"sections": [
			5,
			4
		]
	}
		```

### Sections

#### GET
* List
	* Obtains a list of the user's Sections
	* http://LEAFLETSERVER_URL/sections/
	* *Input*
		* N/A
    * *Output*
	```json
	{
		"count": 3,
		"next": null,
			"previous": null,
			"results": [
				{
					"id": 5,
					"notebook": 5,
					"title": "",
					"owner": "isaaclo123",
					"leaflets": []
				},
				{
					"id": 4,
					"notebook": 5,
					"title": "2",
					"owner": "isaaclo123",
					"leaflets": [
						5
					]
				},
				{
					"id": 2,
					"notebook": 2,
					"title": "test",
					"owner": "isaaclo123",
					"leaflets": []
				}
			]
	}
        ```
* Detail
	* Obtains details of a specific Section
	* http://LEAFLETSERVER_URL/sections/ **ID** /
	* *Input*
		* http://LEAFLETSERVER_URL/sections/5/
	* *Output*
	```json
	{
		"id": 5,
		"notebook": 5,
		"title": "",
		"owner": "isaaclo123",
		"leaflets": []
	}
        ```

#### POST
* Creates a new section
* http://LEAFLETSERVER_URL/sections/
	* *Input*
		```json
		{
			"notebook": 5,
			"title": "asectoin"
		}
		```
	* *Output*
	```json
	{
		"id": 9,
		"notebook": 5,
		"title": "asectoin",
		"owner": "isaaclo123",
		"leaflets": []
	}
		```

#### DELETE
* Deletes a section
* http://LEAFLETSERVER_URL/sections/ **ID** /
	* *Input*
		* http://LEAFLETSERVER_URL/sections/9/
	* Output
		* N/A

#### PUT
* Replaces a section
* http://LEAFLETSERVER_URL/sections/ **ID** /
	* *Input*
		* http://LEAFLETSERVER_URL/sections/9/
		```json
		{
			"id": 9,
			"notebook": 5,
			"title": "asection",
			"owner": "isaaclo123",
			"leaflets": []
		}
		```
	* *Output*
	```json
	{
		"id": 9,
		"notebook": 5,
		"title": "asection",
		"owner": "isaaclo123",
		"leaflets": []
	}
	```

#### PATCH
* Changes a section
* http://LEAFLETSERVER_URL/sections/ **ID** /
	* *Input*
		* http://LEAFLETSERVER_URL/sections/9/
		```json
		{
			"title": "asectionbetter"
		}
		```
	* *Output*
	```json
	{
		"id": 9,
		"notebook": 5,
		"title": "asectionbetter",
		"owner": "isaaclo123",
		"leaflets": []
	}
	```

### Leaflets

#### GET
* List
	* Obtains a list of the user's Leaflets
	* http://LEAFLETSERVER_URL/leaflets/
    * *Input*
		* N/A
    * *Output*
	```json
		{
			"count": 3,
			"next": null,
			"previous": null,
			"results": [
				{
					"id": 6,
					"section": 5,
					"leaves": [],
					"title": "New",
					"is_favorite": true,
					"owner": "isaaclo123"
				},
				{
					"id": 7,
					"section": 5,
					"leaves": [],
					"title": "New",
					"is_favorite": true,
					"owner": "isaaclo123"
				},
				{
					"id": 5,
					"section": 4,
					"leaves": [
						3
					],
					"title": "testy",
					"is_favorite": true,
					"owner": "isaaclo123"
				}
			]
		}
	```
* Detail
	* Obtains details of a specific Leaflet
	* http://LEAFLETSERVER_URL/leaflets/ **ID** /
    * *Input*
		* http://LEAFLETSERVER_URL/leaflets/5/
    * *Output*
	```json
	{
		"id": 5,
		"section": 4,
		"leaves": [
			3
		],
		"title": "testy",
		"is_favorite": true,
		"owner": "isaaclo123"
	}
	```

#### POST
* Creates a new leaflet
* http://LEAFLETSERVER_URL/leaflets/
	* *Input*
		```json
		{
			"section": 9,
			"title": "testing",
			"is_favorite": true
		}
		```
	* *Output*
	```json
	{
		"id": 10,
		"section": 9,
		"leaves": [],
		"title": "testing",
		"is_favorite": true,
		"owner": "isaaclo123"
	}
	```

#### DELETE
* Deletes a leaflet
* http://LEAFLETSERVER_URL/leaflets/ **ID** /
	* *Input*
		* http://LEAFLETSERVER_URL/leaflets/9/
	* Output
		* N/A

#### PUT
* Replaces a leaflet
* http://LEAFLETSERVER_URL/leaflets/ **ID** /
	* *Input*
		* http://LEAFLETSERVER_URL/leaflets/9/
		```json
		{
			"id": 10,
			"section": 9,
			"leaves": [],
			"title": "testingchange",
			"is_favorite": true,
			"owner": "isaaclo123"
		}
		```
	* *Output*
	```json
	{
		"id": 10,
		"section": 9,
		"leaves": [],
		"title": "testingchange",
		"is_favorite": true,
		"owner": "isaaclo123"
	}
		```

#### PATCH
* Changes a leaflet
	* *Input*
		* http://LEAFLETSERVER_URL/leaflets/9/
		```json
		{
			"title": "testingchangenow"
		}
		```
	* *Output*
	```json
	{
		"id": 10,
		"section": 9,
		"leaves": [],
		"title": "testingchangenow",
		"is_favorite": true,
		"owner": "isaaclo123"
	}
	```

### Leaves
**COMING SOON!**
