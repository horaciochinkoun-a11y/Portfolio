const fs = require('fs');
let code = fs.readFileSync('src/components/About.tsx', 'utf8');

code = code.replace(
  "export default function About({ content }: AboutProps) {",
  "export default function About({ content }: AboutProps) {\n  const showAboutQuote = content?.displaySettings?.showAboutQuote ?? true;"
);

const target = `            {/* West African constraint card inside biography */}
            <div className=\"mt-8 pt-6 border-t border-[#e7e2d8] flex items-start space-x-3\">
              <span className=\"text-xl text-brand-accent font-serif font-bold\">“</span>
              <p className=\"font-sans text-xs text-[#292625]/85 italic leading-relaxed\">
                {aboutQuoteText}
              </p>
            </div>`;

const replacement = `            {/* West African constraint card inside biography */}
            {showAboutQuote && (
              <div className=\"mt-8 pt-6 border-t border-[#e7e2d8] flex items-start space-x-3\">
                <span className=\"text-xl text-brand-accent font-serif font-bold\">“</span>
                <p className=\"font-sans text-xs text-[#292625]/85 italic leading-relaxed\">
                  {aboutQuoteText}
                </p>
              </div>
            )}`;

code = code.replace(target, replacement);

fs.writeFileSync('src/components/About.tsx', code);
console.log('Fixed About quote');
