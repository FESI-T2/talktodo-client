// generateSprite.ts
import fs from 'fs';
import path from 'path';

import { globSync } from 'glob';
import { parse, HTMLElement } from 'node-html-parser';
import { optimize, type Config as SVGOConfig } from 'svgo';

// 아이콘 파일 모으기
const svgFiles = globSync('assets/icons/*.svg');
const brandIcons = ['kakao', 'google', 'naver', 'logo', 'image', 'profile'];

const svgoConfig: SVGOConfig = {
  multipass: true,
  plugins: ['preset-default'],
};

// style="fill: ..." 제거
function stripInlineFillStyle(el: HTMLElement) {
  const style = el.getAttribute('style');
  if (!style) return;
  const next = style
    .replace(/(^|;)\s*fill\s*:\s*[^;]+;?/gi, (m, p1) => (p1 ? p1 : ''))
    .replace(/^\s*;|;\s*$/g, '')
    .trim();
  if (next) el.setAttribute('style', next);
  else el.removeAttribute('style');
}

// fill/stroke currentColor 강제
function enforceCurrentColor(root: HTMLElement) {
  const q: HTMLElement[] = [];
  root.childNodes.forEach((n) => n instanceof HTMLElement && q.push(n));
  while (q.length) {
    const el = q.shift()!;
    el.childNodes.forEach((n) => n instanceof HTMLElement && q.push(n));
    stripInlineFillStyle(el);

    const tag = el.tagName?.toLowerCase();
    if (!tag) continue;
    if (
      tag === 'path' ||
      tag === 'rect' ||
      tag === 'circle' ||
      tag === 'ellipse' ||
      tag === 'polygon' ||
      tag === 'polyline' ||
      tag === 'g' ||
      tag === 'line'
    ) {
      const fill = el.getAttribute('fill');
      if (fill && fill !== 'none') {
        el.setAttribute('fill', 'currentColor');
      }
      const stroke = el.getAttribute('stroke');
      if (stroke && stroke !== 'none') {
        el.setAttribute('stroke', 'currentColor');
      }
    }
  }
}

const symbols: string[] = [];

svgFiles.forEach((file) => {
  const raw = fs.readFileSync(file, 'utf-8');
  const fileName = path.basename(file, '.svg');
  const isBrand = brandIcons.includes(fileName);

  // svgo 최적화
  const { data } = optimize(raw, svgoConfig);

  const svgElement = parse(data).querySelector('svg') as HTMLElement | null;
  if (!svgElement) {
    console.warn(`⚠️  <svg> 파싱 실패: ${file}`);
    return;
  }

  // <symbol> 생성 + viewBox 계승
  const symbolElement = parse('<symbol/>').querySelector('symbol') as HTMLElement;
  symbolElement.setAttribute('id', fileName);
  const viewBox = svgElement.getAttribute('viewBox');
  if (viewBox) symbolElement.setAttribute('viewBox', viewBox);

  // 자식 노드 이동
  svgElement.childNodes.forEach((child) => {
    if (child instanceof HTMLElement) symbolElement.appendChild(child);
  });

  // 비브랜드면 currentColor 강제
  if (!isBrand) {
    enforceCurrentColor(symbolElement);
  }

  symbols.push(symbolElement.toString());
});

// 최종 sprite
const sprite = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">${symbols.join('')}</svg>`;
fs.mkdirSync('public', { recursive: true });
fs.writeFileSync('public/sprite.svg', sprite, 'utf-8');
console.log(`✅ 스프라이트 생성 완료: public/sprite.svg (총 ${symbols.length}개)`);
