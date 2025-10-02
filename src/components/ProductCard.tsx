import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  image: string;
  path: string;
}

const ProductCard = ({ title, image, path }: ProductCardProps) => {
  return (
    <Link to={path}>
      <Card className="group overflow-hidden border-2 border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-xl">
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-6 text-center bg-gradient-to-b from-transparent to-accent/5">
            <h3 className="font-semibold text-lg text-primary">{title}</h3>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
