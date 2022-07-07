import { Container, ReactionIcon } from './commentReactionsStyled';

function CommentReactions({ commentReactions, comment }) {
  return (
    <Container>
      {commentReactions?.map((reaction, i) => (
        <ReactionIcon
          src={reaction.src}
          alt={reaction.alt}
          key={`comment reaction ${i}:${reaction.alt}`}
        />
      ))}
      {comment?.reactions?.length}
    </Container>
  );
}

export default CommentReactions;
