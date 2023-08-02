async function checkHeadings(event){
const url = document.querySelector('.input-field').value;
// var url = document.getElementById('input_text').value;
  let mainUrl = 'https://' + url.match(/www[^/]*\/?/)[0];
//   console.log(mainUrl)
try {
   const response = await fetch(url);
//    console.log(response)
   if (response.ok) {
          const htmlText = await response.text();
          var parser = new DOMParser();
          var htmlDoc = parser.parseFromString(htmlText, 'text/html');
          checkHeadingStructure(htmlDoc)
          const anchorTags = htmlDoc.querySelectorAll('a');
        const hrefValues = [];
            anchorTags.forEach((anchor) => {
            const href = anchor.getAttribute('href');
            hrefValues.push(href);
      });
    //   console.log(hrefValues);
   }
   else {
          throw new Error('Request failed with status: ' + response.status +" " + response.message);
        }
} catch (error) {
    
}
}

let validHeadings=[];
let invalidHeadings=[]

function checkHeadingStructure(checkDoc) {
  var headingLevels = checkDoc.querySelectorAll("h1, h2, h3, h4, h5, h6");

  var result = "";
  var hasBlankHeading = false;
  var isValidStructure = true;
  // Check for blank headings
  for (var i = 0; i < headingLevels.length; i++) {
    var headingText = headingLevels[i].innerText.trim();
    if (headingText === "") {
      hasBlankHeading = true;
      break;
    }
  }

  // Check for valid heading structure
  var previousLevel = 0;
  for (var i = 0; i < headingLevels.length; i++) {
    var currentLevel = parseInt(headingLevels[i].tagName.charAt(1));

    if (currentLevel > previousLevel + 1) {
      isValidStructure = false;
      result +=
        "Heading " +
        headingLevels[i].tagName.charAt(1) +
        ": " +
        headingLevels[i].innerText +
        "<br>";

      break;
    }

    previousLevel = currentLevel;
  }
  document.getElementById("result").innerHTML = result;
}
