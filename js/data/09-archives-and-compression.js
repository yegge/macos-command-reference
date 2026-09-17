window.DATA = window.DATA || [];
DATA.push({cat:"Archives and compression", note:"Bundle files up and pull them apart again.", items:[
["tar","Create or extract .tar and .tar.gz archives. c creates, x extracts, f names the file.","tar -czf archive.tar.gz folder/"],
["zip","Create a zip archive. -r includes everything inside a folder.","zip -r archive.zip folder"],
["unzip","Extract a zip archive, optionally into a chosen folder.","unzip archive.zip -d extracted/"],
["gzip","Compress a single file to .gz. -k keeps the original.","gzip -k logfile.txt"],
["gunzip","Decompress a .gz file.","gunzip logfile.txt.gz"],
["bzip2","Compress a file to .bz2 — slower than gzip but usually smaller.","bzip2 -k backup.sql"],
["ditto","Build a zip that keeps macOS metadata intact, the way the Finder does.","ditto -c -k --sequesterRsrc --keepParent MyApp MyApp.zip"],
]});
