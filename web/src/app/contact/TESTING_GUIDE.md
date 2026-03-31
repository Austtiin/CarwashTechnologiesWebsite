# Contact Form Testing Guide

## Quick Test Checklist

Use this guide to verify that all three contact forms (Chemical Sales, Service & Maintenance, Equipment Sales) are working correctly with retry logic.

## 🧪 Test Scenarios

### ✅ Scenario 1: Successful Submission
**Setup**: Normal operation, API running
**Steps**:
1. Navigate to contact page
2. Select any contact type (Chemicals, Service, or Sales)
3. Fill out form with valid data:
   - Name: "Test User"
   - Email: "test@example.com"
   - Inquiry: "This is a test message with enough characters"
4. Click "Send Inquiry"

**Expected Result**:
- ✅ Green success box appears
- Shows "Message Sent Successfully!"
- Mentions the specific contact type selected
- Form clears
- "Submit Another Inquiry" button available

**Backend Verification**:
- Check Azure Queue for new message
- Message should contain `contactType` field with correct value

---

### ⏳ Scenario 2: Pending Status (Network Issues)
**Setup**: API temporarily unavailable or Azure Queue down
**Steps**:
1. Stop the development server OR disconnect network briefly
2. Fill out contact form
3. Click "Send Inquiry"
4. Watch retry attempts

**Expected Result**:
- Shows "Retry attempt 2 of 3..." message
- Shows "Retry attempt 3 of 3..." message
- After 3 attempts, shows yellow "Message Pending" box
- Offers phone contact: "📞 Call (612) 408-9010"
- Offers "Try Again" option
- Form data is NOT cleared

**To Test Retry**:
- Click "Try Again" after restarting server
- Form should still have data
- Should successfully submit on retry

---

### ❌ Scenario 3: Validation Error
**Setup**: Normal operation
**Steps**:
1. Fill out form with INVALID data:
   - Name: "T" (too short)
   - Email: "invalid-email" (no @)
   - Inquiry: "Short" (too short)
2. Try to submit

**Expected Result**:
- Button is disabled due to client-side validation
- Cannot submit until data is valid

**Additional Test** (server-side validation):
1. Use browser dev tools to bypass client validation
2. Force submit with invalid data

**Expected Result**:
- Red error box appears
- Shows specific validation error
- Form data is NOT cleared
- Can correct and resubmit

---

### 🔄 Scenario 4: Retry Counter Display
**Setup**: Slow network or intermittent connection
**Steps**:
1. Use browser dev tools Network tab
2. Throttle network to "Slow 3G"
3. Fill out and submit form
4. Watch the submission process

**Expected Result**:
- First shows: "Sending..."
- Then shows: "Sending (Attempt 1/3)..."
- If fails: Blue info box: "Retry attempt 2 of 3..."
- Button updates: "Sending (Attempt 2/3)..."
- If fails: Blue info box: "Retry attempt 3 of 3..."
- Button updates: "Sending (Attempt 3/3)..."
- Finally resolves to success, pending, or error

---

### 📋 Scenario 5: All Three Contact Types
**Setup**: Normal operation
**Steps**:
1. Test Chemical Sales form
2. Test Service & Maintenance form
3. Test Equipment Sales form

**Expected Result for Each**:
- ✅ Same success message (with specific contact type mentioned)
- ⏳ Same pending message if network issues
- ❌ Same error handling
- All messages sent to same Azure Queue
- Each message has different `contactType` field:
  - `chemicals`
  - `service`
  - `sales`

---

## 🔍 Verification Checklist

After successful submission, verify:

### Frontend
- [ ] Form clears after success
- [ ] Success message shows correct contact type
- [ ] Can submit another inquiry
- [ ] Retry counter displays correctly
- [ ] Pending message shows phone number
- [ ] Error message offers retry option

### Backend (Azure Portal)
- [ ] Message appears in `webjobqueue`
- [ ] Message is Base64 encoded
- [ ] Decoded message contains:
  - [ ] `type: "contact_form"`
  - [ ] `contactType` (chemicals/service/sales)
  - [ ] All form fields
  - [ ] `timestamp`
  - [ ] `environment` (development/production)

### API Endpoint Health
- [ ] GET `/api/contact` returns healthy status
- [ ] Response time is acceptable (<1s)

---

## 🐛 Troubleshooting

### Form Won't Submit
**Check**:
1. Is name at least 2 characters?
2. Is email valid format?
3. Is inquiry at least 10 characters?
4. Is API running? (`npm run dev`)

