import Cover from "@/components/Tribute/Cover";
import Biography from "@/components/Tribute/Biography";
import OrderOfService from "@/components/Tribute/OrderOfService";
import Hymns from "@/components/Tribute/Hymns";
import Tributes from "@/components/Tribute/Tributes";
import Memory from "@/components/Tribute/Memory";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden bg-texture">
//       <Cover />
//       <Biography />
//       <OrderOfService />
//       <Hymns />
//       <Tributes />
      
//       <footer className="py-12 bg-primary text-primary-foreground text-center">
//         <p className="font-serif italic text-lg opacity-80">Forever in our hearts.</p>
//         <p className="text-sm mt-4 opacity-50 uppercase tracking-widest">© 2026 The Ajayi Family</p>
//       </footer>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="tribute-page bg-background font-sans text-foreground overflow-x-hidden bg-texture">
      <Cover />
      <div id="biography">
      <Biography />
      </div>
      <OrderOfService />
      <Hymns />
      <div id="tributes">
      <Tributes />
      </div>
      <div id="memory-wall">
        <Memory />
      </div>

      <footer className="py-12 bg-primary text-primary-foreground text-center">
        <p className="font-serif italic text-lg opacity-80">
          Forever in our hearts.
        </p>
        <p className="text-sm mt-4 opacity-50 uppercase tracking-widest">
          © 2026 The Ajayi Family
        </p>
      </footer>
    </div>
  );
}

