// src/pages/zen-pacific-orlando-page/page.tsx
import type React from 'react';
import type { JSX } from 'react';

interface QuickAction {
  title: string;
  icon: JSX.Element;
}

interface ServiceCard {
  imgSrc: string;
  title: string;
  text: string;
  primaryLabel: string;
  secondaryLabel: string;
}

interface Conversation {
  id: number;
  avatar: string;
  name: string;
  time: string;
  userQuery: string;
  title: string;
  text: string;
  listItems?: string[];
  tableData?: { area: string; hours: string; notes: string }[];
}

interface SuggestionChip {
  label: string;
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
        <title>Check-in</title>
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      </svg>
    )
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
        <title>Add Services</title>
        <path d="M3 3h18v18H3zM12 8v8m-4-4h8" />
      </svg>
    )
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
        <title>Directions</title>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx={12} cy={10} r={3} />
      </svg>
    )
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
        <title>Modify Dates</title>
        <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
        <line x1={16} y1={2} x2={16} y2={6} />
        <line x1={8} y1={2} x2={8} y2={6} />
        <line x1={3} y1={10} x2={21} y2={10} />
      </svg>
    )
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
        <title>Guest Info</title>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx={12} cy={7} r={4} />
      </svg>
    )
  }
];

const serviceCards: ServiceCard[] = [
  {
    imgSrc: 'https://placehold.co/400x200?text=Spa+Treatment',
    title: 'Spa Treatment',
    text: 'Recommended for you: Based on your previous stays, you might enjoy our new Zen Relaxation Package.',
    primaryLabel: 'Book Now',
    secondaryLabel: 'Learn More'
  },
  {
    imgSrc: 'https://placehold.co/400x200?text=Room+Upgrade',
    title: 'Room Upgrade Available',
    text: 'Upgrade to our Executive Ocean Suite for only $75 more per night. Includes private balcony and premium amenities.',
    primaryLabel: 'Upgrade',
    secondaryLabel: 'View Details'
  },
  {
    imgSrc: 'https://placehold.co/400x200?text=Dining+Options',
    title: 'Dining Reservations',
    text: 'Secure your table at our acclaimed Ocean View Restaurant. Special menu available during your stay.',
    primaryLabel: 'Reserve',
    secondaryLabel: 'See Menu'
  }
];

const conversationHistory: Conversation[] = [
  {
    id: 1,
    avatar: 'https://placehold.co/20x20?text=ZP',
    name: 'Zen Pacific Concierge',
    time: 'Today, 2:17 PM',
    userQuery: 'Do you have any kid-friendly activities during our stay?',
    title: 'Kids Activities During Your Stay',
    text: 'We have several activities perfect for children during your stay dates (May 15-20):',
    listItems: [
      'Kids Club (ages 4-12): Daily from 9AM-4PM',
      'Pool Games: Every afternoon at 2PM',
      'Movie Night: May 16 & 18 at 7PM',
      'Sea Turtle Workshop: May 17 at 10AM'
    ]
  },
  {
    id: 2,
    avatar: 'https://placehold.co/20x20?text=ZP',
    name: 'Zen Pacific Concierge',
    time: 'Just now',
    userQuery: 'When is your pool open',
    title: 'Pool Hours & Information',
    text: 'During your stay (May 15-20), our pools will be operating on the following schedule:',
    tableData: [
      { area: 'Main Resort Pool', hours: '7:00 AM - 10:00 PM', notes: 'Heated to 82°F' },
      { area: 'Adult Infinity Pool', hours: '8:00 AM - 9:00 PM', notes: 'Ages 18+ only' },
      { area: 'Children\'s Splash Pad', hours: '9:00 AM - 7:00 PM', notes: 'Supervised activities 2-4 PM' },
      { area: 'Indoor Pool & Spa', hours: '6:00 AM - 11:00 PM', notes: 'Located in wellness center' }
    ]
  }
];

const suggestionChips: SuggestionChip[] = [
  { label: 'Pool dining options?' },
  { label: 'Special pool events?' },
  { label: 'Cabana pricing?' }
];

const QuickActionComponent: React.FC<QuickAction> = ({ icon, title }) => (
  <div className="quick-action">
    {icon}
    <span className="quick-action-title">{title}</span>
  </div>
);

const ServiceCardComponent: React.FC<ServiceCard> = ({
  imgSrc,
  title,
  text,
  primaryLabel,
  secondaryLabel
}) => (
  <div className="card">
    <div className="card-img" style={{ backgroundImage: `url('${imgSrc}')` }} />
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{text}</p>
      <div className="card-actions">
        <button type='button' className="btn btn-primary">{primaryLabel}</button>
        <button type='button' className="btn btn-secondary">{secondaryLabel}</button>
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
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
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
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
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

const SuggestionChipComponent: React.FC<SuggestionChip> = ({ label }) => (
  <button type='button' className="suggestion-chip">{label}</button>
);

export const ZenPacificOrlandoPage: React.FC = () => {
  return (
    <>
      {/* Static content */}
      <section className="static-content">
        <div className="container">
          <h2 className="section-title">Quick Actions</h2>
          <div className="quick-actions">
            {quickActions.map((action) => (
              <QuickActionComponent
                key={action.title}
                title={action.title}
                icon={action.icon}
              />
            ))}
          </div>

          <h2 className="section-title">Enhance Your Stay</h2>
          <div className="cards-section">
            {serviceCards.map((card) => (
              <ServiceCardComponent
                key={card.title}
                {...card}
              />
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
          <div className="suggestion-chips">
            {suggestionChips.map((chip) => (
              <SuggestionChipComponent key={chip.label} {...chip} />
            ))}
          </div>
        </div>
      </section>

      {/* Messaging input */}
      <section className="messaging-container">
        <div className="container">
          <div className="message-input-container">
            <input
              type="text"
              className="message-input"
              placeholder="Ask me anything about your stay..."
            />
            <button type='button' className="send-button">
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
                <title>Send</title>
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
