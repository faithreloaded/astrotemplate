import { Layout, HelpCircle, Users, CreditCard, Zap, Layers, Square, Circle, Calendar, Navigation, Settings, Tag } from 'lucide-react';

interface IconProps {
  name: string;
  size?: number;
}

export function MegaMenuIcon({ name, size = 20 }: IconProps) {
  const iconMap = {
    Layout,
    HelpCircle,
    Users,
    CreditCard,
    Zap,
    Layers,
    Square,
    Circle,
    Calendar,
    Navigation,
    Settings,
    Tag
  };

  const IconComponent = iconMap[name as keyof typeof iconMap];
  
  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} />;
}
