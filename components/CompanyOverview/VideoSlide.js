import React, { useState } from 'react';
import ReactPlayer from 'react-player/vimeo';
import { Modal, Button } from 'react-bootstrap';
import Image from 'next/image';

const VideoSlide = ({ videoUrl, thumbnail }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="video-slide d-flex align-items-center justify-content-center">
      {/* Video Thumbnail with Cover */}
      <div className="video-thumbnail">
        <Image
          src={thumbnail}
          alt="Video Thumbnail"
          width={480}
          height={450}
        />
      </div>

      {/* Play Button */}
      <Button
        variant="link"
        onClick={handleShow}
        className="play-button"
        aria-label="Play Video"
      >
        <i className="bi bi-play-circle-fill"></i>
      </Button>

      {/* Modal for Video Playback */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body className="p-0">
          <ReactPlayer
            url={videoUrl}
            playing
            controls
            width="100%"
            height="100%"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default VideoSlide;
