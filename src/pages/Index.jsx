import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-4xl mx-auto text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Collectibles</h1>
        <p className="text-lg text-gray-700">Discover and explore my exclusive collection of luxury items.</p>
      </header>
      <main className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Luxury Watch</CardTitle>
          </CardHeader>
          <CardContent>
            <img src="/images/luxury-watch.jpg" alt="Luxury Watch" className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-700">A timeless piece of craftsmanship and elegance.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Vintage Car</CardTitle>
          </CardHeader>
          <CardContent>
            <img src="/images/vintage-car.jpg" alt="Vintage Car" className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-700">A classic car that represents a bygone era of luxury.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Rare Painting</CardTitle>
          </CardHeader>
          <CardContent>
            <img src="/images/rare-painting.jpg" alt="Rare Painting" className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-700">An exquisite piece of art that captivates the soul.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Designer Handbag</CardTitle>
          </CardHeader>
          <CardContent>
            <img src="/images/designer-handbag.jpg" alt="Designer Handbag" className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-700">A symbol of style and sophistication.</p>
          </CardContent>
        </Card>
      </main>
      <footer className="w-full max-w-4xl mx-auto text-center py-8">
        <Separator className="my-4" />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="outline">Contact Me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to get in touch!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </footer>
    </div>
  );
};

export default Index;