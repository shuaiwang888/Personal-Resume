/**
 * Analytics 客户端 —— fire-and-forget。
 *
 * 三种传输策略（按可靠性排序）：
 * - sendBeacon: outbound_link / 页面卸载前最后一次点击（survives navigation）
 * - fetch keepalive: cta_click（点击后不立即跳走,可等响应）
 * - fetch 普通: app_loaded / section_impression（首次加载,无需 keepalive）
 *
 * VITE_API_BASE 为空时静默 no-op（开发期默认、本地可关埋点）。
 *
 * 安全:
 * - 不带 cookie / credential
 * - 不带 PII
 * - session_id 内存生成（不放 localStorage,避免 GDPR cookie 横幅）
 */

import { SITE } from './constants'

const API_BASE = (import.meta.env.VITE_API_BASE || '').replace(/\/$/, '')

let _sessionId: string | null = null
function getSessionId(): string {
  if (_sessionId) return _sessionId
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    _sessionId = crypto.randomUUID()
  } else {
    _sessionId = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`
  }
  return _sessionId
}

export type TrackedEvent = {
  type: 'app_loaded' | 'section_impression' | 'cta_click' | 'outbound_link' | 'page_view'
  section?: string
  label?: string
  work_id?: string
  project_id?: string
  href?: string
  ts?: number
}

const ENABLED = API_BASE.length > 0

if (!ENABLED && import.meta.env.DEV) {
  console.info('[analytics] disabled (VITE_API_BASE not set)')
}

function endpoint(): string {
  return `${API_BASE}/api/events`
}

function headers(): HeadersInit {
  return {
    'Content-Type': 'application/json',
    'X-Session-Id': getSessionId(),
  }
}

/**
 * 默认传输：普通 fetch（首次加载类事件）。
 * 失败静默 —— analytics 失败不该影响 UX。
 */
export function trackEvent(event: TrackedEvent): void {
  if (!ENABLED) return
  const body = JSON.stringify({ ...event, ts: event.ts ?? Date.now() })
  try {
    fetch(endpoint(), {
      method: 'POST',
      body,
      headers: headers(),
      keepalive: true,
    }).catch(() => {})
  } catch {
    // 静默
  }
}

/**
 * 关键点击（CTA / outbound link）专用 —— 用 sendBeacon 确保页面跳转/关闭前送达。
 * sendBeacon 不支持自定义 Content-Type? 不,支持。POST + Blob(application/json) 是规范用法。
 */
export function trackClick(event: TrackedEvent): void {
  if (!ENABLED) return
  const body = JSON.stringify({ ...event, ts: event.ts ?? Date.now() })
  try {
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const blob = new Blob([body], { type: 'application/json' })
      const ok = navigator.sendBeacon(endpoint(), blob)
      if (ok) return
    }
    // fallback: fetch keepalive（iOS < 17.4 sendBeacon 偶发失败时）
    fetch(endpoint(), {
      method: 'POST',
      body,
      headers: headers(),
      keepalive: true,
    }).catch(() => {})
  } catch {
    // 静默
  }
}

export const analytics = {
  enabled: ENABLED,
  endpoint: endpoint(),
  sessionId: getSessionId,
  site: SITE,
} as const
