<h1>Start Chrome extension</h1>
start a react app: npx start-react-app chrome_extension

replace the manifest file in public to this

    {   
        "manifest_version": 3,
        "name": "My Extension",
        "version": "1.0.1",
        "action": {
            "default_popup": "index.html",
            "default_title": "My Extension"
        },
        "default_locale": "en", !!! EXCLUDE THIS LINE BECAUSE IT WILL ASK FOR LOCALIZATION FOLDER IN THE ROOT DIR
        "description": "A plain text description",
        "author": "developer@example.com",
        "permissions": ["scripting"]
    }

then: npm run build

then: go to google -> open manage extensions window -> able developer mode -> load unpaked -> choose the build folder from chrome_extension folder (the project folder)

Note: any changes in the src folder need to re-run the app - npm run build

<h1>Start Django backend</h1>
To activate this project's virtualenv, run pipenv shell.  "start shell when open new terminal"
Alternatively, run a command inside the virtualenv with pipenv run.

pip install spacy
python -m spacy download en_core_web_sm    - Probably need to do both of these first before the lower step

django-admin startproject <project_name> .   "the '.' is important, because not having it would create a folder contain the actual project"

start server = python manage.py runserver   "default will be port 8000 but if add port number after the 'runserver' will run the desired port"

create new apps = python manage.py startapp <appname>   "remember to write the new app name inside the 'settings.py' inside the project folder - not app'
