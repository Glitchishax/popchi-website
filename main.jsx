
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Section=({title,children})=><section className="py-20 px-6 max-w-6xl mx-auto"><h2 className="text-4xl font-bold mb-8">{title}</h2>{children}</section>

function App(){
return <div className="bg-black text-white min-h-screen">
<nav className="flex justify-between p-6 border-b border-zinc-800">
<h1 className="text-2xl font-bold text-orange-500">POPCHI</h1>
<div className="space-x-5"><a href="#menu">Menu</a><a href="#about">About</a><a href="#contact">Contact</a></div>
</nav>

<section className="text-center py-32 bg-gradient-to-r from-orange-600 to-red-600">
<h1 className="text-6xl font-extrabold mb-4">Guwahati's Crispiest Chicken</h1>
<p className="text-xl">Flavor Packed Crunch</p>
<button className="mt-8 bg-white text-black px-6 py-3 rounded-xl">Order Now</button>
</section>

<Section title="Signature Flavors">
<div className="grid md:grid-cols-4 gap-4">
{['Peri Peri','BBQ','Honey Butter','Lemon Garlic','Classic Crispy','Hot & Spicy','Cheese Burst','House Special'].map(x=>
<div key={x} className="bg-zinc-900 p-6 rounded-2xl">{x}</div>)}
</div>
</Section>

<Section title="Best Sellers">
<div className="grid md:grid-cols-3 gap-6">
{['Chicken Bucket','Pop Chicken','Wings Combo'].map(x=><div key={x} className="bg-zinc-900 p-8 rounded-2xl">{x}</div>)}
</div>
</Section>

<Section title="About POPCHI">
<p className="text-zinc-300">A modern fried chicken brand delivering bold flavors, crispy texture and affordable meals.</p>
</Section>

<Section title="Contact">
<div id="contact">
<p>Add address, phone number, WhatsApp, Swiggy and Zomato links.</p>
</div>
</Section>

<footer className="border-t border-zinc-800 p-6 text-center">© 2026 POPCHI</footer>
</div>
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
