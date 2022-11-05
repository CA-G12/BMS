import ReactPlayer from 'react-player';
import './style.css';

const VideoSection: React.FC = () => (
  <div className="videoSection">
    <ReactPlayer className="video" id="video" url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
  </div>
);

export default VideoSection;
