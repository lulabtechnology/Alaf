import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PiggyBank, Clock3, Goal } from 'lucide-react';


const items = [
{
icon: PiggyBank,
title: 'Inversión inteligente',
desc: 'Estructuramos el plan para optimizar tiempo y costo por objetivo académico.'
},
{
icon: Clock3,
title: 'Progreso medible',
desc: 'Métricas claras por semana y simulacros periódicos para validar avances.'
},
{
icon: Goal,
title: 'Resultados reales',
desc: 'Metas y checkpoints definidos para asegurar el logro esperado.'
}
];


export function Benefits() {
return (
<section className="section">
<div className="container-max">
<h2 className="h2 mb-8">Prioriza tu dinero</h2>
<div className="grid md:grid-cols-3 gap-6">
{items.map((it, i) => (
<Card key={i}>
<CardHeader>
<it.icon className="w-8 h-8 text-white" />
<CardTitle className="mt-4">{it.title}</CardTitle>
<CardDescription>{it.desc}</CardDescription>
</CardHeader>
<CardContent />
</Card>
))}
</div>
</div>
</section>
);
}
