// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";

// import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

// import { SearchBar } from "../../components/SearchBar";
// import { FullScreenLoading } from "../../components/FullScreenLoading";
// import { PokemonCard } from "../../components/PokemonCard";
// import { usePokemonsPaginated } from "../../hooks/usePokemonsPaginated";
// import type { BasicPokemon } from "../../types/basic-pokemon.interface";


// Quick Action definitions
interface QuickAction {
  title: string;
  icon: React.ReactNode;
}

const quickActions: QuickAction[] = [
  {
    title: 'Early Check-in',
    icon: (
      <svg
        className="quick-action-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Quick action icon</title>
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      </svg>
    ),
  },
  {
    title: 'Add Services',
    icon: (
      <svg
        className="quick-action-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Quick action icon</title>
        <path d="M3 3h18v18H3zM12 8v8m-4-4h8" />
      </svg>
    ),
  },
  {
    title: 'Directions',
    icon: (
      <svg
        className="quick-action-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Quick action icon</title>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx={12} cy={10} r={3} />
      </svg>
    ),
  },
  {
    title: 'Modify Dates',
    icon: (
      <svg
        className="quick-action-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Quick action icon</title>
        <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
        <line x1={16} y1={2} x2={16} y2={6} />
        <line x1={8} y1={2} x2={8} y2={6} />
        <line x1={3} y1={10} x2={21} y2={10} />
      </svg>
    ),
  },
  {
    title: 'Guest Info',
    icon: (
      <svg
        className="quick-action-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Quick action icon</title>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx={12} cy={7} r={4} />
      </svg>
    ),
  },
];

// Service Card definitions
interface ServiceCard {
  title: string;
  text: string;
  imageUrl: string;
  primaryLabel: string;
  secondaryLabel: string;
}

const serviceCards: ServiceCard[] = [
  {
    title: 'Spa Treatment',
    text: 'Recommended for you: Based on your previous stays, you might enjoy our new Zen Relaxation Package.',
    imageUrl: 'https://placehold.co/400x200?text=Spa+Treatment',
    primaryLabel: 'Book Now',
    secondaryLabel: 'Learn More',
  },
  {
    title: 'Room Upgrade Available',
    text: 'Upgrade to our Executive Ocean Suite for only $75 more per night. Includes private balcony and premium amenities.',
    imageUrl: 'https://placehold.co/400x200?text=Room+Upgrade',
    primaryLabel: 'Upgrade',
    secondaryLabel: 'View Details',
  },
  {
    title: 'Dining Reservations',
    text: 'Secure your table at our acclaimed Ocean View Restaurant. Special menu available during your stay.',
    imageUrl: 'https://placehold.co/400x200?text=Dining+Options',
    primaryLabel: 'Reserve',
    secondaryLabel: 'See Menu',
  },
];

// Suggestion chip labels
const suggestionChips: string[] = [
  'Pool dining options?',
  'Special pool events?',
  'Cabana pricing?',
];

// QuickAction component
const QuickActionComponent: React.FC<{ action: QuickAction }> = ({ action }) => (
  <div className="quick-action">
    {action.icon}
    <span className="quick-action-title">{action.title}</span>
  </div>
);

// Service Card component
const ServiceCardComponent: React.FC<{ card: ServiceCard }> = ({ card }) => (
  <div className="card">
    <div
      className="card-img"
      style={{ backgroundImage: `url(${card.imageUrl})` }}
    />
    <div className="card-content">
      <h3 className="card-title">{card.title}</h3>
      <p className="card-text">{card.text}</p>
      <div className="card-actions">
        <button type="button" className="btn btn-primary">{card.primaryLabel}</button>
        <button type="button" className="btn btn-secondary">{card.secondaryLabel}</button>
      </div>
    </div>
  </div>
);


const ResponseCardComponent: React.FC<Conversation> = ({
  avatar,
  name,
  time,
  userQuery,
  title,
  text,
  listItems,
  tableData
}) => (
  <div className="response-card">
    <div className="response-header">
      <div className="response-avatar">
        <img src={avatar} alt={name} />
      </div>
      <div className="response-info">
        <div className="response-name">{name}</div>
        <div className="response-time">{time}</div>
      </div>
    </div>
    <div className="response-content">
      <div className="user-query">{userQuery}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{text}</p>
      {listItems && (
        <ul style={{ marginBottom: '15px', paddingLeft: '20px' }}>
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      {tableData && (
        <table className="pool-hours-table">
          <thead>
            <tr>
              <th>Pool Area</th>
              <th>Hours</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i}>
                <td>{row.area}</td>
                <td>{row.hours}</td>
                <td>{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </div>
);


interface SuggestionChip {
  label: string;
}

const suggestionChips2: SuggestionChip[] = [
  { label: 'Pool dining options?' },
  { label: 'Special pool events?' },
  { label: 'Cabana pricing?' }
];

const SuggestionChipComponent = ({ label }: SuggestionChip) => (
  <button type="button" className="suggestion-chip">{label}</button>
);

export const ZenPacificOrlandoPage = () => {
	// const navigate = useNavigate();

	// const { pokemons, totalPages, currentPage, isLoading, onPrefetchNextPage } =
	// 	usePokemonsPaginated();

	// const [favorites, setFavorites] = useState<number[]>(() => {
	// 	const saved = localStorage.getItem("favorites");
	// 	return saved ? JSON.parse(saved) : [];
	// });

	// const [showFavorites, setShowFavorites] = useState(false);

	// useEffect(() => {
	// 	localStorage.setItem("favorites", JSON.stringify(favorites));
	// }, [favorites]);

	// const toggleFavorite = (pokemonId: number) => {
	// 	setFavorites((prev) =>
	// 		prev.includes(pokemonId)
	// 			? prev.filter((id) => id !== pokemonId)
	// 			: [...prev, pokemonId],
	// 	);
	// };

	// const displayedPokemons = showFavorites
	// 	? pokemons.filter((pokemon: { id: number }) =>
	// 			favorites.includes(pokemon.id),
	// 		)
	// 	: pokemons;

	return (
		<>
			ZenPacificOrlandoPage
			{/* Static content */}
			<section className="static-content">
				<div className="container">
					<h2 className="section-title">Quick Actions</h2>
					<div className="quick-actions">
            {quickActions.map((action) => (
              <QuickActionComponent key={action.title} action={action} />
            ))}
          </div>

					<h2 className="section-title">Enhance Your Stay</h2>
					<div className="cards-section">
            {serviceCards.map((card) => (
              <ServiceCardComponent key={card.title} card={card} />
            ))}
          </div>
				</div>
			</section>
			{/* Conversation history */}
			<section className="conversation-area">
        <div className="container">
          <div className="response-cards">
            {conversationHistory.map((conv) => (
              <ResponseCardComponent key={conv.id} {...conv} />
            ))}
          </div>
        </div>
      </section>
			{/* Messaging input */}
			<section className="messaging-container">
        <div className="container">
          {/* Latest response card (static or dynamic) */}
          <div className="message-input-container">
            <input
              type="text"
              className="message-input"
              placeholder="Ask me anything about your stay..."
            />
            <button type="button" className="send-button">
              <svg
                className="send-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>send button icon</title>
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
          <div className="suggestion-chips">
            {suggestionChips2.map((chip) => (
              <SuggestionChipComponent key={chip.label} {...chip} />
            ))}
          </div>
        </div>
      </section>
		</>
	);
};
