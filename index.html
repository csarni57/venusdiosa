# Venus Diosa – Luxury Nail Artistry Booking Page

A goddess-inspired, rose-gold themed appointment booking page for Venus Diosa nail salon, with Google Calendar integration and full client privacy protection.

---

## File Structure

```
venus-diosa/
├── index.html    ← Page structure & markup
├── styles.css    ← Rose-gold / blush luxury theme
├── app.js        ← Booking logic & Google Calendar integration
└── README.md     ← This guide
```

---

## 1. Local Development (IDE Setup)

1. Open the `venus-diosa/` folder in your IDE (VS Code, WebStorm, etc.)
2. Install the **Live Server** extension (VS Code) or equivalent
3. Right-click `index.html` → **Open with Live Server**
4. The page opens at `http://127.0.0.1:5500`

No build tools or package manager needed — plain HTML, CSS, and JavaScript.

---

## 2. Customise the Page

### Salon name / tagline
Edit `index.html` — search for "Venus Diosa" to find all instances.

### Services & prices
Edit each `<article class="service-card">` block in `index.html`:
```html
data-service="Service Name"
data-duration="60"      <!-- minutes -->
data-price="55"         <!-- USD, no symbol -->
```

### Available / blocked times
In `app.js`, edit `ALL_TIMES` and `UNAVAILABLE_TIMES` arrays.

### Timezone
In `app.js`, update `GCAL_CONFIG.timeZone`, e.g. `'America/New_York'`.

### Colors
All colors are CSS variables at the top of `styles.css` inside `:root { }`.
Key variables: `--rose-gold`, `--rose-gold-lt`, `--blush`, `--blush-deep`.

---

## 3. GitHub Repository Setup

```bash
cd venus-diosa/
git init
git add .
git commit -m "Initial commit – Venus Diosa booking page"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/venus-diosa.git
git branch -M main
git push -u origin main
```

---

## 4. Deploy Online – GitHub Pages (Free)

1. Push your code to GitHub (step above)
2. Go to your GitHub repo → **Settings** → **Pages**
3. Source: `Deploy from a branch` → `main` / `/ (root)` → **Save**
4. Live at: `https://YOUR_USERNAME.github.io/venus-diosa/`

Every push to `main` auto-redeploys. Takes about 60 seconds.

---

## 5. Google Calendar Integration

### Step 1 — Google Cloud Setup
1. Go to https://console.cloud.google.com
2. Create a project (e.g. "Venus Diosa")
3. **APIs & Services** → **Library** → enable **Google Calendar API**

### Step 2 — OAuth Credentials
1. **APIs & Services** → **Credentials** → **Create Credentials** → **OAuth 2.0 Client ID**
2. Application type: **Web application**
3. Authorized JavaScript Origins:
   - `http://localhost:5500` (local dev)
   - `https://YOUR_USERNAME.github.io` (production)
4. Copy the **Client ID**

### Step 3 — OAuth Consent Screen
1. **APIs & Services** → **OAuth consent screen** → External
2. Add scope: `https://www.googleapis.com/auth/calendar.events`
3. Add the salon owner's Google account as a **Test user**

### Step 4 — Update index.html
Add before `</body>`:
```html
<script src="https://accounts.google.com/gsi/client" async></script>
```

### Step 5 — Update app.js
```js
const GCAL_CONFIG = {
  clientId:   'YOUR_CLIENT_ID.apps.googleusercontent.com',
  calendarId: 'primary',
  scopes:     'https://www.googleapis.com/auth/calendar.events',
  timeZone:   'America/Chicago',  // ← your timezone
};
```
Then uncomment the `getGoogleAccessToken()` block and the `fetch()` call inside `confirmBooking()`. Remove the `simulateDelay` demo line.

### Client Privacy
Events are created with:
```js
visibility: 'private'            // Only the artist sees client details
guestsCanSeeOtherGuests: false   // Clients cannot see other clients
```

---

## 6. Optional Upgrades

| Feature | How |
|---|---|
| Block booked times automatically | Query Google Calendar free/busy API |
| Confirmation emails | Add EmailJS or Netlify/Vercel serverless function |
| Accept deposits | Integrate Stripe.js before the confirm step |
| Custom domain | Add in GitHub Pages settings (e.g. `book.venusdiosa.com`) |
| Instagram gallery | Embed an Instagram feed widget above the booking form |

---

© Venus Diosa – All rights reserved.
