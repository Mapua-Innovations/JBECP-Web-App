import React from 'react';
import './EventDetails.css';

const EventDetails: React.FC = () => {
 return (
    <div className="event-details-container">
        <div className="event-details">
            <img src="/ImageAssets/BCCEvent1.png" alt="Event 1" />
            <div className="event-description">
                <h2>Blockchain Campus Conference 2023</h2>
                <p>Description of Event 1.</p>
            </div>
        </div>
        <div className="event-details">
            <div className="event-description">
                <h2>Event 2</h2>
                <p>Description of Event 2.</p>
            </div>
            <img src="/path/to/event2/image.jpg" alt="Event 2" />
        </div>
    </div>
 );
};

export default EventDetails;
