import os

def create_sample_files():
    """Create some sample files to test the renamer"""
    sample_files = [
        "FB_-222333.txt",
        "AB_-444555.doc",
        "CD_-666777.pdf",
        "EF_-888999.jpg",
        "GH_-111222.xlsx"
    ]
    
    print("Creating sample files for testing...")
    for filename in sample_files:
        with open(filename, 'w') as f:
            f.write(f"This is a sample file: {filename}")
        print(f"✓ Created: {filename}")
    
    print(f"\n✓ Created {len(sample_files)} sample files in current directory")
    print("You can now run file_renamer.py to test the renaming functionality!")

if __name__ == "__main__":
    create_sample_files()
