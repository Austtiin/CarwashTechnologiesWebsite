import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const pdfDirectory = path.join(process.cwd(), 'public', 'PDFs');
    
    // Debug: Log the directory path
    console.log('Looking for PDFs in:', pdfDirectory);
    console.log('Current working directory:', process.cwd());
    
    // Check if directory exists
    if (!fs.existsSync(pdfDirectory)) {
      console.log('Directory does not exist:', pdfDirectory);
      
      // Check if parent directories exist
      const publicDir = path.join(process.cwd(), 'public');
      console.log('Public directory exists:', fs.existsSync(publicDir));
      
      if (fs.existsSync(publicDir)) {
        const publicContents = fs.readdirSync(publicDir);
        console.log('Public directory contents:', publicContents);
      }
      
      return NextResponse.json({ 
        error: 'PDF directory not found',
        debugInfo: {
          searchPath: pdfDirectory,
          cwd: process.cwd(),
          publicExists: fs.existsSync(publicDir),
          publicContents: fs.existsSync(publicDir) ? fs.readdirSync(publicDir) : []
        }
      }, { status: 404 });
    }
    
    // Read all files in the directory
    const files = fs.readdirSync(pdfDirectory);
    console.log('All files in PDF directory:', files);
    
    // Filter for PDF files only
    const pdfFiles = files.filter(file => 
      file.toLowerCase().endsWith('.pdf')
    );
    
    console.log('Filtered PDF files:', pdfFiles);
    
    // Get file stats for last modified date
    const filesWithStats = pdfFiles.map(file => {
      const filePath = path.join(pdfDirectory, file);
      const stats = fs.statSync(filePath);
      
      return {
        filename: file,
        lastModified: stats.mtime.toISOString(),
        size: stats.size
      };
    });
    
    console.log('Files with stats:', filesWithStats);
    
    return NextResponse.json({ 
      files: filesWithStats,
      debugInfo: {
        directoryPath: pdfDirectory,
        totalFiles: files.length,
        pdfFiles: pdfFiles.length
      }
    });
  } catch (error) {
    console.error('Error reading PDF directory:', error);
    let message = 'Unknown error';
    let stack = undefined;
    if (error instanceof Error) {
      message = error.message;
      stack = error.stack;
    }
    return NextResponse.json({ 
      error: 'Failed to read PDF files',
      details: message,
      stack: stack
    }, { status: 500 });
  }
}