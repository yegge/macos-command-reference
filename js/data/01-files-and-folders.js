window.DATA = window.DATA || [];
DATA.push({cat:"Files and folders", note:"Copy, move, delete, link, and inspect.", items:[
["cp","Copy a file. Use -R to copy a whole folder.","cp -R src/ backup/"],
["mv","Move a file, or rename it by moving it onto a new name.","mv draft.md final.md"],
["rm","Delete files permanently — this does not use the Trash. -r deletes folders, -f skips prompts, -i asks before each one.","rm -i notes.txt"],
["ln","Create a link to a file. -s makes a symbolic link, the kind you usually want.","ln -s /usr/local/bin/tool ~/tool"],
["touch","Create an empty file, or update an existing file's timestamp.","touch README.md"],
["ditto","Copy files while preserving macOS metadata, resource forks, and permissions.","ditto -V ~/Source ~/Destination"],
["rsync","Sync folders locally or over SSH, transferring only what changed.","rsync -av --progress src/ backup/"],
["mktemp","Create a temporary file or folder with a guaranteed-unique name.","mktemp -d"],
["file","Identify what kind of file something actually is, regardless of extension.","file report.pdf"],
["stat","Show a file's size, permissions, owner, and timestamps.","stat -f \"%Sz bytes, modified %Sm\" file.txt"],
["du","Measure how much disk space files and folders use.","du -sh *"],
["basename","Strip the folder path off, leaving just the filename.","basename /Users/me/photo.jpg"],
["dirname","Strip the filename off, leaving just the folder path.","dirname /Users/me/photo.jpg"],
["split","Break a large file into smaller numbered pieces.","split -b 100m bigfile.zip part_"],
["chflags","Lock or unlock a file so it can't be changed or deleted.","chflags uchg important.pdf"],
["xattr","Read or strip extended attributes — most often the quarantine flag on downloads.","xattr -d com.apple.quarantine ./downloaded-app"],
]});
