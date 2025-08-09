import React, { useState } from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import FlashcardInput from "@/components/FlashcardInput";
import FlashcardViewer from "@/components/FlashcardViewer";
import { Flashcard } from "@/types/flashcard";
import { shuffleArray } from "@/lib/utils"; // Import the shuffle utility
import { Link } from "react-router-dom"; // Import Link for navigation
import { Button } from "@/components/ui/button"; // Import Button for styling
import backgroundImage from '../../public/background.jpeg';

const Index = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[] | null>(null);

  const handleCardsLoaded = (cards: Flashcard[]) => {
    const shuffledCards = shuffleArray(cards); // Shuffle the cards here
    setFlashcards(shuffledCards);
  };

  const handleResetSession = () => {
    setFlashcards(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 bg-no-repeat bg-cover"
    style={{backgroundImage: `url(${backgroundImage})`}}>
      <h1 className="text-4xl font-bold mb-8 text-center">Flashcard Learner</h1>
      {flashcards === null ? (
        <FlashcardInput onLoadCards={handleCardsLoaded} />
      ) : (
        <FlashcardViewer flashcards={flashcards} onReset={handleResetSession} />
      )}
      <div className="mt-8">
        <Link to="/specs">
          <Button variant="link" className="text-blue-600 hover:text-blue-800">View Application Specification</Button>
        </Link>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;