const fs = require('fs');
const path = require('path');

// Path to PDFs directory
const pdfsDirectory = path.join(__dirname, '..', 'web', 'public', 'PDFs');
const outputFile = path.join(__dirname, '..', 'web', 'src', 'data', 'pdf-list.json');

// Ensure the data directory exists
const dataDir = path.dirname(outputFile);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

try {
  // Check if PDFs directory exists
  if (!fs.existsSync(pdfsDirectory)) {
    console.error('PDFs directory not found:', pdfsDirectory);
    process.exit(1);
  }

  // Read all files in the PDFs directory
  const files = fs.readdirSync(pdfsDirectory);
  
  // Filter for PDF files only
  const pdfFiles = files.filter(file => 
    file.toLowerCase().endsWith('.pdf')
  );

  // Write the list to a JSON file
  fs.writeFileSync(outputFile, JSON.stringify(pdfFiles, null, 2));
  
  console.log(`Generated PDF list with ${pdfFiles.length} files:`);
  pdfFiles.forEach(file => console.log(`  - ${file}`));
  
} catch (error) {
  console.error('Error generating PDF list:', error);
  process.exit(1);
}