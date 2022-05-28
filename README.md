# Designory Technical Evaluation

This repo contains NightwatchJS automated tests required by Technical Evalluation assignment. 

### Step 1
Run `npx nightwatch -e chrome tests/simple_test.js ` to verify NightWatchJS works corretly.

### Step 2 (Menu Verification)
Run `npx nightwatch -e chrome tests/menu_verification.js --headless`

### Step 3 (Cookie Verification)
Run `npx nightwatch -e chrome tests/cookie_verification.js --headless`

### Step 4 (Location Verification)
Run `npx nightwatch -e chrome tests/location_verification.js --headless`