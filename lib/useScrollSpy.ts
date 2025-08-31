"use client";
import { useEffect, useState } from "react";


export function useScrollSpy(ids: string[], offset = 120) {
const [active, setActive] = useState<string>(ids[0] ?? "");


useEffect(() => {
const sections = ids
.map((id) => document.getElementById(id))
.filter(Boolean) as HTMLElement[];


const io = new IntersectionObserver(
(entries) => {
entries.forEach((e) => {
if (e.isIntersecting) {
const id = e.target.getAttribute("id");
if (id) setActive(id);
}
});
},
{ rootMargin: `-${offset}px 0px -60% 0px`, threshold: 0.01 }
);


sections.forEach((s) => io.observe(s));
return () => io.disconnect();
}, [ids.join("|")]);

return active;
}