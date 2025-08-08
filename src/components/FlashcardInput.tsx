import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Flashcard } from "@/types/flashcard";

interface FlashcardInputProps {
  onLoadCards: (cards: Flashcard[]) => void;
}

const FlashcardInput: React.FC<FlashcardInputProps> = ({ onLoadCards }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const { toast } = useToast();

  const handleLoadCards = () => {
    const lines = inputValue.split("\n").filter(line => line.trim() !== "");
    const newCards: Flashcard[] = [];
    let hasError = false;

    lines.forEach((line, index) => {
      const parts = line.split(" - ");
      if (parts.length >= 2) {
        const front = parts[0].trim();
        const back = parts.slice(1).join(" - ").trim(); // Join remaining parts in case definition has " - "
        if (front && back) {
          newCards.push({ id: `card-${Date.now()}-${index}`, front, back });
        } else {
          toast({
            title: "Input Error",
            description: `Line ${index + 1} is incomplete. Please ensure both front and back are present.`,
            variant: "destructive",
          });
          hasError = true;
        }
      } else {
        toast({
          title: "Input Error",
          description: `Line ${index + 1} is not in 'front - back' format.`,
          variant: "destructive",
        });
        hasError = true;
      }
    });

    if (!hasError && newCards.length > 0) {
      onLoadCards(newCards);
      toast({
        title: "Success",
        description: `${newCards.length} flashcards loaded!`,
      });
    } else if (!hasError && newCards.length === 0) {
      toast({
        title: "No Cards Loaded",
        description: "Please enter some flashcards in 'front - back' format.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Create Your Flashcards</h2>
      <p className="text-gray-600 mb-4 text-center">
        Enter your words in "front - back" format, one per line.
      </p>
      <Textarea
        placeholder="Example:&#10;Hello - Hola&#10;Goodbye - Adiós&#10;Cat - Gato"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        rows={10}
        className="mb-4 resize-y"
      />
      <Button onClick={handleLoadCards} className="w-full">
        Load Flashcards
      </Button>
    </div>
  );
};

export default FlashcardInput;