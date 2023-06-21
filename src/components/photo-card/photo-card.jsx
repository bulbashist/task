import { useDispatch, useSelector } from "react-redux";
import {
  ImageWrapper,
  Img,
  ControlFrame,
  UpperPanel,
  ActionButton,
  LowerPanel,
  ImageLoading,
} from "./styles";
import { likePhoto } from "../../store/photos/photos";
import { useState } from "react";
import { useEffect } from "react";
import {
  IconBookmark,
  IconDownload,
  IconHeart,
  IconHeartLiked,
} from "../../assets/icons";
import avatar from "../../assets/avatar.png";
import { download } from "../../store/photos/thunks";

export const PhotoCard = ({ photo }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const size = useSelector((state) => state.filters.size);
  const dispatch = useDispatch();

  useEffect(() => {
    const img = new Image();
    img.src = size ? photo.src[size] : photo.src.original;
    img.onload = () => setIsLoaded(true);
  }, [photo, size]);

  return (
    <ImageWrapper
      key={photo.id}
      style={{
        backgroundColor: photo.avg_color,
        aspectRatio: photo.width / photo.height,
      }}
    >
      {isLoaded ? (
        <Img src={size ? photo.src[size] : photo.src.original} alt="" />
      ) : (
        <ImageLoading />
      )}
      <ControlFrame>
        <UpperPanel>
          <ActionButton>
            <IconBookmark />
          </ActionButton>
          <ActionButton
            className="photo-like"
            onClick={() => dispatch(likePhoto(photo.id))}
          >
            {photo.liked ? <IconHeartLiked /> : <IconHeart />}
          </ActionButton>
        </UpperPanel>
        <LowerPanel>
          <a
            href={photo.photographer_url}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <img src={avatar} alt="" className="avatar" />
            <span className="name">{photo.photographer}</span>
          </a>
          <ActionButton onClick={() => dispatch(download(photo.src.original))}>
            <IconDownload />
          </ActionButton>
        </LowerPanel>
      </ControlFrame>
    </ImageWrapper>
  );
};
