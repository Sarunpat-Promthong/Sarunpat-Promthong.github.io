# Sarunpat Promthong · Portfolio

Personal portfolio site built with **Next.js (App Router), TypeScript and Tailwind CSS**, exported as a static site and deployed to GitHub Pages.

Live: https://sarunpat-promthong.github.io

## Highlights

- Case study of the sign-up → OTP → browse → buy flow I built for [Hipsbook](https://www.hipsbook.com)
- Static export (`output: "export"`), no server needed
- Light theme, keyboard focus styles, respects reduced-motion
- All copy lives in `lib/content.ts`, separate from layout code

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in ./out
```

## Structure

```
app/
  layout.tsx     fonts, metadata
  page.tsx       the single page
  globals.css    color tokens (light/dark) + Tailwind
components/
  Phone.tsx      screenshot inside a device frame
  CopyEmail.tsx  copy-email button
lib/
  content.ts     all text, projects, skills
public/
  shots/         product screenshots (webp)
```

---

## วิธี deploy ขึ้น GitHub Pages (ภาษาไทย)

1. สร้าง repo ใหม่ชื่อ **`Sarunpat-Promthong.github.io`** (ต้องตรงกับ username เป๊ะ ๆ) เพื่อให้ได้ URL สั้น `https://sarunpat-promthong.github.io`
2. push โค้ดทั้งหมดในโฟลเดอร์นี้ขึ้น branch `main`
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Sarunpat-Promthong/Sarunpat-Promthong.github.io.git
   git push -u origin main
   ```
3. ไปที่ repo → **Settings → Pages → Build and deployment → Source** เลือก **GitHub Actions**
4. รอ workflow `Deploy to GitHub Pages` ในแท็บ Actions รันเสร็จ (ราว 1–2 นาที) เว็บจะขึ้นที่ URL ด้านบน

ถ้าอยากตั้งชื่อ repo อื่น เช่น `portfolio` ให้แก้ `BASE_PATH: ""` ใน `.github/workflows/deploy.yml` เป็น `BASE_PATH: /portfolio` แล้ว URL จะเป็น `https://sarunpat-promthong.github.io/portfolio`

ทางเลือกอื่น: import repo เข้า [Vercel](https://vercel.com) ได้เลยโดยไม่ต้องตั้งค่าอะไร

### แก้เนื้อหา

แก้ข้อความทั้งหมดได้ที่ `lib/content.ts` ไฟล์เดียว เพิ่มภาพหน้าจอใหม่ได้ที่ `public/shots/` (แนะนำ .webp ขนาด 540×1174 (ภาพเต็มจอ iPhone))
