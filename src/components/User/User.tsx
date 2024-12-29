type ObjectDisplayProps = {
  user: Record<string, any>;
};

function User({ user }: ObjectDisplayProps) {
  return (
    <div>
      Name: {user.firstName} {user.lastName} <br /> Username: {user.userName}
    </div>
  );
}

export default User;
