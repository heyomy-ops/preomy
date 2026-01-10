# PREOMY CMS Setup Guide

This is the Content Management System for the PREOMY website. It allows the website owner to add, edit, and delete portfolio projects without writing code.

## 🚀 Setup Instructions

### Step 1: Create a Sanity Account

1. Go to [sanity.io](https://www.sanity.io/)
2. Click **"Get started"** (it's free!)
3. Sign up with Google or Email

### Step 2: Create a New Sanity Project

1. After login, click **"Create new project"**
2. Name it: `PREOMY CMS`
3. Choose **"Create empty project"**
4. Select **"Production"** dataset
5. Copy your **Project ID** (looks like: `abc123xyz`)

### Step 3: Update Configuration Files

#### In `cms/sanity.config.js`:
```js
projectId: 'YOUR_PROJECT_ID',  // Replace with your actual Project ID
```

#### In main project `.env` file (create if doesn't exist):
```
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

### Step 4: Install CMS Dependencies

```bash
cd cms
npm install
```

### Step 5: Run the CMS Locally

```bash
npm run dev
```

This will open the Sanity Studio at `http://localhost:3333`

### Step 6: Deploy the CMS

```bash
npm run deploy
```

This will deploy to `preomy.sanity.studio` (or choose your own name)

---

## 📝 How to Use the CMS

### Adding a Project

1. Go to your Sanity Studio URL
2. Login with your account
3. Click **"Portfolio Projects"** in the sidebar
4. Click **"Create new document"** (+ icon)
5. Fill in:
   - **Title**: Project name
   - **Slug**: Click "Generate" (auto-creates URL-friendly name)
   - **Image**: Upload project photo
   - **Category**: Select type (2BHK, 3BHK, Villa, Kitchen, Wardrobe)
   - **Location**: Select city (Raipur, Bilaspur, Korba)
   - **Area**: e.g., "1500 sq.ft"
   - **Style**: Select design style
   - **Description**: Short description (max 200 chars)
   - **Featured**: Check if you want it on homepage
6. Click **"Publish"**

### Editing a Project

1. Click on the project in the list
2. Make your changes
3. Click **"Publish"**

### Deleting a Project

1. Click on the project
2. Click the **⋯** menu (top right)
3. Select **"Delete"**
4. Confirm

---

## 🔗 Important URLs

| Purpose | URL |
|---------|-----|
| Main Website | https://preomy.in |
| CMS Dashboard | https://preomy.sanity.studio |
| Sanity Manage | https://www.sanity.io/manage |

---

## 📧 Need Help?

Contact the developer or check [Sanity Documentation](https://www.sanity.io/docs)
