!!! THIS IS A VISUAL STUDIO CODE PROJECT !!! (I have no idea how it will behave on different platforms. Proceed with caution)

This Project is a pure Frontend project that is dependent on the AzubiWiki_Azure-Program.Backend Project (this one is a Visual Studio 2022 project).
When pulling the project from the repository, its URL requests wont work without a local json file.
This file is not included in the repository and, therefore, required to be created individually.

It should look something like this:

{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "Insert-Browser-Type",
            "request": "launch",
            "name": "Enter-A-Launch-Name",
            "url": "Your-URL",
            "webRoot": "${workspaceFolder}/project-name"
        }
    ]
}


This code will also aid in Debugging the project.
