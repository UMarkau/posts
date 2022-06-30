/* eslint-disable jsx-a11y/anchor-is-valid */
import { apiTypes } from "../../../../../API";

interface IProps {
  comment: apiTypes.IComment;
}

export const PostComment = ({ comment }: IProps) => (
  <li>
    <div className="flex space-x-3">
      <div className="flex-shrink-0">
        <svg
          width="13"
          height="35"
          viewBox="0 0 13 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 0V26C1 30.4183 4.58172 34 9 34H13"
            stroke="#9CA3AF"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div>
        <div className="text-sm">
          <a href="#" className="font-medium text-gray-900">
            {comment.name}{" "}
            <span className="font-normal text-gray-500">{comment.email}</span>
          </a>
        </div>
        <div className="mt-1 text-sm text-gray-700">
          <p>{comment.body}</p>
        </div>
      </div>
    </div>
  </li>
);
