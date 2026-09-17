window.DATA = window.DATA || [];
DATA.push({cat:"Finding things", note:"Locate files by name, content, or Spotlight index.", items:[
["find","Walk through folders looking for files by name, size, age, or type.","find . -name \"*.log\" -mtime -7"],
["grep","Search inside files for matching text. -r searches folders, -i ignores case, -n shows line numbers.","grep -rin \"api_key\" ."],
["mdfind","Search using the Spotlight index — much faster than find for whole-disk searches.","mdfind -name \"invoice\""],
["mdls","Show every piece of Spotlight metadata stored about a file.","mdls photo.jpg"],
["mdutil","Check or change Spotlight indexing for a volume.","mdutil -s /"],
["which","Show which program will actually run for a given command name.","which python3"],
["whereis","Locate a command's binary in the standard system directories.","whereis ls"],
["type","Explain whether a name is a program, a shell builtin, an alias, or a function.","type -a cd"],
["locate","Find files using a prebuilt index. Build the index first with sudo /usr/libexec/locate.updatedb.","locate hosts"],
["xargs","Take a list of results and feed them as arguments to another command.","find . -name \"*.tmp\" | xargs rm -i"],
]});
