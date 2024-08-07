//https://www.bpwebs.com/pull-data-from-google-sheets-to-html-table/
//https://docs.google.com/spreadsheets/d/1LtPLy3AdCzv4jSc99HJIxDGYsBNhizxHD2bAkl5_VeY/edit?usp=share_link
function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}
 
//GET DATA FROM GOOGLE SHEET AND RETURN AS AN ARRAY
function getData(){
  var spreadSheetId = "1LtPLy3AdCzv4jSc99HJIxDGYsBNhizxHD2bAkl5_VeY"; //CHANGE
  var dataRange     = "Data!A2:F"; //CHANGE
 
  var range   = Sheets.Spreadsheets.Values.get(spreadSheetId,dataRange);
  var values  = range.values;
 
  return values;
}
 
//INCLUDE JAVASCRIPT AND CSS FILES
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}