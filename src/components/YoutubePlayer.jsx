import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Modal from './Modal';

const YoutubePlayer = ({ videoKey }) => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    return (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ReactPlayer
                className="video-player"
                url={`https://www.youtube.com/watch?v=${videoKey}`}
                controls={true}
                playing={true}
                data-testid="youtube-player"
            />
        </Modal>
    );
};

export default YoutubePlayer;