const express =require('express');
const router =express.Router();
const bodyParser = require("body-parser");
const axios = require("axios");
// const { JSDOM } = require("jsdom"); // Import JSDOM from jsdom
// const { DOMParser } = require("xmldom");
const cheerio = require("cheerio");

// *****START***********************************************************************************************
// Below Code is to Check Heading level Strucure

router.post("/checkheading", async (req, res) => {
    const param = req.body.input_field;
    try {
      const result = await checkHeadings(param);
      res.send(result); // Send the result back to the client
    } catch (error) {
      console.error(error);
      res.status(500).send("Error processing the URL");
    }
  });
  
  async function checkHeadings(param) {
    const url = param;
    //   let mainUrl = 'https://' + param.match(/www[^/]*\/?/)[0];
    try {
      const response = await axios.get(url);
      // console.log(response)
   
      if (response.status === 200) {
        const htmlDoc = await response.data;
       return  checkAllPages(htmlDoc, url)
      //   return checkHeadingStructure(htmlDoc, url);
      } else {
        return new Error(
          "Request failed with status: " +
            response.status +
            " " +
            response.statusText
        );
      }
    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with a status code outside the 2xx range
        console.error(
          "Request failed with status: " +
          error.response.status +
          " " +
          error.response.statusText
        );
      } else if (error.request) {
        // The request was made, but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error:", error.message);
      }
  
      throw error; // Re-throw the error so that it can be handled by the calling function
    }
  }
  
  
  
  
  async function checkAllPages(htmlDoc, url) {
      let mainUrlMatch = url.match(/https?:\/\/([^/]+)/);
      const mainUrl = mainUrlMatch[1];
      const $ = cheerio.load(htmlDoc);
      const links = $("a[href]")
        .not('[target="_blank"]')
        .not('[href^="#"]')
        .not('[href^="mailto"]')
        .not('[href^="tel:"]')
        .toArray();
        
      const uniqueHrefs = new Set(); // Create a Set to store unique href values
      let results =[];
    
      for (let link of links) {
        let href = $(link).attr("href");
        if (!uniqueHrefs.has(href)) {
          uniqueHrefs.add(href); // Add href to the Set if it's not already present
          const checkUrl = href.includes("http") ? href : "http://" + mainUrl + "/" + href;
  
          try {
            const response = await axios.get(checkUrl);
            if (response.status === 200) {
              const htmlDoc = await response.data;
              const headingResult = checkHeadingStructure(htmlDoc, checkUrl);
              // result+=headingResult;
              const resultMessage = headingResult !== '' ? headingResult : "Valid Heading Structure";
              results.push({url:checkUrl,result:resultMessage})
            } else {
              results.push({url:checkUrl,result:"Request failed with status: "+response.status+" "+response.statusText});
            }
          } catch (error) {
            results.push({ url: checkUrl, result: "Error: " + error.message });
          }
        }
      }
    
      return results;
    }
    
  function checkHeadingStructure(htmlDoc, url) {
    const $ = cheerio.load(htmlDoc); // Load the HTML string using cheerio
    const headingLevels = $("h1, h2, h3, h4, h5, h6"); // Find all headings using the jQuery-like syntax
    var result = ""
    var hasBlankHeading = false;
    var isValidStructure = true;
  
    // Check for blank headings
    for (var i = 0; i < headingLevels.length; i++) {
      var headingText = $(headingLevels[i]).text().trim();
      if (headingText === "") {
        hasBlankHeading = true;
        break;
      }
    }
    // Check for valid heading structure
    var previousLevel = 0;
    // Check if the heading is visible (display: none or visibility: hidden is hidden)
    var display = $(headingLevels[i]).css("display");
    var visibility = $(headingLevels[i]).css("visibility");
    var isVisible = display !== "none" && visibility !== "hidden";
  
    if (isVisible) {
      for (var i = 0; i < headingLevels.length; i++) {
        var currentLevel = parseInt(
          $(headingLevels[i]).prop("tagName").charAt(1)
        );
  
        if (currentLevel > previousLevel + 1) {
          isValidStructure = false;
          result +=
            "Invalid Heading " +
            $(headingLevels[i]).prop("tagName").charAt(1);
  
          break;
        }
        previousLevel = currentLevel;
      }
    }
    return result; // Return the result
  }
  
module.exports = router;
  
  // ******End**********************************************************************************************
    