import React from "react";

const commentsData = [
  {
    name: "Alex Johnson",
    text: "Lorem ipsum dolor sit amet constractor audit to fix..",
    replies: [],
  },
  {
    name: "Alex Johnson",
    text: "Lorem ipsum dolor sit amet constractor audit to fix..",
    replies: [
      {
        name: "Alex Johnson",
        text: "Lorem ipsum dolor sit amet constractor audit to fix..",
        replies: [],
      },
      {
        name: "Alex Johnson",
        text: "Lorem ipsum dolor sit amet constractor audit to fix..",
        replies: [
          {
            name: "Alex Johnson",
            text: "Lorem ipsum dolor sit amet constractor audit to fix..",
            replies: [],
          },
          {
            name: "Alex Johnson",
            text: "Lorem ipsum dolor sit amet constractor audit to fix..",
            replies: [
              {
                name: "Alex Johnson",
                text: "Lorem ipsum dolor sit amet constractor audit to fix..",
                replies: [],
              },
              {
                name: "Alex Johnson",
                text: "Lorem ipsum dolor sit amet constractor audit to fix..",
                replies: [],
              },
              {
                name: "Alex Johnson",
                text: "Lorem ipsum dolor sit amet constractor audit to fix..",
                replies: [],
              },
            ],
          },
          {
            name: "Alex Johnson",
            text: "Lorem ipsum dolor sit amet constractor audit to fix..",
            replies: [],
          },
        ],
      },
      {
        name: "Alex Johnson",
        text: "Lorem ipsum dolor sit amet constractor audit to fix..",
        replies: [],
      },
    ],
  },
  {
    name: "Alex Johnson",
    text: "Lorem ipsum dolor sit amet constractor audit to fix..",
    replies: [],
  },
  {
    name: "Alex Johnson",
    text: "Lorem ipsum dolor sit amet constractor audit to fix..",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12 "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        alt="comment-user-image"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, i) => (
    <div>
      <Comment key={i} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <>
      <div className="m-5 p-2">
        <h1 className="text-xl font-bold">Comments: </h1>
        <CommentsList comments={commentsData} />
      </div>
    </>
  );
};

export default CommentsContainer;
