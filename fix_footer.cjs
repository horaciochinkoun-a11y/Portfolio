const fs = require('fs');
let code = fs.readFileSync('src/components/Footer.tsx', 'utf8');

code = code.replace(
  "export default function Footer() {",
  "export default function Footer({ content }: any) {"
);

fs.writeFileSync('src/components/Footer.tsx', code);
console.log('Fixed Footer props');
