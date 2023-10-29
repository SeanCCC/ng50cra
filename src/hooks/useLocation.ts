import { useHistory } from "react-router-dom";

export function useRouter() {
  const history = useHistory();
  return history;
}