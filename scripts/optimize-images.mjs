/**
 * 图片优化脚本
 * --------------------------------------------------------------
 * 输入:  public/avatar/avatar.jpg (源图)
 * 输出:  public/avatar/avatar-{w}.{webp|jpg}  (多档尺寸)
 *
 * 用法:  node scripts/optimize-images.mjs
 * 或:    npm run optimize:images
 * --------------------------------------------------------------
 */
import { readdir, mkdir, stat } from 'node:fs/promises'
import { dirname, join, parse } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

// 不同目录的输出尺寸策略
const PIPELINES = [
  {
    srcDir: 'public/avatar',
    widths: [256, 384, 512, 768, 1024], // 头像：覆盖移动到桌面
    formats: ['webp', 'jpg'],
    quality: { webp: 80, jpg: 82 },
    fit: 'cover',
  },
  {
    srcDir: 'public/projects',
    widths: [640, 960, 1280], // 项目图：横幅大图
    formats: ['webp', 'jpg'],
    quality: { webp: 80, jpg: 82 },
    fit: 'cover',
    // 项目图原始是 SVG，跳过
    skip: (f) => f.toLowerCase().endsWith('.svg'),
  },
  {
    srcDir: 'public/hero',
    widths: [960, 1280, 1920], // Hero 封面
    formats: ['webp', 'jpg'],
    quality: { webp: 75, jpg: 78 },
    fit: 'cover',
  },
]

/** 递归扫描目录 */
async function walk(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await walk(p)))
    else out.push(p)
  }
  return out
}

/** 处理单张图片 */
async function processOne(srcPath, cfg) {
  if (cfg.skip && cfg.skip(srcPath)) return []
  const { name } = parse(srcPath)
  const ext = srcPath.toLowerCase().endsWith('.png') ? 'png' : 'jpg'
  const image = sharp(srcPath, { failOn: 'none' })
  const meta = await image.metadata()
  const outputs = []

  for (const w of cfg.widths) {
    if (meta.width && w > meta.width) continue // 不放大
    for (const fmt of cfg.formats) {
      const outName = `${name}-${w}.${fmt}`
      const outPath = join(dirname(srcPath), outName)
      let pipeline = sharp(srcPath).resize({
        width: w,
        fit: cfg.fit,
        withoutEnlargement: true,
      })
      if (fmt === 'webp') {
        pipeline = pipeline.webp({ quality: cfg.quality.webp })
      } else {
        pipeline = pipeline.jpeg({ quality: cfg.quality.jpg, mozjpeg: true })
      }
      await pipeline.toFile(outPath)
      outputs.push(outPath)
    }
  }
  return outputs
}

async function main() {
  let totalIn = 0
  let totalOut = 0
  let totalInBytes = 0
  let totalOutBytes = 0

  for (const cfg of PIPELINES) {
    const dir = join(root, cfg.srcDir)
    try {
      await stat(dir)
    } catch {
      continue // 目录不存在则跳过
    }
    const files = await walk(dir)
    // 只处理源图：避免重复处理已生成的 -w.webp
    const sources = files.filter(
      (f) =>
        !/-\d+\.(webp|jpg|png)$/i.test(f) &&
        /\.(jpe?g|png)$/i.test(f),
    )
    for (const src of sources) {
      const inSize = (await stat(src)).size
      totalIn++
      totalInBytes += inSize
      const outs = await processOne(src, cfg)
      for (const o of outs) {
        const outSize = (await stat(o)).size
        totalOut++
        totalOutBytes += outSize
        const rel = o.replace(root + '/', '')
        const ratio = ((1 - outSize / inSize) * 100).toFixed(0)
        console.log(`  ✓ ${rel}  ${(outSize / 1024).toFixed(1)} KB  (-${ratio}%)`)
      }
    }
  }

  console.log('')
  console.log(
    `📊 ${totalIn} 源图 → ${totalOut} 产物,  ` +
      `${(totalInBytes / 1024).toFixed(1)} KB → ${(totalOutBytes / 1024).toFixed(1)} KB`,
  )
}

main().catch((err) => {
  console.error('❌ 优化失败:', err)
  process.exit(1)
})
