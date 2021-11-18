// TODO: Split string into integers 


function modifyDoc() {
  var cal = CalendarApp;
  
  var doc = DocumentApp.openByUrl('https://docs.google.com/document/d/1olWQR0_pmeksadNCXXRUNDFb9CYwefYleqJw4ZCqZY4/edit');
  var body = doc.getBody();   // may not need this
  var tabs = body.getTables(); // tabs should equal the table retrieved from the document
  //Logger.log(tabs);
  var data = readData(tabs, cal);  // 
}

function readData(tabs, cal) {                           // trying to return all cells of tabs
  var times      = new Array(16);
  var timesSplit = new Array(times.length * 2);
  var k = 0;
  for (var i = 1; i < tabs[0].getNumRows(); i++) {       // these loops should be set to be the size of the table
    for (var j = 0; j < 2; j++) {
      k++;
      times[k] = tabs[0].getCell(i, j).getText(); 
      var timesSplit = times[k].split(" ", ",");
      for (var m = 0; m < timesSplit.length; m++) {
           Logger.log(timesSplit);
        }
        
        // make array for each entry in times for split data, should be 2D array :: times[k].split
        //  typical format: "Martha Clark, Z, 11am" || "1:30 Parker Ray" || "Zoryana Wilson Z 10am" || 
        //  "Hilton Prewitt 3 pm" || "Juliane Purves 3:30 PM (Zoom)"
        //
        //  Check for each of those conditions, with the final case searching through the array for something that
        //   resembles an integer, which on finding simply returns that time. The else statement would be these 
        //   conditions: the cell is empty || the cell has unintelligible blah. The program will skip these.
        // Also : parseInt(num,10)

      //Logger.log(times[k]);
      cal.createEvent("Tutoring Appt.", 
                  new Date('July 20, 2020 ' + times[k]), 
                  new Date('July 20, 2020 20:00:00'));
    }
  }
  
}
