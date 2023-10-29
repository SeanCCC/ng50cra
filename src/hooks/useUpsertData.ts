import { useGlobalContext } from "@/app/context/store";
import { getUser, initUser, updateUser } from "@/common/firebaseDB"
import { UserData, UserSchema } from "@common/types";
import { FieldValue } from "firebase/firestore";

const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so we add 1
  const day = String(today.getDate()).padStart(2, '0');
  
  return `${year}.${month}.${day}`;
}

export const useUpsertData = () => {
  const {
    firstSelected,
    secondSelected,
    thirdSelected,
    award,
    name,
    userId,
    username,
    shareImage1,
    shareImage2
  } = useGlobalContext()

  const upsertUser = async (userId: string, username: string) => {
    if(!userId) {
      alert('LINE Login失敗，無法更新使用者資料')
    } else {
      const user = await getUser(userId);
      if(!user) {
        await initUser(userId, username)
      }
    }
  }

  const saveAward = async () => {
    if(!userId) {
      alert('LINE Login失敗，無法更新使用者資料')
    } else {
      const userData = {
        award: award.award,
        actor1: firstSelected?.name??"",
        actor2: secondSelected?.name??"",
        actor3: thirdSelected?.name??"",
        id: userId,
        username,
        screenplayDate: getCurrentDate(),
        screenplayName: name,
        shareImage1Url: shareImage1,
        shareImage2Url: shareImage2,
      }

      await updateUser(userId, userData)
    }
  }

  return {
    upsertUser,
    saveAward,
  }

}