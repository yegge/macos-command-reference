window.DATA = window.DATA || [];
DATA.push({cat:"Disks, volumes, and backups", note:"Storage, disk images, and Time Machine.", items:[
["df","Show free and used space on every mounted volume.","df -h"],
["diskutil","The command-line Disk Utility: list, mount, erase, verify, and repair volumes.","diskutil list"],
["hdiutil","Create, mount, and detach disk images (.dmg and .sparsebundle).","hdiutil attach installer.dmg"],
["mount","Show what's currently mounted, or attach a volume manually.","mount"],
["umount","Detach a mounted volume.","umount /Volumes/USB"],
["tmutil","Control Time Machine: start backups, list them, and inspect snapshots.","tmutil listbackups"],
["softwareupdate","Check for and install macOS system updates from the terminal.","softwareupdate --list"],
]});
