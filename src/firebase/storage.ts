import { getStorage, ref } from "firebase/storage";
import { app } from "./firebase";


export const storage = getStorage(app)

export const handleUpload = async (file: any) => { 
    const storageRef = await ref(storage, `/files/${file.name}`)
    return storageRef
}