const puppeteer = require('puppeteer-core');

(async () => {
  console.log('Starting PDF generation...');
  try {
    const browser = await puppeteer.launch({
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      headless: 'new'
    });
    console.log('Browser launched.');
    const page = await browser.newPage();
    console.log('Navigating to localhost...');
    await page.goto('http://localhost:5173/', {waitUntil: 'load', timeout: 30000});
    
    // Disable loading screen via CSS since React state might not be accessible easily
    console.log('Waiting for loading screen to disappear...');
    await new Promise(r => setTimeout(r, 2000)); // Wait for our 1.5s loader

    console.log('Generating PDF...');
    await page.pdf({ 
      path: 'portfolio.pdf', 
      format: 'A4',
      printBackground: true,
      margin: { top: '0', bottom: '0', left: '0', right: '0' }
    });
    
    console.log('PDF saved successfully.');
    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();
