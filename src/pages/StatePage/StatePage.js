import { useUserData } from "../../providers/userData";

function StatePage() {
  const { userData } = useUserData();
  console.log(userData);
  console.log("1")
  return <>teste</>;
}

export default StatePage;
