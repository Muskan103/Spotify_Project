import { Card, CardContent } from "@/components/ui/card";

interface Props {
  title: string;
  date: string;
  image: string;
}

export default function ResourceCard({ title, date, image }: Props) {
  return (
    <Card className="overflow-hidden bg-white">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <CardContent className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
      </CardContent>
    </Card>
  );
}
