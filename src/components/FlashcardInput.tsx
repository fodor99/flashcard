import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Flashcard } from "@/types/flashcard";
import defaultContent from '../../default.md?raw';
import dlContent from '../../dl.md?raw';

import adjContent from '../../ADJ.txt?raw';
import adpContent from '../../ADP.txt?raw';
import advContent from '../../ADV.txt?raw';
import auxContent from '../../AUX.txt?raw';
import cconjContent from '../../CCONJ.txt?raw';
import detContent from '../../DET.txt?raw';
import nounContent from '../../NOUN.txt?raw';
import numContent from '../../NUM.txt?raw';
import pronContent from '../../PRON.txt?raw';
import propnContent from '../../PROPN.txt?raw';
import sconjContent from '../../SCONJ.txt?raw';
import verbContent from '../../VERB.txt?raw';


interface FlashcardInputProps {
  onLoadCards: (cards: Flashcard[]) => void;
}

const FlashcardInput: React.FC<FlashcardInputProps> = ({ onLoadCards }) => {
  const [inputValue, setInputValue] = useState<string>(defaultContent);
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) { // Prevent new line on Enter, allow Shift+Enter for new line
      event.preventDefault();
      handleLoadCards();
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
        onKeyDown={handleKeyDown}
        rows={10}
        className="mb-4 resize-y"
      />
      <div className="flex flex-row gap-2 flex-wrap w-full">
      <Button onClick={() => setInputValue(defaultContent)} >
        Default Flashcards
      </Button>
      <Button onClick={() => setInputValue(dlContent)}>
        DL Flashcards
      </Button>

      <Button onClick={() => setInputValue(adjContent)}>
        ADJ
      </Button>
      <Button onClick={() => setInputValue(adpContent)}>
        ADP
      </Button>
      <Button onClick={() => setInputValue(advContent)}>
        ADV
      </Button>
      <Button onClick={() => setInputValue(auxContent)}>
        AUX
      </Button>
      <Button onClick={() => setInputValue(cconjContent)}>
        CCONJ
      </Button>
      <Button onClick={() => setInputValue(detContent)}>
        DET
      </Button>
      <Button onClick={() => setInputValue(nounContent)}>
        NOUN        
      </Button>
      <Button onClick={() => setInputValue(numContent)}>
        NUM
      </Button>
      <Button onClick={() => setInputValue(pronContent)}>
        PRON
      </Button>
      <Button onClick={() => setInputValue(propnContent)}>
        PREP
      </Button>
      <Button onClick={() => setInputValue(sconjContent)}>
        SCONJ
      </Button>
      <Button onClick={() => setInputValue(verbContent)}>
        VERB
      </Button>

      <Button onClick={handleLoadCards} className="bg-green-500">
        START
      </Button>
      </div>
    </div>
  );
};

export default FlashcardInput;