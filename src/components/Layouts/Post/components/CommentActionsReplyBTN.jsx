import {ReplyBTN} from "./commentActionsStyled"

function CommentActionsReplyBTN({ activeReplyHandler, comment }) {
  return (
    <ReplyBTN
      onClick={() =>
        activeReplyHandler(
          {
            id: comment.id,
            authorName: comment.authorName,
            adressatComment: comment.id,
            adressat: comment.authorId,
          },
          {}
        )
      }>
      reply
    </ReplyBTN>
  );
}

export default CommentActionsReplyBTN;
