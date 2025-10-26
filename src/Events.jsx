import {useEffect, useState} from 'react'
import './styles/index.css';
import { IoIosCloseCircleOutline } from "react-icons/io";
import events from './assets/event_data.json';
import upcomingEvent from './assets/event-images/upcoming_event.avif';
import event0_thumbnail from './assets/event-images/event0_thumbnail.avif';
import event0_1 from './assets/event-images/event0_1.avif';
import event0_2 from './assets/event-images/event0_2.avif';
import event1_thumbnail from './assets/event-images/event1_thumbnail.webp';
import event1_1 from './assets/event-images/event1_1.avif';
import event1_2 from './assets/event-images/event1_2.avif';
import event2_thumbnail from './assets/event-images/event2_thumbnail.avif';
import event2_1 from './assets/event-images/event2_1.avif';
import event3_thumbnail from './assets/event-images/event3_thumbnail.avif';
import event3_1 from './assets/event-images/event3_1.avif';
import event3_2 from './assets/event-images/event3_2.avif';

const imageMap = {
  "./upcoming_event.avif": upcomingEvent,
  "./event0_thumbnail.avif": event0_thumbnail,
  "./event0_1.avif": event0_1,
  "./event0_2.avif": event0_2,
  "./event1_thumbnail.webp": event1_thumbnail,
  "./event1_1.avif": event1_1,
  "./event1_2.avif": event1_2,
  "./event2_thumbnail.avif": event2_thumbnail,
  "./event2_1.avif": event2_1,
  "./event3_thumbnail.avif": event3_thumbnail,
  "./event3_1.avif": event3_1,
  "./event3_2.avif": event3_2,
};

const Events = () => {

  const [selectedEvent, setSelectedEvent] = useState(null);
  const openModal = (event) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedEvent]);


  return (
     <div className="events-main-div" id="events">
      <h1 className="events-heading1">Events</h1>
      <div className="event-card-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img loading="lazy" src={imageMap[event.thumbnail_img]} alt={`${event.title} event image at Shri Veda Vyasa Seva Trust (SVVST), Cherthala`} className="event-img"/>
            <div className="card-text-section">
              <h2>{event.title}</h2>
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
              <p>{event.description}</p>
            </div>
            <button className="card-button" onClick={() => openModal(event)}>Gallery</button>
          </div>
        ))}
      </div>
      {selectedEvent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-sameline">
              <h2>{selectedEvent.title}</h2>
              <IoIosCloseCircleOutline class="modal-close-icon" onClick={closeModal}/>
            </div>
            <div className="modal-image-div">
              {selectedEvent.images?.map((imgPath, index) => (
                <img loading="lazy" key={index} src={imageMap[imgPath]} alt={`${selectedEvent.title} image ${index + 1}`}  className="modal-event-img"/>
              ))}
            </div>
            <a target="_blank" href={selectedEvent.galleryLink}>
              <button className="card-button">More Photos</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;