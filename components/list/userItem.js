import Link from "next/link";
import { useRouter } from "next/router";

const UserItem = ({ user }) => {
  const router = useRouter();
  return (
    <li
      key={user._id}
      className="list-group-item list-group-item-action"
      style={{ cursor: "pointer" }}
    >
      <Link href={`/user/${encodeURIComponent(user._id)}`}>
        <a>{`${user.firstName} ${user.lastName}`}</a>
      </Link>
    </li>
  );
};

export default UserItem;
