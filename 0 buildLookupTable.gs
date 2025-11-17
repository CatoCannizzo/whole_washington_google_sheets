function buildLookupTable(){

  // Grab Sheet
  // Credits: https://www.unitedstateszipcodes.org/zip-code-database/
  // County Lookup sheet needs to have two columns: zip and county
  // The zip column needs to be sorted in ascending order
  const ss = SpreadsheetApp.getActiveSpreadsheet(); //get active spreadsheet (bound to this script)
  const sheet = ss.getSheetByName('County Lookup'); //The name of the sheet tab where you are sending the info
  const range = sheet.getDataRange();
  const values = range.getValues();
  let lookupTable = {}

  // Create dictionary {county1: [zip1, zip2], county2: [zip3, zip4]}
  for (let i = 1; i < values.length; i++) {
    
    let zip = values[i][0];
    let county = values[i][1];
    
    if (!Object.keys(lookupTable).includes(county)) {
      lookupTable[county] = [];
    }

    let zips = lookupTable[county];
    zips.push(zip);
    lookupTable[county] = zips;

  }
  //Logger.log(lookupTable);
  return lookupTable;
}
