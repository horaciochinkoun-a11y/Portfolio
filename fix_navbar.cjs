const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

code = code.replace(
  "interface NavbarProps {\n  currentRouteType?: 'home' | 'project';\n}",
  "interface NavbarProps {\n  currentRouteType?: 'home' | 'project';\n  content?: any;\n}"
);

code = code.replace(
  "export default function Navbar({ currentRouteType = 'home' }: NavbarProps) {",
  "export default function Navbar({ currentRouteType = 'home', content }: NavbarProps) {\n  const showSocials = content?.displaySettings?.showSocialLinksNavbar ?? true;"
);

fs.writeFileSync('src/components/Navbar.tsx', code);
console.log('Fixed Navbar props');
