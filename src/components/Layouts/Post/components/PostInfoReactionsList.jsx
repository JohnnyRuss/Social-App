import { ReactionSVG } from './PostInfoStyled';

function PostInfoReactionsList({ reactionsVariety }) {
  return reactionsVariety.map((variety, i) => (
    <ReactionSVG src={variety.src} alt={variety.alt} key={`post reaction ${i}:${variety.alt}`} />
  ));
}

export default PostInfoReactionsList;
