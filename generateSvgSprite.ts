// generateSprite.ts
import fs from 'fs';

import path from 'path';

import { globSync } from 'glob';
import { HTMLElement, parse } from 'node-html-parser';

// 프로젝트 내에 있는 모든 SVG 파일 모은다.
const svgFiles = globSync('assets/icons/*.svg');

const symbols: string[] = [];

svgFiles.forEach((file) => {
  const code = fs.readFileSync(file, 'utf-8');

  console.log(code);
  const svgElement = parse(code).querySelector('svg') as HTMLElement;
  const symbolElement = parse(`<symbol/>`).querySelector('symbol') as HTMLElement;
  const fileName = path.basename(file, '.svg');

  svgElement.childNodes.forEach((child) => symbolElement.appendChild(child));

  symbolElement.setAttribute('id', fileName);
  if (svgElement.attributes.viewBox) {
    symbolElement.setAttribute('viewBox', svgElement.attributes.viewBox);
  }

  symbolElement.setAttribute('fill', 'none');

  symbols.push(symbolElement.toString());
});

const svgSprite = `<svg xmlns="http://www.w3.org/2000/svg"  style="display:none">${symbols.join('')}</svg>`;
fs.writeFileSync('public/sprite.svg', svgSprite);
