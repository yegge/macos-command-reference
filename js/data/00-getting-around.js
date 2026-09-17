window.DATA = window.DATA || [];
DATA.push({cat:"Getting around", note:"Move through folders and see what's there.", items:[
["pwd","Print the full path of the folder you're currently in.","pwd"],
["ls","List the contents of a folder. Add -l for details, -a for hidden files, -h for readable sizes.","ls -lah"],
["cd","Change to another folder. On its own it returns you to your home folder.","cd ~/Documents"],
["pushd","Jump to a folder and remember where you came from.","pushd /usr/local/bin"],
["popd","Return to the last folder you saved with pushd.","popd"],
["dirs","Show the stack of folders saved by pushd.","dirs -v"],
["mkdir","Create a folder. -p creates any missing parent folders too.","mkdir -p project/src/assets"],
["rmdir","Remove a folder, but only if it is already empty.","rmdir old-folder"],
["open","Open a file, folder, app, or URL in the Finder or an app.","open -a \"Visual Studio Code\" ."],
["tree","Draw the folder structure as an indented tree.","tree -L 2","brew"],
]});
