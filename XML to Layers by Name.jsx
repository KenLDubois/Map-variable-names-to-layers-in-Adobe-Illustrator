/**********************************************************

WRITTEN BY:     Ken Dubois, 2016

NOTICE:     Anyone can use / modify / play around with 
                    this code for whatever reason for FREE.  
                    
                    Make something COOL!

*********************************************************/
 
/**********************************************************

MAP ILLUSTRATOR XML VARIABLES TO PAGE 
ITEMS BY NAME


DESCRIPTION

This script iterates through each page item in an 
Illustrator file (text boxes, shapes, paths, etc.) and 
MATCHES them to a LOADED VARIABLE if a variable 
exists with the SAME NAME

SET UP

    -   This script will act on the ACTIVE ILLUSTRATOR DOC
    -   Load a VARIABLE LIBRARY into the DOC
    -   Give LAYER ELEMENTS the SAME NAME as the
        VARIABLE you want it to be BOUND to.
    -   RUN this script and BICKIDY-BAM! All your layers
         should now be properly mapped!


USEFUL STUFF

Variable Kinds:
//============
VariableKind.TEXTUAL     =>  <variable>.contentVariable
VariableKind.IMAGE          =>  <variable>.contentVariable
VariableKind.VISIBILITY    =>  <variable>.visibilityVariable
                  

**********************************************************/

var doc = app.activeDocument; 


 // THE MAPPING ONLY SEEMS TO WORK IF YOU ADD THE XML FILE MANUALLY
 //var xmlFilePath = Folder.desktop + '/LabelXML.xml'; // set xml file path
//doc.importVariables(new File(xmlFilePath));     //get xml file

var iItem = null;                                                                       //  initialize variable for page item to be iterated through
var iVar = null;                                                                        //   initialize variable for xml variable to be iterated through

for (i = 0; i < doc.pageItems.length; i++) {                              //    iterate through all page items
      iItem = doc.pageItems[i];
      try {
            if(doc.variables.getByName(iItem.name)  != null)           //       test if there is a Varible with the same name as Current Page Item
                iVar = doc.variables.getByName(iItem.name);                                                     //      get Varible that matches name
                if(iVar.kind === VariableKind.VISIBILITY) { iItem.visibilityVariable = iVar;}          //      bind variable as VISIBILITY variable
                else {iItem.contentVariable = iVar;};                                                                 //       bind variable as CONTENT variable
                } catch(e) {};                                                          // No Variable match found for Page Item
    };
