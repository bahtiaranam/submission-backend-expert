class DeleteComment {
  constructor(payload) {
    this._verifyPayload(payload);

    const { threadId, commentId, userId } = payload;

    this.threadId = threadId;
    this.commentId = commentId;
    this.userId = userId;
  }

  _verifyPayload({ threadId, commentId }) {
    if (!threadId || !commentId) {
      throw new Error("POSTING_THREAD_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY");
    }

    if (typeof threadId !== "string" || typeof commentId !== "string") {
      throw new Error(
        "POSTING_THREAD_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION"
      );
    }
  }
}

module.exports = DeleteComment;