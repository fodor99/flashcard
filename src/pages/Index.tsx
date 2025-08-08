import React, { useState } from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import FlashcardInput from "@/components/FlashcardInput";
import FlashcardViewer from "@/components/FlashcardViewer";
import { Flashcard } from "@/types/flashcard";

const Index = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[] | null>(null);

  const handleCardsLoaded = (cards: Flashcard[]) => {
    setFlashcards(cards);
  };

  const handleResetSession = () => {
    setFlashcards(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Flashcard Learner</h1>
      {flashcards === null ? (
        <FlashcardInput onLoadCards={handleCardsLoaded} />
      ) : (
        <FlashcardViewer flashcards={flashcards} onReset={handleResetSession} />
      )}
      <MadeWithDyad />
    </div>
  );
};

export default Index;