### No Message in Queue
**Check**:
1. `.env.local` has correct `AZURE_STORAGE_CONNECTION_STRING`
2. Queue name is correct: `webjobqueue`
3. Check browser console for errors
4. Check API logs in terminal

### Always Shows Pending
**Check**:
1. Azure Storage connection string is valid
2. Storage account is accessible
3. Queue exists in Azure Portal
4. Check Azure Storage firewall rules

### Retry Doesn't Work
**Check**:
1. Form data should persist between retries
2. Error state should clear when clicking "Try Again"
3. Can submit again after fixing issues

---

## 📱 Browser Compatibility Testing

Test in multiple browsers:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Mobile-Specific Tests
- [ ] Form is readable and usable
- [ ] Success/error messages are visible
- [ ] Phone number link is clickable on phone
- [ ] Keyboard doesn't cover form fields

---

## 🎯 Load Testing (Optional)

To test under heavy load:

```bash
# Install Apache Bench
# Windows: Use WSL or install from apache.org
# Mac: brew install httpd

# Test API endpoint
ab -n 100 -c 10 -p post_data.json -T application/json http://localhost:3000/api/contact
```

**post_data.json**:
```json
{
  "name": "Load Test",
  "email": "loadtest@example.com",
  "inquiry": "This is a load test message",
  "bestTime": "anytime",
  "urgency": "normal",
  "contactType": "test"
}
```

**Expected Result**:
- API handles concurrent requests
- Queue doesn't drop messages
- Response times remain acceptable

---

## ✅ Production Readiness Checklist

Before deploying to production:

### Configuration
- [ ] `.env.production` has production values
- [ ] Azure Storage credentials are production
- [ ] `NEXT_PUBLIC_API_URL` points to production domain
- [ ] Phone number is correct: (612) 408-9010

### Testing
- [ ] All scenarios pass on production domain
- [ ] Messages reach Azure Queue
- [ ] SSL certificate is valid
- [ ] CORS is properly configured

### Monitoring
- [ ] Application Insights is configured
- [ ] Error logging works
- [ ] Queue monitoring is set up
- [ ] Alerts configured for failures

### Documentation
- [ ] Team knows how to check queue
- [ ] Process documented for handling pending messages
- [ ] Escalation path for failures defined

---

## 📊 Success Metrics

Track these metrics:
- **Submission Success Rate**: Target >95%
- **First Attempt Success**: Target >90%
- **Average Retry Count**: Target <1.5
- **Pending Rate**: Target <2%
- **Hard Failure Rate**: Target <1%
- **Time to Success**: Target <3s

---

## 🔧 Manual Testing Commands

### Test API Health
```bash
curl http://localhost:3000/api/contact
```

### Test Form Submission
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "inquiry": "This is a test inquiry message",
    "bestTime": "anytime",
    "urgency": "normal",
    "contactType": "test"
  }'
```

### Decode Azure Queue Message
```bash
# Copy Base64 message from Azure Portal
echo "YOUR_BASE64_MESSAGE" | base64 -d | jq .
```

---

## 📝 Test Results Template

Use this template to document your test results:

```
Date: _______________
Tester: _______________

Scenario 1 (Success): [ ] Pass [ ] Fail
Notes: _______________

Scenario 2 (Pending): [ ] Pass [ ] Fail  
Notes: _______________

Scenario 3 (Validation): [ ] Pass [ ] Fail
Notes: _______________

Scenario 4 (Retry Display): [ ] Pass [ ] Fail
Notes: _______________

Scenario 5 (All Types): [ ] Pass [ ] Fail
- Chemicals: [ ] Pass [ ] Fail
- Service: [ ] Pass [ ] Fail
- Sales: [ ] Pass [ ] Fail

Issues Found:
1. _______________
2. _______________

Overall Result: [ ] Ready for Production [ ] Need Fixes
```

---

## 🎉 Quick Validation

Run this script to test all three forms programmatically:

```bash
# Test all three contact types
npm run test:api

# Or manually:
node ../scripts/test-api.js
```

This will test:
- ✅ API health check
- ✅ Successful submission
- ✅ Validation errors
- ✅ All contact types

---

## Need Help?

If tests fail:
1. Check `API_SETUP.md` for configuration
2. Review `RETRY_LOGIC.md` for how it works
3. Check browser console for errors
4. Check terminal for API errors
5. Verify Azure Queue is accessible

For production issues:
- Call support line
- Check Application Insights
- Review Azure Queue for messages
- Contact the development team
