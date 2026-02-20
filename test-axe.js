const { chromium } = require('playwright');
const { AxeBuilder } = require('@axe-core/playwright');

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    console.log('Navigating to example.com...');
    await page.goto('https://example.com');
    
    console.log('Running axe scan...');
    const results = await new AxeBuilder({ page }).analyze();
    
    console.log('Scan complete!');
    console.log('Violations:', results.violations.length);
    console.log('Passes:', results.passes.length);
    
    await browser.close();
    console.log('Test completed successfully!');
  } catch (error) {
    console.error('Error:', error.message);
    console.error(error.stack);
  }
})();
