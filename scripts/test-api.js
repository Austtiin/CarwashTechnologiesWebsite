#!/usr/bin/env node

/**
 * API Test Script
 * Tests the contact form API locally or in production
 * 
 * Usage:
 *   node test-api.js                    # Test localhost
 *   node test-api.js https://your-domain.com   # Test production
 */

const API_BASE = process.argv[2] || 'http://localhost:3000';

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m'
};

function log(color, ...args) {
  console.log(color, ...args, colors.reset);
}

async function testHealthCheck() {
  log(colors.blue, '\n🔍 Testing Health Check...');
  try {
    const response = await fetch(`${API_BASE}/api/contact`);
    const data = await response.json();
    
    if (data.success && data.data?.healthy) {
      log(colors.green, '✅ Health check passed');
      return true;
    } else {
      log(colors.red, '❌ Health check failed:', data);
      return false;
    }
  } catch (error) {
    log(colors.red, '❌ Health check error:', error.message);
    return false;
  }
}

async function testFormSubmission() {
  log(colors.blue, '\n📝 Testing Form Submission...');
  
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+1234567890',
    company: 'Test Company',
    inquiry: 'This is a test inquiry to verify the API is working correctly.',
    bestTime: 'anytime',
    urgency: 'normal',
    contactType: 'api_test'
  };
  
  try {
    const response = await fetch(`${API_BASE}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testData)
    });
    
    const data = await response.json();
    
    if (response.ok && data.success) {
      log(colors.green, '✅ Form submission successful');
      log(colors.green, `   Submitted at: ${data.data?.submittedAt}`);
      log(colors.green, `   Message: ${data.message}`);
      return true;
    } else {
      log(colors.red, '❌ Form submission failed');
      log(colors.red, `   Status: ${response.status}`);
      log(colors.red, `   Error: ${data.error || 'Unknown error'}`);
      log(colors.red, `   Message: ${data.message || 'No message'}`);
      return false;
    }
  } catch (error) {
    log(colors.red, '❌ Form submission error:', error.message);
    return false;
  }
}

async function testValidation() {
  log(colors.blue, '\n🛡️  Testing Validation...');
  
  const invalidData = {
    name: 'T', // Too short
    email: 'invalid-email', // Invalid format
    inquiry: 'Short' // Too short
  };
  
  try {
    const response = await fetch(`${API_BASE}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(invalidData)
    });
    
    const data = await response.json();
    
    if (response.status === 400 && !data.success) {
      log(colors.green, '✅ Validation working correctly');
      log(colors.green, `   Error message: ${data.message}`);
      return true;
    } else {
      log(colors.red, '❌ Validation not working as expected');
      log(colors.red, `   Status: ${response.status}`);
      log(colors.red, `   Response:`, data);
      return false;
    }
  } catch (error) {
    log(colors.red, '❌ Validation test error:', error.message);
    return false;
  }
}

async function runTests() {
  log(colors.blue, '===========================================');
  log(colors.blue, `  Contact Form API Tests`);
  log(colors.blue, `  Testing: ${API_BASE}`);
  log(colors.blue, '===========================================');
  
  const results = {
    health: await testHealthCheck(),
    submission: await testFormSubmission(),
    validation: await testValidation()
  };
  
  const passed = Object.values(results).filter(Boolean).length;
  const total = Object.keys(results).length;
  
  log(colors.blue, '\n===========================================');
  log(colors.blue, '  Test Results Summary');
  log(colors.blue, '===========================================');
  
  if (passed === total) {
    log(colors.green, `\n✅ All tests passed (${passed}/${total})`);
    process.exit(0);
  } else {
    log(colors.yellow, `\n⚠️  Some tests failed (${passed}/${total} passed)`);
    process.exit(1);
  }
}

// Run tests
runTests().catch(error => {
  log(colors.red, '\n❌ Fatal error:', error);
  process.exit(1);
});
