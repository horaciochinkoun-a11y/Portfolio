const fs = require('fs');
let code = fs.readFileSync('src/admin/ContentAdmin.tsx', 'utf8');

code = code.replace(
  "{ key: 'showSocialLinksNavbar', label: 'Réseaux Sociaux (Menu haut)' },\n                  { key: 'showSocialLinksFooter', label: 'Réseaux Sociaux (Pied de page)' }",
  ""
);
code = code.replace(
  ",\n                  { key: 'showSocialLinksFooter', label: 'Réseaux Sociaux (Pied de page)' }",
  ""
);
code = code.replace(
  "{ key: 'showFloatingWhatsApp', label: 'Bouton WhatsApp flottant' },\n                  { key: 'showSocialLinksNavbar', label: 'Réseaux Sociaux (Menu haut)' }",
  "{ key: 'showFloatingWhatsApp', label: 'Bouton WhatsApp flottant' }"
);

fs.writeFileSync('src/admin/ContentAdmin.tsx', code);
console.log('Fixed admin toggles');
