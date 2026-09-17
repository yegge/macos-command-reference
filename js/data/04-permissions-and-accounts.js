window.DATA = window.DATA || [];
DATA.push({cat:"Permissions and accounts", note:"Control who can read, write, and run what.", items:[
["chmod","Change a file's permissions. 755 is typical for scripts, 644 for documents.","chmod 755 deploy.sh"],
["chown","Change which user owns a file. Usually needs sudo.","sudo chown $(whoami) file.txt","sudo"],
["chgrp","Change which group owns a file.","chgrp staff file.txt"],
["umask","Show or set the default permissions applied to newly created files.","umask 022"],
["sudo","Run a single command as the administrator. It will ask for your password.","sudo ls /var/root","sudo"],
["su","Switch to another user account for the rest of the session.","su - otheruser"],
["id","Show your user ID, group ID, and every group you belong to.","id"],
["whoami","Print the username you're currently acting as.","whoami"],
["groups","List the groups your account belongs to.","groups"],
["passwd","Change your account password.","passwd"],
["dscl","Query or edit the macOS Directory Service — the source of truth for local accounts.","dscl . -list /Users"],
["dseditgroup","Add or remove users from a local group.","dseditgroup -o checkmember -m $(whoami) admin"],
["sysadminctl","Create, delete, or modify user accounts, and check FileVault status.","sysadminctl -screenLock status","sudo"],
["who","List who is currently logged in to this Mac.","who"],
["w","Show who is logged in and what they're running right now.","w"],
["last","Show a history of recent logins and restarts.","last -10"],
]});
