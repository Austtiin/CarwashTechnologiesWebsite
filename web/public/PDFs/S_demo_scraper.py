#!/usr/bin/env python3
"""
Demo script showing how to use the PDFScraper class programmatically
"""

from scrape import PDFScraper
import sys

def demo_scraper():
    """Demonstrate the PDF scraper functionality"""
    
    print("PDF Scraper Demo")
    print("="*50)
    
    # Initialize the scraper
    scraper = PDFScraper(download_folder="demo_pdfs")
    
    # Example websites that often have PDFs (you can change these)
    demo_urls = [
        "https://www.w3.org/WAI/WCAG21/",  # W3C guidelines (often has PDFs)
        "https://www.irs.gov/forms-pubs",   # IRS forms (many PDFs)
    ]
    
    print("This demo will attempt to scrape PDF links from example websites.")
    print("Note: Some websites may not have PDFs or may block scraping.")
    print()
    
    for i, url in enumerate(demo_urls, 1):
        print(f"\nDemo {i}: Scraping {url}")
        print("-" * 60)
        
        try:
            # Scrape the website
            total_found, total_downloaded = scraper.scrape_website(url)
            
            print(f"Results for {url}:")
            print(f"  - PDF links found: {total_found}")
            print(f"  - PDFs downloaded: {total_downloaded}")
            
            if total_downloaded > 0:
                print(f"  - Check the 'demo_pdfs' folder for downloaded files")
                
        except Exception as e:
            print(f"Error scraping {url}: {e}")
        
        print()
    
    print("Demo completed!")
    print(f"All downloads saved to: {scraper.download_folder}")

if __name__ == "__main__":
    # Check if user wants to run the demo
    if len(sys.argv) > 1 and sys.argv[1] == "--demo":
        demo_scraper()
    else:
        print("PDF Scraper Demo Script")
        print()
        print("Usage:")
        print("  python demo_scraper.py --demo")
        print()
        print("This will run a demonstration of the PDF scraper on sample websites.")
        print("To use the interactive menu system, run: python scrape.py")
