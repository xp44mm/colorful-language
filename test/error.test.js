﻿function cc() {
    console.log(
        new Error().stack
            //.split('\n')[2]
            //.trim()
            //.split(' ')[1]
    )
}

test("whitespace test", () => {
    function bb(){cc()}

    bb() //打印出bb
})

function ScriptPath() {
  var pathParts = '';
  try {
    //Throw an error to generate a stack trace
    throw new Error();
  }
  catch(e) {
    //Split the stack trace into each line
    var stackLines = e.stack.split('\n');
    var callerIndex = 0;
    //Now walk though each line until we find a path reference
    for(var i in stackLines){
      if(!stackLines[i].match(/http[s]?:\/\//)) continue;
      //We skipped all the lines with out an http so we now have a script reference
      //This one is the class constructor, the next is the getScriptPath() call
      //The one after that is the user code requesting the path info (so offset by 2)
      callerIndex = Number(i) + 2;
      break;
    }
    //Now parse the string for each section we want to return
    pathParts = stackLines[callerIndex].match(/((http[s]?:\/\/.+\/)([^\/]+\.js)):/);
  }
 
  this.fullPath = function() {
    return pathParts[1];
  };
 
  this.path = function() {
    return pathParts[2];
  };
 
  this.file = function() {
    return pathParts[3];
  };
 
  this.fileNoExt = function() {
    var parts = this.file().split('.');
    parts.length = parts.length != 1 ? parts.length - 1 : 1;
    return parts.join('.');
  };
}
