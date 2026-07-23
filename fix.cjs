const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

const target = `{/* Right Side: Clean Portrait exactly like the Aquilas Dev screenshot */}`;

const lines = code.split('\n');
const index = lines.findIndex(line => line.includes(target));

if (index !== -1) {
    const fixedEnd = `        {/* Right Side: Clean Portrait exactly like the Aquilas Dev screenshot */}
        {showHeroImage && (
          <div className="lg:col-span-5 flex justify-center items-center relative" id="hero-visual">
            <div className="relative w-full max-w-[420px] aspect-[4/5]">
              <img
                src={heroImageSrc}
                alt="Horacio Chinkoun"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        )}
      </div>

      {/* Bounce Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 text-slate-400 select-none animate-bounce" id="scroll-indicator">
        <span className="font-mono text-[9px] uppercase tracking-widest text-[#181615]">Défiler pour explorer</span>
        <ArrowDown className="w-4.5 h-4.5 text-[#181615]" />
      </div>
    </section>
  );
}`;
    
    code = lines.slice(0, index).join('\n') + '\n' + fixedEnd;
    fs.writeFileSync('src/components/Hero.tsx', code);
    console.log('Fixed');
}
