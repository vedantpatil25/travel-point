import {BriefcaseBusiness, Compass, Mountain, Plane, Sparkles, Sun} from 'lucide-react';

const icons = {
    compass: Compass,
    plane: Plane,
    briefcase: BriefcaseBusiness,
    mountain: Mountain,
    sun: Sun,
    sparkles: Sparkles
};

export default function Icon({name, size = 20}) {
    const Component = icons[name] || Compass;
    return <Component size={size} strokeWidth={1.7}/>;
}
