# Images Folder Structure

This folder contains all the images used in the PixieClean marketing website.

## 📁 Folder Structure

```
public/images/
├── screenshots/     # App screenshots and mockups
├── icons/          # Custom icons and logos
├── backgrounds/    # Background images and textures
└── README.md      # This file
```

## 📱 Screenshots Folder

Add your app screenshots here to replace the placeholder components:

### Recommended File Names:
- `hero-screenshot.png` - Main app screenshot for hero section
- `duplicate-detection.png` - Screenshot showing duplicate detection
- `device-optimization.png` - Screenshot showing device optimization
- `progress-dashboard.png` - Screenshot showing progress tracking
- `best-shot-selector.png` - Screenshot showing best shot selection
- `achievements.png` - Screenshot showing achievements dashboard

### Image Specifications:
- **Format**: PNG or JPG
- **Size**: 256x500px (phone aspect ratio)
- **Quality**: High resolution for crisp display
- **Background**: Transparent or dark background preferred

## 🎨 Icons Folder

Add custom icons here:
- `app-icon.png` - Your app icon
- `logo.png` - Company logo
- Custom feature icons

## 🖼️ Backgrounds Folder

Add background images here:
- `hero-bg.jpg` - Hero section background
- `pattern.png` - Texture patterns
- `gradient.png` - Custom gradients

## 🔧 How to Use Images

### In Components:
```tsx
import Image from "next/image";

// Use in components
<Image 
  src="/images/screenshots/duplicate-detection.png"
  alt="Duplicate Detection Screenshot"
  width={256}
  height={500}
/>
```

### In AppScreenshot Component:
```tsx
<AppScreenshot
  src="/images/screenshots/duplicate-detection.png"
  alt="Duplicate Detection"
  delay={0.2}
/>
```

## 📋 To-Do List

1. **Add App Screenshots**:
   - [ ] Hero section screenshot
   - [ ] Duplicate detection screenshot
   - [ ] Device optimization screenshot
   - [ ] Progress dashboard screenshot
   - [ ] Best shot selector screenshot
   - [ ] Achievements screenshot

2. **Add Icons**:
   - [ ] App icon (high resolution)
   - [ ] Company logo
   - [ ] Feature icons

3. **Add Backgrounds**:
   - [ ] Hero background image
   - [ ] Pattern textures
   - [ ] Custom gradients

## 🎯 Tips

- **Optimize images** for web (compress PNG/JPG files)
- **Use descriptive names** for easy identification
- **Maintain consistent aspect ratios** for screenshots
- **Test on different devices** to ensure responsiveness
- **Keep file sizes reasonable** for fast loading

## 🔄 Updating the Website

Once you add images to these folders, you can update the components to use them:

1. Replace `PlaceholderScreenshot` with `AppScreenshot`
2. Update the `src` prop to point to your image
3. Test the website to ensure images display correctly

Example:
```tsx
// Before (placeholder)
<PlaceholderScreenshot title="..." description="..." />

// After (real screenshot)
<AppScreenshot 
  src="/images/screenshots/duplicate-detection.png"
  alt="Duplicate Detection"
/>
``` 