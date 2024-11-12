export type INavItems = {
    label: string;
    path: string
}

export interface IFeature {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    benefits: string[];
    category: 'community' | 'cultural' | 'welfare' | 'education';
}


export interface IEvents {
    title: string;
    date: string;
    description: string;
    location: string;
    image: string;
}